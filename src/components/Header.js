import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Image } from "@chakra-ui/react";
const Header = () => {
  return (
    <FullScreenSection backgroundColor="#F0E9D6" minH={"2px"}>
      <Image src={require("../images/logo_header.png")} />
    </FullScreenSection>
  );
};
export default Header;
