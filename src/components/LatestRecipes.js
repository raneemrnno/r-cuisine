import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import RecipeCard from "./RecipeCard";
import LunchRecipesList from "../RecipesLists/LunchRecipesList";
import BreakFastRecipesList from "../RecipesLists/BreakFastRecipesList";
import DessertRecipesList from "../RecipesLists/DessertRecipesList";

const LatestRecipes = () => {
  const proceedData = () => {
    const allLatestData = [];

    BreakFastRecipesList.map((recipe) =>
      recipe.created_at.order >= BreakFastRecipesList.length - 1
        ? allLatestData.push(recipe)
        : ""
    );
    LunchRecipesList.map((recipe) =>
      recipe.created_at.order >= LunchRecipesList.length - 1
        ? allLatestData.push(recipe)
        : ""
    );
    DessertRecipesList.map((recipe) =>
      recipe.created_at.order >= DessertRecipesList.length - 1
        ? allLatestData.push(recipe)
        : ""
    );
    return allLatestData
      .sort((r1, r2) => r1.title > r2.title)
      .map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          description={recipe.description}
          country={recipe.country}
          ingrediants={recipe.ingrediants}
          directions={recipe.preparation_steps}
          created_at={recipe.created_at.view}
          imageSrc={recipe.getImageSrc()}
          url={recipe.url}
          price={recipe.price}
          type={recipe.type}
        />
      ));
  };
  return (
    <FullScreenSection
      backgroundColor="#F0E9D6"
      p={6}
      alignItems="flex-start"
      spacing={8}
      //minH={"100vh"}
    >
      <Heading
        as="h1"
        id="latest-recipes-section"
        left={0}
        color={"gray.600"}
        fontFamily="cursive"
      >
        don't miss out our new recipes!
      </Heading>
      <Box
        display="grid"
        //gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridTemplateColumns={{
          base: "repeat(1,minmax(0,1fr))",
          sm: "repeat(2,minmax(0,1fr))",
        }}
        gridGap={8}
      >
        {proceedData()}
      </Box>
    </FullScreenSection>
  );
};
export default LatestRecipes;
