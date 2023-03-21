import React from "react";
import { Button } from "@chakra-ui/react";

const RecipesButton = ({children , ...props}) => {
    return(
        <Button
            //backgroundColor={props.backgroundColor}
            backgroundColor="salmon"
            _hover={{ color: "black" }}
            _active={{bg: "red.400"}}
            color="white"
            variant="solid"
            size={["sm", "md"]}
            onClick={props.onClick}
            id={props.id} 
           // _hover={props.hover}
            >
            {children}
        </Button>
    )
}
export default RecipesButton;