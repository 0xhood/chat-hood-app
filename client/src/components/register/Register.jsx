import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState(null);
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow((s) => !s);
  };

  const handleFormSubmit = () => {};

  return (
    <VStack spacing={"5px"}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>email</FormLabel>
        <Input
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>password</FormLabel>
        <InputGroup>
          <Input
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
          ></Input>
          <InputRightElement width={"4.5 rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={handleShow}>
              {show ? "Show" : "Hide"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>confirm password</FormLabel>
        <InputGroup>
          <Input
            placeholder="confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={show ? "text" : "password"}
          ></Input>
          <InputRightElement width={"4.5 rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={handleShow}>
              {show ? "Show" : "Hide"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          onChange={(e) => setPic(e.target.files[0])}
        ></Input>
      </FormControl>
      <Button colorScheme="blue" width={"100%"} margin={"15px 0 0 0"} onClick={handleFormSubmit}>
        register
      </Button>
    </VStack>
  );
};

export default Register;
