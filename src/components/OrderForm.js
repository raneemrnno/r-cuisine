import {
  Flex,
  Box,
  Text,
  Button,
  VStack,
  HStack,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Textarea,
  FormErrorMessage,
  Radio,
  RadioGroup,
  ButtonGroup,
  FormHelperText,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { WarningIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useAlertContext } from "../context/alertContext";

const Form1 = ({ formik, totalPrice }) => {
  return (
    <VStack spacing={4}>
      <FormControl
        id="date"
        isRequired
        isInvalid={!!formik.errors.date && formik.touched.date}
      >
        <FormLabel htmlFor="date">Schedual date</FormLabel>
        <FormHelperText>nearest date will be tomorrow</FormHelperText>
        <Input
          type="date"
          id="date"
          name="date"
          {...formik.getFieldProps("date")}
        />

        <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
      </FormControl>

      <FormControl
        id="time"
        isRequired
        isInvalid={!!formik.errors.time && formik.touched.time}
      >
        <FormLabel htmlFor="time">Schedual time</FormLabel>
        <Input
          placeholder="Select Time"
          size="md"
          type="time"
          id="time"
          name="time"
          {...formik.getFieldProps("time")}
        />
        <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
      </FormControl>

      <FormControl
        id="address"
        isRequired
        isInvalid={!!formik.errors.address && formik.touched.address}
      >
        <FormLabel htmlFor="address">Address</FormLabel>
        <Textarea
          placeholder="address"
          id="address"
          name="address"
          {...formik.getFieldProps("address")}
        />
        <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
      </FormControl>
      <FormControl
        id="phone"
        isRequired
        isInvalid={!!formik.errors.phone && formik.touched.phone}
      >
        <FormLabel htmlFor="phone">Phone number </FormLabel>
        <InputGroup>
          <InputLeftAddon children="+971" />
          <Input
            type="tel"
            placeholder="phone number"
            maxlength="9"
            id="phone"
            name="phone"
            {...formik.getFieldProps("phone")}
          />
        </InputGroup>
        <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
      </FormControl>

      <FormControl
        id="notes"
        isInvalid={!!formik.errors.notes && formik.touched.notes}
      >
        <FormLabel htmlFor="notes">Additional Notes</FormLabel>
        <Textarea
          placeholder="your notes (no spices, no salt,..etc)"
          id="notes"
          name="notes"
          {...formik.getFieldProps("notes")}
        />
        <FormErrorMessage>{formik.errors.notes}</FormErrorMessage>
      </FormControl>

      <Text fontSize={"sm"} color={"gray.700"}>
        <WarningIcon boxSize={"30px"} color={"orange.400"} /> Make sure you
        entered a valid phone number and detailed address to make it easier
        contacting with you.
      </Text>
      <HStack spacing={"28"}>
        <Text fontSize={"2xl"} color={"teal"}>
          Total price = AED {totalPrice}
        </Text>
      </HStack>
    </VStack>
  );
};

const Form2 = (props) => {
  const cc_format = (value, len, num, spc) => {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, len);
    const parts = [];

    for (let i = 0; i < v.length; i += num) {
      parts.push(v.substr(i, num));
    }

    return parts.length > 1 ? parts.join(spc) : value;
  };

  return (
    <VStack spacing={4} mb={10}>
      <Heading textAlign={"center"} mb={20} mt={20}>
        Please choose a payment method for your order
      </Heading>
      <FormControl id="payment" isRequired>
        <FormLabel htmlFor="payment">Payment method</FormLabel>
        <RadioGroup id="payment" name="payment" defaultValue="card">
          <VStack align={"flex-start"}>
            <Radio
              value="cod"
              onChange={(e) => props.setPayment(e.target.value)}
            >
              Cash on Delivery
            </Radio>
            <Radio
              value="card"
              onChange={(e) => props.setPayment(e.target.value)}
            >
              Debit / Credit Card
            </Radio>
          </VStack>
        </RadioGroup>
      </FormControl>
      {props.payment === "card" && (
        <>
          <FormControl id="cardNumber" isRequired>
            <FormHelperText>Card number</FormHelperText>
            <Input
              type="text"
              placeholder="Enter your card number"
              value={cc_format(props.cardNumber, 16, 4, " ")}
              onChange={(e) => props.setCardNumber(e.target.value)}
            />
          </FormControl>
          <HStack spacing={16}>
            <FormControl id="expDate" isRequired>
              <FormHelperText>Expiry</FormHelperText>
              <Input
                type="text"
                placeholder="MM/YY"
                value={cc_format(props.expDate, 4, 2, "/")}
                onChange={(e) => props.setExpDate(e.target.value)}
              />
            </FormControl>
            <FormControl id="security" isRequired>
              <FormHelperText>CVV</FormHelperText>
              <Input
                type="text"
                maxlength="3"
                placeholder="Secure Code"
                value={props.security}
                onChange={(e) => props.setSecurity(e.target.value)}
              />
            </FormControl>
          </HStack>
        </>
      )}
    </VStack>
  );
};

