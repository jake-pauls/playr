import { Link } from 'react-router-dom';
import {
  Flex,
  Heading,
  Icon,
  Image,
  Tabs,
  TabList,
  Tab,
} from '@chakra-ui/react';
import { AiFillPieChart, AiOutlineTeam } from 'react-icons/ai';

const Navbar = (props) => {
  return (
    <Flex bg="#363740" color="#A4A6B3" direction="column" h="full">
      <Flex alignItems="center">
        <Image
          src={`${process.env.PUBLIC_URL}/playr_logo.png`}
          width={30}
          height={12}
          mt={8}
          ml={8}
          mb={8}
          mr={6}
        />
        <Heading>Playr.</Heading>
      </Flex>
      <Tabs
        defaultIndex={props.navIndex}
        orientation="vertical"
        borderColor="gray.600"
        m={0}
        w="full"
      >
        <TabList borderLeftColor="transparent" w="full">
          <Link to="/dashboard">
            <Tab
              py={4}
              m={0}
              _focus={{ boxShadow: 'none' }}
              borderLeftColor="lightgray"
              w="full"
              paddingRight={50}
            >
              <Icon mr={8} as={AiFillPieChart} />
              Dashboard
            </Tab>
          </Link>
          <Link to="/playtest">
            <Tab
              py={4}
              m={0}
              _focus={{ boxShadow: 'none' }}
              borderLeftColor="lightgray"
              w="full"
              paddingRight={50}
            >
              <Icon as={AiOutlineTeam} mr={14} />
              Playtest
            </Tab>
          </Link>
          <Tab
            py={4}
            m={0}
            _focus={{ boxShadow: 'none' }}
            borderTopWidth={1}
            mt={10}
            borderTopColor="gray.600"
            borderLeftColor="lightgray"
            w="full"
            paddingRight={50}
          >
            Setting
          </Tab>
        </TabList>
      </Tabs>
    </Flex>
  );
};
export default Navbar;
