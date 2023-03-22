import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import AllRecipes from "./components/AllRecipes";
import Footer from "./components/Footer";
import RecipeDetails from "./components/RecipeDetails";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";
import { ApiProvider } from "./context/ApiContext";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <ApiProvider>
          <Navbar />
          <Alert />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about_us" element={<AboutUs />} />

            <Route
              path="/break_fast"
              element={<AllRecipes type="break_fast" />}
            />
            <Route path="/lunch" element={<AllRecipes type="lunch" />} />
            <Route path="/desserts" element={<AllRecipes type="desserts" />} />

            <Route
              path="/break_fast/oriental"
              element={<AllRecipes type="break_fast" category="oriental" />}
            />
            <Route
              path="/break_fast/western"
              element={<AllRecipes type="break_fast" category="western" />}
            />

            <Route
              path="/lunch/oriental"
              element={<AllRecipes type="lunch" category="oriental" />}
            />
            <Route
              path="/lunch/western"
              element={<AllRecipes type="lunch" category="western" />}
            />

            <Route
              path="/desserts/oriental"
              element={<AllRecipes type="desserts" category="oriental" />}
            />
            <Route
              path="/desserts/western"
              element={<AllRecipes type="desserts" category="western" />}
            />

            <Route
              path="/RecipeDetails/:title/:type"
              element={<RecipeDetails />}
            />

            <Route
              path="/break_fast/RecipeDetails/:title/:type"
              element={<RecipeDetails />}
            />
            <Route
              path="/break_fast/oriental/RecipeDetails/:title/:type"
              element={<RecipeDetails />}
            />
            <Route
              path="/break_fast/western/RecipeDetails/:title/:type"
              element={<RecipeDetails />}
            />

            <Route
              path="/lunch/RecipeDetails/:title/:type"
              element={<RecipeDetails />}
            />
            <Route
              path="/lunch/oriental/RecipeDetails/:title/:type"
              element={<RecipeDetails />}
            />
            <Route
              path="/lunch/western/RecipeDetails/:title/:type"
              element={<RecipeDetails />}
            />

            <Route
              path="/desserts/RecipeDetails/:title/:type"
              element={<RecipeDetails />}
            />
            <Route
              path="/desserts/oriental/RecipeDetails/:title/:type"
              element={<RecipeDetails />}
            />
            <Route
              path="/desserts/western/RecipeDetails/:title/:type"
              element={<RecipeDetails />}
            />
          </Routes>
          <Footer />
        </ApiProvider>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
