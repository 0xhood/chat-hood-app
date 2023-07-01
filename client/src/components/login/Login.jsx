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

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow((s) => !s);
  };
  const handleLoginAsGuest = () => {
    setEmail("guest");
    setPassword("guest");
  };

  const handleFormSubmit = () => {};
  return (
    <VStack>
      <FormControl isRequired>
        <FormLabel>email</FormLabel>
        <Input
          value={email}
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>password</FormLabel>
        <InputGroup>
          <Input
            value={password}
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
      <Button
        colorScheme="blue"
        width={"100%"}
        margin={"15px 0 0 0"}
        onClick={handleFormSubmit}
      >
        login
      </Button>
      <Button
        colorScheme="red"
        width={"100%"}
        margin={"1px 0 0 0"}
        onClick={handleLoginAsGuest}
      >
        login as a guest
      </Button>
    </VStack>
  );
};
