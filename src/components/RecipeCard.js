import {
  Heading,
  Image,
  Text,
  Stack,
  Button,
  Card,
  Flex,
  CardBody,
  CardFooter,
  HStack,
  ButtonGroup,
  CardHeader,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { ArrowForwardIcon, AddIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useAlertContext } from "../context/alertContext";
import { useApiContext } from "../context/ApiContext";

const RecipeCard = (props) => {
  const username = localStorage.getItem("userName");
  const [response, setResponse] = useState(null);
  const { onOpenAlert } = useAlertContext();
  const { api } = useApiContext();

  const numberOfPeople = [2, 4, 6, 8, 10];
  const numPopover = useDisclosure();

  const [num, setNum] = useState(0);

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(api.path + api.create_order_item, {
        item_id: props.id,
        item_name: props.title,
        item_type: props.type,
        people_number: numberOfPeople[num],
        price: props.price[num],
        username: username,
      })
      .then((response) => {
        setResponse({
          type: "success",
          message: `Added Successfully!`,
        });
      });

    numPopover.onClose();
  };

  useEffect(() => {
    if (response) {
      onOpenAlert(response.type, response.message);
    }
  }, [response]);

  return (
    <Card
      zIndex={0}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={props.imageSrc}
        alt={props.title}
      />
      <Stack>
        <CardHeader
          borderBottom={"1px"}
          borderColor="gray.200"
          // borderWidth={"100%"}
        >
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Heading size="md" color={"#59A52C"}>
                {props.title}
              </Heading>
            </Flex>
            <Text color="teal" fontSize="2xl">
              AED {props.price[num]}
            </Text>
            <Text color={"gray.500"} fontSize="sm">
              for {numberOfPeople[num]}
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text color={"gray.500"} size="xs" mb={4}>
            {props.country} plate
          </Text>
          <Text py="2">{props.description}.</Text>
        </CardBody>

        <CardFooter>
          <ButtonGroup spacing={"24"}>
            {username && (
              <Popover
                isOpen={numPopover.isOpen}
                onOpen={numPopover.onOpen}
                onClose={numPopover.onClose}
                closeOnBlur={false}
                placement="top"
              >
                <PopoverTrigger>
                  <Button
                    variant="ghost"
                    colorScheme={"blue"}
                    _hover={{ bg: "blue.100" }}
                    leftIcon={<AddIcon h={3} w={3} />}
                  >
                    Add to cart
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Number of people:</PopoverHeader>
                  <PopoverBody>
                    <form onSubmit={handleSubmit}>
                      <FormControl id="peopleNum">
                        <RadioGroup colorScheme="teal" defaultValue="0">
                          <HStack spacing={8}>
                            <Radio value="0" onChange={handleChange}>
                              2
                            </Radio>
                            <Radio value="1" onChange={handleChange}>
                              4
                            </Radio>
                            <Radio value="2" onChange={handleChange}>
                              6
                            </Radio>
                            <Radio value="3" onChange={handleChange}>
                              8
                            </Radio>
                            <Radio value="4" onChange={handleChange}>
                              10
                            </Radio>
                          </HStack>
                        </RadioGroup>
                      </FormControl>
                      <Text fontSize={"2xl"} color={"teal"}>
                        AED {props.price[num]}
                      </Text>
                      <ButtonGroup size="sm">
                        <Button
                          variant="outline"
                          onClick={() => numPopover.onClose()}
                        >
                          Cancel
                        </Button>
                        <Button colorScheme="red" type="submit">
                          Apply
                        </Button>
                      </ButtonGroup>
                    </form>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            )}
            <Button
              variant="ghost"
              colorScheme="red"
              _hover={{ bg: "red.100" }}
              rightIcon={<ArrowForwardIcon />}
            >
              <Link to={`././RecipeDetails/${props.title}/${props.type}`}>
                Directions
              </Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Stack>
    </Card>
  );
};
export default RecipeCard;
