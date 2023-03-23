import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import LunchRecipesList from "../RecipesLists/LunchRecipesList";
import BreakFastRecipesList from "../RecipesLists/BreakFastRecipesList";
import DessertRecipesList from "../RecipesLists/DessertRecipesList";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function RecipeDetails() {
  const navigate = useNavigate();
  const { title } = useParams();
  const { type } = useParams();

  let recipeDetails;
  let detailsList;

  window.location.pathname.includes("break_fast") &&
    (recipeDetails = BreakFastRecipesList.filter(
      (recipe) => recipe.title === title
    ));

  window.location.pathname.includes("lunch") &&
    (recipeDetails = LunchRecipesList.filter(
      (recipe) => recipe.title === title
    ));

  window.location.pathname.includes("desserts") &&
    (recipeDetails = DessertRecipesList.filter(
      (recipe) => recipe.title === title
    ));
  //if we are in home screen (/latestRecipes/:title)
  const newTitle = title.split(" ").join("%20");

  if (window.location.pathname === `/RecipeDetails/${newTitle}`) {
    if (type === "lunch") {
      recipeDetails = LunchRecipesList.filter(
        (recipe) => recipe.title === title
      );
    }
    if (type === "break_fast") {
      recipeDetails = BreakFastRecipesList.filter(
        (recipe) => recipe.title === title
      );
    }
    if (type === "desserts") {
      recipeDetails = DessertRecipesList.filter(
        (recipe) => recipe.title === title
      );
    }
  }

  recipeDetails.map(
    (r) =>
      (detailsList = {
        description: r.description,
        ingrediants: r.ingrediants,
        img: r.getImageSrc(),
        steps: r.preparation_steps,
        side: r.side_dishes,
        country: r.country,
        category: r.category,
        url: r.url,
      })
  );
  return (
    <Container maxW={"7xl"} minH={"82vh"}>
      <Stack
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 7 }}>
          <Heading
            lineHeight={1.1}
            zIndex={0}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            color={"red.400"}
          >
            <Text>{title} </Text>
            <Text fontSize={20} color="#59A52C">
              {" "}
              {detailsList.category} / {detailsList.country} dish
            </Text>
          </Heading>

          <Blob
            w={"100%"}
            h={"100%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("red.50", "red.400")}
          />

          <Text color={"gray.500"} fontSize={22}>
            {detailsList.description}.
          </Text>
          <Heading
            lineHeight={1.1}
            zIndex={0}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Ingrediants:
            </Text>
          </Heading>
          <Text fontSize={20} pl={6} color="gray.600">
            {detailsList.ingrediants.map((ing) => (
              <li>{ing}</li>
            ))}
          </Text>

          <Heading
            lineHeight={1.1}
            zIndex={0}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Directions:
            </Text>
          </Heading>
          <Text fontSize={20} pl={0} color="gray.600">
            <ul style={{ listStyle: "none" }}>
              {detailsList.steps.map((stp) => (
                <li>{stp}.</li>
              ))}
            </ul>
          </Text>
          {detailsList.side && (
            <>
              <Heading
                lineHeight={1.1}
                zIndex={0}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
              >
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "red.400",
                    zIndex: -1,
                  }}
                >
                  Sides:
                </Text>
              </Heading>
              <Text fontSize={20} pl={0} color="gray.600" fontWeight={600}>
                {detailsList.side}.
              </Text>
            </>
          )}
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              onClick={() => navigate(-1)}
              leftIcon={<ArrowBackIcon h={4} w={4} color={"gray.800"} />}
            >
              Go Back
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          //justify={'center'}
          //align={'center'}
          mt={"80"}
          position={"relative"}
          w={"full"}
        >
          <Stack
            mt={56}
            direction={{ base: "column", md: "column" }}
            spacing={"20"}
          >
            <Box
              position={"relative"}
              height={"400px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
              //mt={'20px'}
            >
              <Image
                alt={title}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"400px"}
                src={detailsList.img}
              />
            </Box>

            {/*<Box
              position={"relative"}
              height={"400px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
              as="iframe"
              src={detailsList.url()}
              sx={{
                aspectRatio: "16/9",
              }}
            />*/}
          </Stack>
        </Flex>
      </Stack>
    </Container>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
/*const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});*/
