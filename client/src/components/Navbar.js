import {Link} from "react-router-dom";
import {
  Flex,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
    bg="#363740" 
    color="#A4A6B3" 
    paddingRight={10}
    h="full"
    >
      <Tabs defaultIndex={0} orientation="vertical" borderColor="gray.600" m={0}>
        <TabList borderLeftColor="transparent" >
          <Tab py={4} m={0} _focus={{ boxShadow: "none" }} borderLeftColor="lightgray">
            <Link to="/dashboard">Dashboard</Link>
          </Tab>
          <Tab py={4} m={0} _focus={{ boxShadow: "none" }} borderLeftColor="lightgray">
          Playtest
          </Tab>
          <Tab py={4} m={0} _focus={{ boxShadow: "none" }} borderTopWidth={1} mt={10} borderTopColor="gray.600" borderLeftColor="lightgray">
          Setting
          </Tab>
        </TabList>
      </Tabs>
    </Flex>
  );
}
export default Navbar;