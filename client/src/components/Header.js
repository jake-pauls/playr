import React from "react";
import {Link} from "react-router-dom";
import {
  chakra,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Button,
  Heading,
} from "@chakra-ui/react";
import {
  AiOutlineSearch,
  AiFillBell,
} from "react-icons/ai";

function Header(props) {
  const bg = useColorModeValue("white", "gray.800");

  return(
    <chakra.header
      bg={bg}
      borderColor="gray.600"
      borderBottomWidth={1}
      w="full"
      px={{ base: 2, sm: 4 }}
      py={4}
    >
        
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <HStack spacing={3} alignItems="center">
          <Heading size="md">{props.name}</Heading>
        </HStack>
        <HStack>
          <HStack spacing={3} alignItems="center">
            <InputGroup >
              <InputLeftElement
              pointerEvents="none"
              children={<AiOutlineSearch />}
              />
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </HStack>
          <HStack spacing={3} alignItems="center" m={3}>
            <Link
              to="/newplaytest">
              <Button>
                + New PlayTest
              </Button>
            </Link>
          </HStack>
          <HStack spacing={3}>
            <chakra.a
            p={3}
            color={useColorModeValue("gray.800", "inherit")}
            rounded="sm"
            _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
            >
            <AiFillBell />
            <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>
            <Avatar
            size="sm"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            />
          </HStack>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
export default Header;