const OrderForm = ({ resetForm, totalPrice }) => {
  const username = localStorage.getItem("userName");
  const [response, setResponse] = useState(null);
  const { onOpenAlert } = useAlertContext();
  const [step, setStep] = useState(1);

  const current = new Date();
  const todayDate = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const submit = (values) => {
    axios
      .post("http://localhost:8000/place_order", {
        username: username,
        address: values.address,
        phone: values.phone,
        date: values.date,
        time: values.time,
        notes: values.notes,
        payment: payment,
        cardNumber: cardNumber,
        expDate: expDate,
        security: security,
      })
      .then((response) => {
        setResponse({
          type: "success",
          message: `Order Placed Successfully!`,
        });
      });
  };

  useEffect(() => {
    if (response) {
      onOpenAlert(response.type, response.message);
      resetForm();
    }
  }, [response]);

  const [payment, setPayment] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [security, setSecurity] = useState("");

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      address: "",
      phone: "",
      notes: "",
    },
    onSubmit: (values) => {
      submit(values);
    },
    validationSchema: Yup.object({
      address: Yup.string().required("Required"),
      phone: Yup.number().required("Required"),
      date: Yup.date()
        .min(todayDate, "Date must be at least tomorrow")
        .required("required"),
      time: Yup.string().required("required"),
    }),
  });
  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      shadow="1px 1px 3px rgba(0,0,0,0.3)"
      maxWidth={800}
      //maxH={450}
      minH={760}
      //overflow={"scroll"}
      //scrollBehavior={"smooth"}
      p={6}
      as="form"
      onSubmit={formik.handleSubmit}
    >
      {step === 1 ? (
        <Form1 formik={formik} totalPrice={totalPrice} />
      ) : (
        <Form2
          payment={payment}
          cardNumber={cardNumber}
          expDate={expDate}
          security={security}
          setPayment={setPayment}
          setCardNumber={setCardNumber}
          setExpDate={setExpDate}
          setSecurity={setSecurity}
        />
      )}
      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" justifyContent="space-between">
          <Flex>
            <Button
              onClick={() => {
                setStep(step - 1);
              }}
              isDisabled={step === 1}
              colorScheme="teal"
              variant="solid"
              w="7rem"
              mr="5%"
            >
              Back
            </Button>
            <Button
              w="7rem"
              onClick={() => {
                setStep(step + 1);
              }}
              colorScheme="teal"
              variant="outline"
              isDisabled={
                step === 2 ||
                !formik.values.date ||
                !formik.values.time ||
                !formik.values.address ||
                !formik.values.phone ||
                (!!formik.errors.date && formik.touched.date) ||
                (!!formik.errors.phone && formik.touched.phone)
                  ? true
                  : false
              }
            >
              Next
            </Button>
          </Flex>
          {step === 2 ? (
            <Button type="submit" w="7rem" colorScheme="green" variant="solid">
              Place order
            </Button>
          ) : null}
        </Flex>
      </ButtonGroup>
    </Box>
  );
};
export default OrderForm;
