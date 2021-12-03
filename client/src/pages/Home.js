import React from 'react';
import { Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Stack
      minH="100vh"
      direction={{ base: 'column', md: 'row' }}
      bgColor="base.black"
    >
      <Flex p={8} flex={1}>
        <Flex alignItems="center" h="10%">
          <Image
            src={`${process.env.PUBLIC_URL}/playr_logo.png`}
            width={30}
            height={12}
            mt={8}
            ml={8}
            mb={8}
            mr={6}
          />
          <Heading fontFamily="Raleway" color="base.background">
            Playr.
          </Heading>
        </Flex>
        <Flex align="center" justify="center">
          <Stack spacing={6} w="full" maxW="lg">
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as="span"
                position="relative"
                color="base.background"
                _after={{
                  bottom: 1,
                  left: 0,
                  zIndex: 0,
                }}
              >
                Accelerate
              </Text>
              <br />{' '}
              <Text color="base.primary" as="span">
                Your Playtesting Strategy
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color="base.grey">
              Spend more time creating what your players want, instead of
              guessing what they want
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded="full"
                bg="base.primary"
                color="base.background"
                onClick={() => navigate('/dashboard')}
                _hover={{
                  bg: 'base.primary',
                }}
              >
                Check It Out
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Flex>
      <Flex flex={1}>
        <Image
          alt="Login Image"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1636487658585-f23dba2ba893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
        />
      </Flex>
    </Stack>
  );
};

export default Home;
