import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="gray.800">
      <footer>
        <Flex
          margin="0 auto"
          //px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          //maxWidth="1024px"
          maxW={"100vw"}
          h={"8vh"}
        >
          <Text color={"gray.200"}>Raneem Taha Alkhabbaz • © 2023</Text>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
