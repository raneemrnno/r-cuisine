import {
  Flex,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Progress,
  Card,
  CardHeader,
  Grid,
  GridItem,
  IconButton,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import LunchRecipesList from "../RecipesLists/LunchRecipesList";
import BreakFastRecipesList from "../RecipesLists/BreakFastRecipesList";
import DessertRecipesList from "../RecipesLists/DessertRecipesList";
import OrderForm from "./OrderForm";
import { useApiContext } from "../context/ApiContext";

const Cart = () => {
  const username = localStorage.getItem("userName");
  const { api } = useApiContext();

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState(null);

  let totalPrice = 0;

  const fetchData = async () => {
    await axios.get(api.path + api.view_items + username).then((response) => {
      if (response.data === "error") {
        setIsLoading(false);
      } else {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        setItems(response.data);
      }
    });
  };

  const findImg = (item_type, item_id) => {
    if (item_type === "break_fast") {
      return BreakFastRecipesList.find((dd) => dd.id === item_id).getImageSrc();
    }
    if (item_type === "lunch") {
      return LunchRecipesList.find((dd) => dd.id === item_id).getImageSrc();
    }
    if (item_type === "desserts") {
      return DessertRecipesList.find((dd) => dd.id === item_id).getImageSrc();
    }
  };

  const deleteItem = (id, item_type) => {
    axios
      .get(api.path + api.remove_item + id + "/" + username + "/" + item_type)
      .then((response) => {
        if (response.data === "deleted") {
          setItems(null);
        }
      });
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <Container maxW={"7xl"} minH={items === null ? "48vh" : "82vh"}>
      {isLoading ? (
        <Progress
          isIndeterminate
          value={64}
          colorScheme="orange"
          top={"300px"}
        />
      ) : (
        <>
          <Heading
            textAlign={"center"}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            mt={items === null ? 56 : 20}
            color={"orange.400"}
          >
            Your cart{" "}
            <Text as={"span"}>{items === null ? "is empty!" : "is full!"}</Text>
          </Heading>
          <Text
            textAlign={"center"}
            fontWeight={600}
            fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
            lineHeight={"110%"}
            color={"gray"}
          >
            {items != null &&
              "please check your order and complete the process"}
          </Text>
          <Flex mb={8}></Flex>
          {items !== null && (
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem w="100%">
                <Box
                  borderWidth="1px"
                  rounded="lg"
                  shadow="1px 1px 3px rgba(0,0,0,0.3)"
                  maxH={760}
                  overflow={"scroll"}
                  scrollBehavior={"smooth"}
                  p={4}
                >
                  {items.map(
                    (data) => (
                      (totalPrice += Number(data.price)),
                      (
                        <Card
                          style={{ boxShadow: "1px 2px 9px #59A52C" }}
                          mb={4}
                        >
                          <CardHeader>
                            <Flex>
                              <Flex flex="1" gap="1" flexWrap="wrap">
                                <Image
                                  h={"100px"}
                                  w={"100px"}
                                  objectFit="cover"
                                  src={findImg(data.item_type, data.item_id)}
                                />
                                <HStack align={"center"}>
                                  <Heading size="md" color={"gray.700"} ml={4}>
                                    {data.item_name}
                                  </Heading>

                                  <Text color={"gray.500"} fontSize="lg">
                                    meal for {data.people_number} people
                                  </Text>
                                </HStack>
                              </Flex>
                              <VStack align={"flex-end"} spacing={10}>
                                <Text color="teal" fontSize="2xl">
                                  ${data.price}
                                </Text>
                                <IconButton
                                  size={"md"}
                                  variant="ghost"
                                  _hover={{ bg: "white", color: "red" }}
                                  aria-label="Delete"
                                  icon={<DeleteIcon />}
                                  onClick={() =>
                                    deleteItem(data.id, data.item_type)
                                  }
                                />
                              </VStack>
                            </Flex>
                          </CardHeader>
                        </Card>
                      )
                    )
                  )}
                </Box>
              </GridItem>

              <GridItem w="100%">
                <OrderForm
                  resetForm={() => setItems(null)}
                  totalPrice={totalPrice}
                />
              </GridItem>
              <Flex mb={8}></Flex>
            </Grid>
          )}
        </>
      )}
    </Container>
  );
};
export default Cart;
