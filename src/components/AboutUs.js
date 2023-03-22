import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button,
  HStack,
} from "@chakra-ui/react";

import { FcAssistant, FcInTransit, FcReading } from "react-icons/fc";
import { ReactElement } from "react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function AboutUs() {
  return (
    <Container maxW={"5xl"} minH={"82vh"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            About us
          </Text>
          <Heading>Online cuisine located in Dubai, UAE</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            R-Cuisine is an online cuisine provides oriantel and westren
            delicious recipes in addition to the ability to receive food regular
            requests or for occasions where the number of people is large.
            <br />
            It is characterized by ease of use, as you find all the food recipes
            you need (breakfast - lunch - dessert) detailed in a smooth manner.
            <br />
            It allows the clients to order from many kind of meals and specify
            date, time, address and payment method after signing up and we will
            deliver the order to the pointed address.
          </Text>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our services
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={FcReading} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Detailed Recipes"}
            />
            <Feature
              icon={<Icon as={FcInTransit} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Door Delivery"}
            />
            <Feature
              icon={<Icon as={FcAssistant} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"24 Hour Support"}
            />
          </Stack>
        </Stack>

        <Flex ml={20}>
          <Stack spacing={8}>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={require("../images/cook.jpg")}
              objectFit={"cover"}
            />
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={require("../images/logo_about_us.png")}
              objectFit={"contain"}
            />
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Text
                textTransform={"uppercase"}
                color={"blue.400"}
                fontWeight={600}
                fontSize={"sm"}
                bg={useColorModeValue("blue.50", "blue.900")}
                p={2}
                alignSelf={"flex-start"}
                rounded={"md"}
              >
                Contact us
              </Text>
              <HStack>
                <MdPhone color="#1970F1" size="20px" />
                <Text fontSize="lg" fontWeight={"bold"}>
                  +971-505888238
                </Text>
              </HStack>

              <HStack>
                <MdEmail color="#1970F1" size="20px" />
                <Text fontSize="lg" fontWeight={"bold"}>
                  e.raneemtaha96@gmail.com
                </Text>
              </HStack>
            </Stack>
          </Stack>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
