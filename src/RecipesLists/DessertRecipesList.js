const DessertRecipesList = [
  {
    id: 1,
    type: "desserts",
    category: "western",
    country: "French",
    title: "Charlotte Cake",
    description:
      "A French molded dessert can be served hot or cold. Also referred to as an “icebox cake” where bread, sponge cake or cookies are used to line a mold, which is then filled with fruit puree, mousse, or custard",
    getImageSrc: () => require("../images/Charlotte-Cake.webp"),
    ingrediants: [
      "4 large eggs, room temperature",
      " 2/3 cup granulated sugar",
      " 2/3 cup cake flour",
      "(7 oz pkg) Lady Fingers",
      " 3-4 Tbsp raspberry preserves or jam",
      "10 oz (2 1/2 cups) frozen raspberries",
      " 1/2 cup granulated sugar",
      "Juice from 1 medium lemon (2 Tbsp for mousse + 1 Tbsp for simple syrup below)",
      "1 Tbsp Knox unflavored Gelatin (from 1 1/4 packets)",
      "3 cups heavy whipping cream",
      "6 Tbsp confectioners (powdered) sugar",
      "1 cup warm water",
      "1 Tbsp fresh lemon juice",
      "1 Tbsp sugar",
      "1 cup fresh raspberries and mint leaves for garnish",
    ],
    preparation_steps: [
      "1. In medium sauce pan, combine: 10 oz frozen raspberries and 1/2 cup sugar. Cook stirring occasionally until jam consistency. Remove from heat and strain through a sieve, pressing on the fruit with a spoon to extract as much raspberry juice as possible (you should get 2/3 cup syrup)",
      "2. Into the raspberry syrup, stir in 2 Tbsp lemon juice and 1 Tbsp gelatin. Pour syrup back into sauce pan and place back over medium heat, whisk until gelatin is dissolved. Do not boil. Remove from heat and cool to room temp",
      "3. Line a 9″ springform pan with parchment paper. Preheat oven to 350˚F.  In the bowl of your mixer with the whisk attachment on high speed, beat 4 eggs for 1 minute. Gradually add 2/3 cup sugar and continue beating on high 7 min until thick and 3 to 4 times in volume",
      "4. Stir together cake flour and baking powder then sift flour into whipped eggs in 2 additions, folding to incorporate between each addition. Scrape from the bottom to catch any hidden pockets of flour and fold just until incorporated – don’t overmix. Bake at 350˚F for 23-25 minutes or until top is golden and springs back when poked lightly",
      "5. Once it’s out of the oven, remove cake from pan by sliding a thin edged spatula around the edges. Transfer to wire rack, peel back parchment and cool to room temp. Then slice cake layers in half horizontally",
      "6. Cover springform walls with plastic wrap. Trim off 1/2″ all around the edges of both cake layers (I used kitchen scissors) and place the first layer into the bottom of your springform pan. Trim about 1/2″ off one end of all lady fingers. Place lady fingers in a tight ring, cut-side-down, around the cake base then brush cake with 1/3 of the simple syrup. Brush backs of lady fingers with 1/3 of syrup as well. Spread 1 1/2 Tbsp raspberry preserves over cake. Set aside",
      "7. With the whisk attachment, beat 3 cups heavy cream with 6 Tbsp powdered sugar on high speed until thick and spreadable. Remove 1 1/2 cups of whipped cream to a piping bag fitted with a star attachment and refrigerate to use as topping later",
      "8. Once raspberry syrup is completely at room temp (don’t wait way too long or it will thicken and become difficult to blend), fold it into remaining big batch of whipped cream adding 1/4 syrup at a time and folding between each addition. This is your mousse",
      "9. Spread 1/2 of the mousse over cake layer inside the springform. Top with second cake layer, brush with remaining simple syrup and spread with 1 1/2 Tbsp raspberry preserves. Add remaining mousse. Pipe whipped cream and top with fresh raspberries and mint leaves if using. Cover with plastic wrap and refrigerate until set (3 hours or overnight). To serve, remove springform walls and plastic wrap",
    ],
    side_dishes: "",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [40, 50, 70, 90, 110],
    created_at: {
      order: "1",
    },
  },

  {
    id: 2,
    type: "desserts",
    category: "western",
    country: "Italian",
    title: "Teramessu",
    description:
      "a classic Italian no-bake dessert made with layers of coffee-soaked ladyfingers and incredible mascarpone cream",
    getImageSrc: () => require("../images/teramessu.jpeg"),
    ingrediants: [
      "2 boxes of Ladyfinger biscuits",
      "Half a cup of liquid milk",
      "A box of whipping cream",
      "A cup of sugar",
      "2 tablespoons of Nescafe",
      "Vanilla",
      "150 grams of cream cheese",
      "Half a cup of water",
      "Cacao",
    ],
    preparation_steps: [
      "1. Dissolve the coffee and cocoa in the water, dip the biscuits in the mixture, then distribute half of the biscuits in the serving dish",
      "2. Whisk the cream, sugar and vanilla with an electric mixer until the ingredients thicken",
      "3. Add the cheese and milk afterwards and whisk for five minutes, until the ingredients are combined",
      "4. Add a teaspoon of the coffee and cocoa mixture to the cream mixture and stir",
      "5. Pour half of the cream mixture into the serving dish and spread it over the biscuits",
      "6. Layer the remaining half of the biscuits over the cream, then add the rest of the cream mixture on top",
      "7. For decoration: Sprinkle cocoa on top of the dessert, then put the tiramisu in the refrigerator for 8 hours until it solidifies",
      "8. Take the tiramisu out of the fridge and serve it cold",
    ],
    side_dishes: "",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [40, 50, 70, 90, 110],
    created_at: {
      order: "2",
    },
  },
  {
    id: 3,
    type: "desserts",
    category: "oriental",
    country: "Syrian",
    title: "Lazy Cake",
    description:
      "A non bake chocolate biscuit cake that is very popular in the Middle East",
    getImageSrc: () => require("../images/lazy_cake.jpg"),
    ingrediants: [
      "Two cups (400 g) of cocoa powder",
      "1 cup (200 g) unsalted butter or vegetable oil",
      "A cup (200 g) of sugar",
      "A cup (200 g) of powdered milk",
      "1 teaspoon (4 grams) of vanilla",
      "Two boxes of tea biscuits",
    ],
    preparation_steps: [
      "1. Break the biscuits into small pieces",
      "2. Put butter in a frying pan on the fire; to defrost it",
      "3. Gradually add sugar, milk, vanilla and cocoa to the butter, and stir the ingredients together until a homogeneous mixture appears",
      "4. Pour the previous mixture on the biscuits and stir well",
      "5. Bring a nylon bag, put part of the mixture in the middle of it, roll the bag and stack it to get a cylindrical shape",
      "6. Repeat the same previous step until the quantity is over",
      "7. Put the nylon in the refrigerator for at least two hours",
      "8. Take the nylon out of the fridge, cut the lazy cake and serve it",
    ],
    side_dishes: "",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [40, 50, 70, 90, 110],
    created_at: {
      order: "3",
    },
  },

  {
    id: 4,
    type: "desserts",
    category: "western",
    country: "Swedish",
    title: "Cinnamon Roll",
    description:
      "Consists of a rolled sheet of yeast-leavened dough onto which a cinnamon and sugar mixture",
    getImageSrc: () => require("../images/cinnamon.jpg"),
    ingrediants: [
      "Dough ingredients:",
      "Two and a half teaspoons of yeast",
      "1 cup of warm milk",
      "A third of a cup of sugar",
      "Half a cup of butter",
      "2 eggs",
      "Teaspoon of salt",
      "Filling amounts:",
      "4 cups of flour",
      "A third of a cup of butter",
      "A cup of brown sugar",
      "Two tablespoons of ground cinnamon",
      "For decoration:",
      "A cup and a half of powdered sugar",
      "Half a teaspoon of Vanilla",
      "3 tablespoons of Milk",
    ],
    preparation_steps: [
      "1. Mix the yeast with warm milk in a bowl, add 2 tablespoons of sugar and leave for 5 minutes",
      "2. Add sugar, butter, salt, eggs and flour to the yeast mixture and knead by hand or with a stand mixer until a non-sticky dough is formed",
      "3. Make a large ball of dough, cover it, and leave it for an hour until it ferments and doubles in size",
      "4. Sprinkle a little flour on the kitchen surface and roll out the dough to a thickness of ¼ inch",
      "5. Preheat the oven to 400 degrees",
      "6. To prepare the filling: mix the brown sugar and cinnamon in a bowl",
      "7. Melt the butter and spread the butter over the stretched dough, then spread the sugar and cinnamon mixture over it",
      "8. Carefully roll the dough into a roll",
      "9. Cut the dough with a sharp knife into circles about an inch thick",
      "10. Grease an oven tray with butter, place the rolled dough in it, and place it in the prepped oven for 14 minutes, until it becomes golden in color",
      "11. To decorate: mix powdered sugar with milk and vanilla until the mixture becomes homogeneous and thick",
      "12. Remove the rolls from the tray and leave them to cool for 5 minutes, then spread the sugar and milk mixture on top and serve them warm",
    ],
    side_dishes: "",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [15, 30, 40, 65, 85],
    created_at: {
      order: "4",
    },
  },

  {
    id: 5,
    type: "desserts",
    category: "oriental",
    country: "Syrian",
    title: "Mehallabiah",
    description:
      "Mohallabia is one of the famous desserts in the Arab world, and it is a favorite among children and adults. It is distinguished by its ease of preparation, and its delicious and pleasant taste",
    getImageSrc: () => require("../images/mehallabiah.jpg"),
    ingrediants: [
      "4 cups of liquid milk",
      "4 tablespoons of starch",
      "Half a cup of sugar",
      "Big spoon of flowers water",
    ],
    preparation_steps: [
      "1. Put three and a half cups of milk and sugar in a saucepan over a high heat, and bring the mixture to a boil",
      "2. Dissolve the starch with half a cup of cold milk, add it to the boiling milk gradually, and continue to stir",
      "3. Leave the mixture on the fire until it reaches the boiling stage, for a period of no less than two minutes, then remove it from the fire and add the blossom water, and distribute it into dishes suitable for serving, and sprinkle on the face coconut, pistachios or almonds",
    ],
    side_dishes: "",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [30, 50, 75, 90, 105],
    created_at: {
      order: "5",
    },
  },

  {
    id: 6,
    type: "desserts",
    category: "oriental",
    country: "Syrian",
    title: "Haressa",
    description:
      "One of the most delicious and famous Arabic sweets spread in the Middle East",
    getImageSrc: () => require("../images/haressa.jpeg"),
    ingrediants: [
      "3 cups of coarse semolina",
      "1 cup of sugar",
      "Half a cup of vegetable oil",
      "1 cup of yogurt",
      "1 teaspoon of baking powder",
      "1 cup blanched almonds, any kind of nuts can be used",
      "3 tablespoons of tahini",
      "syrup",
    ],
    preparation_steps: [
      "1. Mix both coarse semolina with sugar",
      "2. Add the baking powder to the milk, and mix them well",
      "3. Add the milk and baking powder to the semolina and sugar mixture, and mix well",
      "4. Add the oil, and stir the mixture until you get a crumbly dough consistency",
      "5. Grease the oven tray with tahini, spread the harissa mixture, and press it well until you get an even thickness over the tray",
      "6. Add almonds or your favorite type of nuts",
      "7. Cover the mush tray, and let it rest and ferment for a few hours",
      "8. Preheat the oven to a temperature of 180 - 190 degrees Celsius",
      "9. Bake the harissa in the oven for approximately 30-45 minutes",
      "10. Take the harissa out of the oven after it's ready, and put Syrup on it while it's still hot",
    ],
    side_dishes: "",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [30, 50, 75, 90, 105],
    created_at: {
      order: "6",
    },
  },

  {
    id: 7,
    type: "desserts",
    category: "western",
    country: "European",
    title: "Doughnuts",
    description:
      "It is one of the wonderful western sweets, and many people love it because of its wonderful taste and ease of preparation, and because it is also light on the stomach, and children love it in all its forms",
    getImageSrc: () => require("../images/donats.jpg"),
    ingrediants: [
      "2 and a half cups of flour",
      "3 tablespoons of sugar",
      "60 grams of butter",
      "A cup only a quarter of warm milk",
      "A teaspoon of yeast",
      "A tablespoon of baking powder",
      "One tablespoon of vanilla",
      "A little salt",
      "An egg",
      "Frying oil",
    ],
    preparation_steps: [
      "1. Sugar is mixed with butter, and milk is added to them with whisk",
      "2. Add flour, yeast, baking powder, vanilla, salt and eggs",
      "3. Stir and knead the ingredients together for at least 10 minutes, until you get a soft and cohesive dough",
      "4. Leave the dough for at least an hour until it rests in a warm place",
      "5. Spread the dough on a surface sprinkled with flour, then cut it into circles using a large cutter, then we prepare a small cutter to make small circles inside the large circles",
      "6. Stack the donuts in a tray and leave until it ferments again for at least half an hour",
      "7. We put a frying pan on the fire with abundant oil and leave it until it heats up",
      "8. We put the donut units in the oil until we get the golden color",
      "9. Sprinkle powdered sugar on donuts and serve",
    ],
    side_dishes: "",
    url: () => "https://www.youtube.com/embed/Py3deTawqMc",
    price: [15, 30, 54, 60, 75],
    created_at: {
      order: "7",
    },
  },
];
export default DessertRecipesList;
