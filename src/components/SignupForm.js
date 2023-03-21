import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputRightElement,
  InputGroup,
  VStack,
  HStack,
} from "@chakra-ui/react";
import {
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/alert";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useAlertContext } from "../context/alertContext";

const SignupForm = ({ signUpModal }) => {
  const [response, setResponse] = useState(null);
  const { onOpenAlert } = useAlertContext();

  const [showPassword, setShowPassword] = useState(false);

  const submitSignUpUser = (values) => {
    axios
      .post("http://localhost:8000/createUser", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data === "created") {
          setResponse({
            type: "success",
            message: `You Have Successfully Signed Up`,
          });
        } else if ((response.data = "exist")) {
          setResponse({
            type: "error",
            message: `User Already Signed Up!!`,
          });
        }
      });
  };

  const signUpFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      submitSignUpUser(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Password is too short - should be 8 chars minimum."),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpenAlert(response.type, response.message);
      if (response.type === "success") {
        signUpFormik.resetForm();
        signUpModal();
      }
    }
  }, [response]);

  return (
    <form onSubmit={signUpFormik.handleSubmit}>
      <VStack spacing={4}>
        <HStack>
          <FormControl
            id="firstName"
            isInvalid={
              !!signUpFormik.errors.firstName && signUpFormik.touched.firstName
            }
            isRequired
          >
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              {...signUpFormik.getFieldProps("firstName")}
            />
            <FormErrorMessage>{signUpFormik.errors.firstName}</FormErrorMessage>
          </FormControl>
          <FormControl id="lastName">
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              {...signUpFormik.getFieldProps("lastName")}
            />
          </FormControl>
        </HStack>
        <FormControl
          id="email"
          isRequired
          isInvalid={!!signUpFormik.errors.email && signUpFormik.touched.email}
        >
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            {...signUpFormik.getFieldProps("email")}
          />
          <FormErrorMessage>{signUpFormik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl
          id="password"
          isRequired
          isInvalid={
            !!signUpFormik.errors.password && signUpFormik.touched.password
          }
        >
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              {...signUpFormik.getFieldProps("password")}
            />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{signUpFormik.errors.password}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          w={"100%"}
          loadingText="Submitting"
          size="lg"
          bg={"#59A52C"}
          color={"white"}
          _hover={{
            bg: "#59A50B",
          }}
          isDisabled={
            signUpFormik.values.firstName &&
            signUpFormik.values.email &&
            signUpFormik.values.password
              ? false
              : true
          }
        >
          Sign up
        </Button>
      </VStack>
    </form>
  );
};
export default SignupForm;
