import React from "react";
import {
  Box,
  Flex
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Header from "../components/Header"

function Dashboard() {
  return (
    <Box>
      <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(5, 1fr)"
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Navbar/>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          <Flex
          direction="column"
          m={0}
          w="full"
          >
            <Header/>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
export default Dashboard;