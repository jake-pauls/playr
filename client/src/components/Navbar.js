import {Link} from "react-router-dom";
import {
  Flex,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";

function Navbar(props) {
  return (
    <Flex
    bg="#363740" 
    color="#A4A6B3" 
    h="full"
    >
      <Tabs defaultIndex={props.navIndex} orientation="vertical" borderColor="gray.600" m={0} w="full">
        <TabList borderLeftColor="transparent" w="full" >
          <Link to="/dashboard">
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }} borderLeftColor="lightgray" w="full" paddingRight={50}>
              Dashboard
            </Tab>
          </Link>
          <Link to="/playtest">
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }} borderLeftColor="lightgray" w="full" paddingRight={50}>
              Playtest
            </Tab>
          </Link>
          <Tab py={4} m={0} _focus={{ boxShadow: "none" }} borderTopWidth={1} mt={10} borderTopColor="gray.600" borderLeftColor="lightgray" w="full" paddingRight={50}>
            Setting
          </Tab>
        </TabList>
      </Tabs>
    </Flex>
  );
}
export default Navbar;