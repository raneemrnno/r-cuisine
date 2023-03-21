const db = require("./db");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "e.raneemtaha96@gmail.com",
    pass: "kggmxttointcmqst",
  },
});

const app = express();
app.use(express.json());
app.use(cors());

//remove item from shopping cart
app.get("/remove_cart_item/:id/:username/:item_type", async (req, res) => {
  const id = req.params.id;
  const item_type = req.params.item_type;
  const username = req.params.username;

  db.getConnection(async (err, connection) => {
    if (err) throw err;
    const sqlDelete =
      "DELETE FROM order_items WHERE username = ? and id = ? and item_type = ? and status = 0";
    const delete_query = mysql.format(sqlDelete, [username, id, item_type]);
    await connection.query(delete_query, async (err, result) => {
      if (err) throw err;
      console.log("------> Item Deleteted");
      if (result.length != 0) {
        connection.release();
        res.send("deleted");
      } else {
        res.send("error");
      }
    });
  });
});

//place order
app.post("/place_order", async (req, res) => {
  const username = req.body.username;
  const address = req.body.address;
  const phone = req.body.phone;
  const date = req.body.date;
  const time = req.body.time;
  const notes = req.body.notes;
  const created_date = new Date();

  const payment = req.body.payment;
  const cardNumber = req.body.cardNumber;
  const expDate = req.body.expDate;
  const security = req.body.security;

  db.getConnection(async (err, connection) => {
    if (err) throw err;
    const sqlUpdate = "Update order_items SET status = 1 WHERE username = ?";
    const update_query = mysql.format(sqlUpdate, [username]);
    const sqlInsert =
      "INSERT INTO orders (username, address, phone, date, time, notes, created_date, payment, card_number, expiry, cvv) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    const insert_query = mysql.format(sqlInsert, [
      username,
      address,
      phone,
      date,
      time,
      notes,
      created_date,
      payment,
      cardNumber,
      expDate,
      security,
    ]);
    await connection.query(insert_query, (err, result) => {
      if (err) throw err;
      console.log("--------> Placed new order");
      console.log(result.insertId);

      connection.query(update_query, (err, result) => {
        if (err) throw err;
        if (result.length != 0) {
          connection.release();
          res.send("order placed");
          var mailOptions = {
            from: "e.raneemtaha96@gmail.com",
            to: username,
            subject: "Order Confirmation",
            text: "Thank you for using our services,\nYour order has been successfully placed and we are working on it.\nHave A Nice Day.",
          };
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
        }
      });
    });
  });
});

//view cart items
app.get("/view_cart_items/:username", async (req, res) => {
  const username = req.params.username;
  //console.log("hi", username);
  db.getConnection(async (err, connection) => {
    if (err) throw err;
    const sqlSearch =
      "SELECT * FROM order_items WHERE username = ? and status = 0";
    const search_query = mysql.format(sqlSearch, [username]);
    await connection.query(search_query, async (err, result) => {
      if (err) throw err;
      console.log("------> Search Results");
      console.log(result.length);
      if (result.length != 0) {
        connection.release();
        //console.log("------> order items found", result);
        //res.send(result);
        res.send(result);
      } else {
        res.send("error");
      }
    });
  });
});

// add to cart process
app.post("/create_order_item", async (req, res) => {
  const item_id = req.body.item_id;
  const item_name = req.body.item_name;
  const item_type = req.body.item_type;
  const people_number = req.body.people_number;
  const price = req.body.price;
  const username = req.body.username;
  db.getConnection(async (err, connection) => {
    if (err) throw err;
    const sqlInsert =
      "INSERT INTO order_items (item_id,item_name,item_type, people_number, price,username) VALUES (?,?,?,?,?,?)";
    const insert_query = mysql.format(sqlInsert, [
      item_id,
      item_name,
      item_type,
      people_number,
      price,
      username,
    ]);
    await connection.query(insert_query, (err, result) => {
      connection.release();
      if (err) throw err;
      console.log("--------> Created new order item");
      console.log(result.insertId);

      res.send("item added to card");
    });
  });
});

//CREATE USER
app.post("/createUser", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  db.getConnection(async (err, connection) => {
    if (err) throw err;
    const sqlSearch = "SELECT * FROM users WHERE email = ?";
    const search_query = mysql.format(sqlSearch, [email]);
    const sqlInsert =
      "INSERT INTO users (f_name, l_name, email, password) VALUES (?,?,?,?)";
    const insert_query = mysql.format(sqlInsert, [
      firstName,
      lastName,
      email,
      hashedPassword,
    ]);
    await connection.query(search_query, async (err, result) => {
      if (err) throw err;
      console.log("------> Search Results");
      console.log(result.length);
      if (result.length != 0) {
        connection.release();
        console.log("------> User already exists");
        res.send("exist");
      } else {
        await connection.query(insert_query, (err, result) => {
          connection.release();
          if (err) throw err;
          console.log("--------> Created new User");
          console.log(result.insertId);
          res.send("created");
        });
      }
    });
  });
});

//find user to login
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.getConnection(async (err, connection) => {
    if (err) throw err;
    const sqlSearch = "Select * from users where email = ?";
    const search_query = mysql.format(sqlSearch, [email]);
    await connection.query(search_query, async (err, result) => {
      connection.release();

      if (err) throw err;
      if (result.length == 0) {
        console.log("--------> User does not exist");
        res.sendStatus(404);
      } else {
        const hashedPassword = result[0].password;
        //get the hashedPassword from result
        if (await bcrypt.compare(password, hashedPassword)) {
          res.send(`${email} is logged in!`);
        } else {
          console.log("---------> Password Incorrect");
          res.send("Password incorrect!");
        } //end of bcrypt.compare()
      } //end of User exists i.e. results.length==0
    }); //end of connection.query()
  }); //end of db.connection()
}); //end of app.post()

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
