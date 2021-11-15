import { 
  GridItem,
  Box,
  Grid,
  Flex
 } from "@chakra-ui/layout";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

function Playtest() {
  return(
    <Box>
      <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(9, 1fr)"
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Navbar navIndex={1}/>
        </GridItem>
        <GridItem rowSpan={1} colSpan={8}>
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
  )
}

export default Playtest;