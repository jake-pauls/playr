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
import { AiFillPieChart, AiOutlineTeam, AiFillSetting } from 'react-icons/ai';

const Navbar = (props) => {
  return (
    <Flex bg="base.black" color="base.grey" direction="column" h="full">
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
        <Heading fontFamily="Raleway">Playr.</Heading>
      </Flex>
      <Tabs
        defaultIndex={props.navIndex}
        orientation="vertical"
        borderColor="base.grey"
        colorScheme="green"
        m={0}
        w="full"
      >
        <TabList borderLeftColor="transparent" w="full">
          <Link to="/dashboard">
            <Tab
              py={4}
              m={0}
              _focus={{ boxShadow: 'none' }}
              borderLeftColor="base.grey"
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
              borderLeftColor="base.grey"
              w="full"
              paddingRight={50}
            >
              <Icon as={AiOutlineTeam} mr={14} />
              Playtests
            </Tab>
          </Link>
          <Tab
            py={4}
            m={0}
            _focus={{ boxShadow: 'none' }}
            borderTopWidth={1}
            mt={10}
            borderTopColor="base.grey"
            borderLeftColor="base.grey"
            w="full"
            paddingRight={50}
          >
            <Icon as={AiFillSetting} mr={14} />
            Settings
          </Tab>
        </TabList>
      </Tabs>
    </Flex>
  );
};
export default Navbar;
