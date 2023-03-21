import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  Text,
  Stack,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const SignUp = () => {
  const signUpModal = useDisclosure();

  const [showSignUpForm, setShowSignUpForm] = useState(true);
  const [showSignInForm, setShowSignInForm] = useState(false);

  return (
    <>
      <Button
        as={"a"}
        fontSize={"md"}
        fontWeight={600}
        color={"white"}
        bg={"#F5793B"}
        href={"#"}
        _hover={{
          color: "gray.800",
        }}
        variant="outline"
        onClick={signUpModal.onOpen}
      >
        Sign Up
      </Button>
      <Modal
        isOpen={signUpModal.isOpen}
        onClose={signUpModal.onClose}
        size="lg"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Stack align={"center"}>
              <Heading
                fontSize={"4xl"}
                textAlign={"center"}
                color="#59A52C"
                fontFamily={"mono"}
              >
                {showSignUpForm ? "Sign up" : "Login"}
              </Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool features ✌️
              </Text>
            </Stack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {showSignUpForm && (
              <>
                <SignupForm signUpModal={signUpModal.onClose} />
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link
                      color={"blue.500"}
                      onClick={() => {
                        setShowSignInForm(true);
                        setShowSignUpForm(false);
                      }}
                    >
                      Login
                    </Link>
                  </Text>
                </Stack>
              </>
            )}

            {showSignInForm && (
              <Stack pt={6}>
                <LoginForm />
                <Stack pt={6}>
                  <Text align={"center"}>
                    New to RCuisine?{" "}
                    <Link
                      onClick={() => {
                        setShowSignUpForm(true);
                        setShowSignInForm(false);
                      }}
                      color={"blue.500"}
                    >
                      Sign Up
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default SignUp;
