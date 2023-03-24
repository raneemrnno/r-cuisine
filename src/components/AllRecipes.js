import { Box, Button, Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Pagination } from "react-use-pagination";
import ReactPaginate from "react-paginate";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

import FullScreenSection from "./FullScreenSection";
import RecipeCard from "./RecipeCard";
import LunchRecipesList from "../RecipesLists/LunchRecipesList";
import BreakFastRecipesList from "../RecipesLists/BreakFastRecipesList";
import DessertRecipesList from "../RecipesLists/DessertRecipesList";
import "./paginate.css";

// the number of items to be displayed on each page
const PER_PAGE = 6;

const AllRecipes = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  // is the number of items that have already been displayed by the previous pages
  const offset = currentPage * PER_PAGE;

  const pageCount = () => {
    const categoryData = [];
    if (props.type === "break_fast") {
      if (props.category) {
        BreakFastRecipesList.map(
          (recipe) =>
            recipe.category === props.category && categoryData.push(recipe)
        );
        return Math.ceil(categoryData.length / PER_PAGE);
      } else return Math.ceil(BreakFastRecipesList.length / PER_PAGE);
    }
    if (props.type === "lunch") {
      if (props.category) {
        LunchRecipesList.map(
          (recipe) =>
            recipe.category === props.category && categoryData.push(recipe)
        );
        return Math.ceil(categoryData.length / PER_PAGE);
      } else return Math.ceil(LunchRecipesList.length / PER_PAGE);
    }
    if (props.type === "desserts") {
      if (props.category) {
        DessertRecipesList.map(
          (recipe) =>
            recipe.category === props.category && categoryData.push(recipe)
        );
        return Math.ceil(categoryData.length / PER_PAGE);
      } else return Math.ceil(DessertRecipesList.length / PER_PAGE);
    }
  };

  const proceedData = (data) => {
    let newData = data;
    const categoryData = [];
    if (props.category) {
      data.map(
        (recipe) =>
          recipe.category === props.category && categoryData.push(recipe)
      );
      if (categoryData.length > 6) {
        newData = categoryData.slice(offset, offset + PER_PAGE);
      }
      return newData.map(
        (recipe) =>
          recipe.category === props.category && (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              description={recipe.description}
              country={recipe.country}
              created_at={recipe.created_at.view}
              type={props.type}
              imageSrc={recipe.getImageSrc()}
              url={recipe.url}
              price={recipe.price}
            />
          )
      );
    } else {
      if (data.length > 6) {
        newData = data.slice(offset, offset + PER_PAGE);
      }
      return newData.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          description={recipe.description}
          country={recipe.country}
          created_at={recipe.created_at.view}
          type={props.type}
          imageSrc={recipe.getImageSrc()}
          url={recipe.url}
          price={recipe.price}
        />
      ));
    }
  };
  const numOfCards = () => {
    const categoryData = [];
    if (props.type === "break_fast") {
      if (props.category) {
        BreakFastRecipesList.map(
          (recipe) =>
            recipe.category === props.category && categoryData.push(recipe)
        );
        return categoryData.length;
      } else return BreakFastRecipesList.length;
    }

    if (props.type === "lunch") {
      if (props.category) {
        LunchRecipesList.map(
          (recipe) =>
            recipe.category === props.category && categoryData.push(recipe)
        );
        return categoryData.length;
      } else return LunchRecipesList.length;
    }

    if (props.type === "desserts") {
      if (props.category) {
        DessertRecipesList.map(
          (recipe) =>
            recipe.category === props.category && categoryData.push(recipe)
        );
        return categoryData.length;
      } else return DessertRecipesList.length;
    }
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <FullScreenSection
      backgroundColor="#F0E9D6"
      p={6}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading
        as="h1"
        id="latest-recipes-section"
        left={0}
        color={"gray.600"}
        fontFamily="mono"
      >
        {props.type === "break_fast" ? (
          <Link to="/break_fast" onClick={() => setCurrentPage(0)}>
            Breakfast:
          </Link>
        ) : props.type === "lunch" ? (
          <Link to="/lunch" onClick={() => setCurrentPage(0)}>
            lunch:
          </Link>
        ) : props.type === "desserts" ? (
          <Link to="/desserts" onClick={() => setCurrentPage(0)}>
            Desserts:
          </Link>
        ) : null}
      </Heading>

      <HStack spacing={5}>
        <Heading
          as="h3"
          color={
            window.location.pathname === `/${props.type}/oriental`
              ? "black"
              : "red.600"
          }
          fontFamily="cursive"
        >
          <Link
            to={`/${props.type}/oriental`}
            onClick={() => setCurrentPage(0)}
          >
            oriental
          </Link>
        </Heading>
        <Heading as={"h3"} color="pink.900">
          /
        </Heading>
        <Heading
          as="h3"
          color={
            window.location.pathname === `/${props.type}/western`
              ? "black"
              : "red.600"
          }
          fontFamily="cursive"
        >
          <Link to={`/${props.type}/western`} onClick={() => setCurrentPage(0)}>
            western
          </Link>
        </Heading>
      </HStack>

      <Box
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1,minmax(0,1fr))",
          sm: "repeat(2,minmax(0,1fr))",
        }}
        gridGap={8}
      >
        {props.type === "break_fast"
          ? proceedData(BreakFastRecipesList)
          : props.type === "lunch"
          ? proceedData(LunchRecipesList)
          : props.type === "desserts"
          ? proceedData(DessertRecipesList)
          : null}
      </Box>
      {numOfCards() > 6 && (
        <ReactPaginate
          pageCount={pageCount()}
          onPageChange={handlePageClick}
          forcePage={currentPage}
          activeClassName={"item active "}
          breakClassName={"item break-me "}
          containerClassName={"pagination"}
          disabledClassName={"disabled-page"}
          marginPagesDisplayed={4}
          nextClassName={"item next "}
          nextLabel={<ArrowForwardIcon style={{ fontSize: 18, width: 150 }} />}
          pageClassName={"item pagination-page "}
          pageRangeDisplayed={2}
          previousClassName={"item previous"}
          previousLabel={<ArrowBackIcon style={{ fontSize: 18, width: 150 }} />}
        />
      )}
    </FullScreenSection>
  );
};
export default AllRecipes;
