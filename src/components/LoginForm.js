import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputRightElement,
  InputGroup,
  VStack,
} from "@chakra-ui/react";
import { FiLogIn } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useAlertContext } from "../context/alertContext";
import { useApiContext } from "../context/ApiContext";

const LoginForm = () => {
  const [response, setResponse] = useState(null);
  const { onOpenAlert } = useAlertContext();
  const { api } = useApiContext();

  const [showPassword, setShowPassword] = useState(false);

  const submitSignInUser = (values) => {
    axios
      .post(api.path + api.login, {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        if (response.data.includes(values.email)) {
          window.localStorage.setItem("userName", values.email);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
        setResponse({
          type: response.data === "Password incorrect!" ? "error" : "success",
          message: response.data,
        });
      })
      .catch((err) => {
        console.log(err.response.status);
        if ((err.response.status = 404)) {
          setResponse({
            type: "error",
            message: "User is Not Exist! Please Sign Up First",
          });
        }
      });
  };

  const signInFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      submitSignInUser(values);
    },
    validationSchema: Yup.object({
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
        signInFormik.resetForm();
      }
    }
  }, [response]);
  return (
    <form onSubmit={signInFormik.handleSubmit}>
      <VStack spacing={4}>
        <FormControl
          id="email"
          isRequired
          isInvalid={!!signInFormik.errors.email && signInFormik.touched.email}
        >
          <FormLabel htmlFor="email">Username</FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            {...signInFormik.getFieldProps("email")}
          />
          <FormErrorMessage>{signInFormik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl
          id="password"
          isRequired
          isInvalid={
            !!signInFormik.errors.password && signInFormik.touched.password
          }
        >
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              {...signInFormik.getFieldProps("password")}
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
          <FormErrorMessage>{signInFormik.errors.password}</FormErrorMessage>
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
            signInFormik.values.email && signInFormik.values.password
              ? false
              : true
          }
          rightIcon={<FiLogIn />}
        >
          Login
        </Button>
      </VStack>
    </form>
  );
};
export default LoginForm;
