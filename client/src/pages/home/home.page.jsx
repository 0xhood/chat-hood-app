import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Login } from "../../components/login/Login";
import Register from "../../components/register/Register";

function homePage() {
  return (
    <Container maxW={"xl"} centerContent>
      <Box
        display={"flex"}
        justifyContent={"center"}
        p={3}
        bg={"white"}
        w={"100%"}
        m={"40px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Text fontSize={"4xl"} fontFamily={"work sans"} color={"black"}>
          Talk-A-Live
        </Text>
      </Box>
      <Box
        p={3}
        bg={"white"}
        w={"100%"}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Tabs variant={'soft-rounded'}>
          <TabList mb={'1em'}>
            <Tab width={'50%'}>Login</Tab>
            <Tab width={'50%'}>Register</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<Login></Login>}</TabPanel>
            <TabPanel>{<Register></Register>}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default homePage;
