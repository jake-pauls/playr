import React from 'react';
import { Grid, GridItem, Button, Flex, Box, Heading } from '@chakra-ui/react';
import PageLayout from '../layouts/PageLayout';

const Dashboard = (props) => {
  const { completed, ongoing, open, onhold } = props;

  return (
    <PageLayout title="Dashboard">
      <Flex flexDirection="column">
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
          w="full"
          p={5}
        >
          <GridItem colSpan={1} rowSpan={1}>
            <Button w="full" h="full" py={10}>
              <Flex flexDir="column">
                <Box mb={5}>Completed</Box>
                <Box>15{completed}</Box>
              </Flex>
            </Button>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <Button w="full" h="full" py={10}>
              <Flex flexDir="column">
                <Box mb={5}>Ongoing</Box>
                <Box>15{ongoing}</Box>
              </Flex>
            </Button>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <Button w="full" h="full" py={10}>
              <Flex flexDir="column">
                <Box mb={5}>Open</Box>
                <Box>15{open}</Box>
              </Flex>
            </Button>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <Button w="full" h="full" py={10}>
              <Flex flexDir="column">
                <Box mb={5}>On Hold</Box>
                <Box>15{onhold}</Box>
              </Flex>
            </Button>
          </GridItem>
        </Grid>
        <Grid
          templateRows="repeat(5, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={0}
          h="60vh"
          m={5}
          bg="#F9F8F8"
          textAlign="center"
          borderColor="gray.600"
          borderWidth={1}
        >
          <GridItem
            id="graph"
            colSpan={3}
            rowSpan={5}
            borderColor="gray.600"
            borderRightWidth={1}
          />
          <GridItem
            colSpan={1}
            rowSpan={1}
            borderColor="gray.600"
            borderBottomWidth={1}
          >
            <Flex
              flexDir="column"
              align="center"
              justifyContent="center"
              h="full"
            >
              <Box>Total Testers</Box>
              <Heading size>15</Heading>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={1}
            rowSpan={1}
            borderColor="gray.600"
            borderBottomWidth={1}
          >
            <Flex
              flexDir="column"
              align="center"
              justifyContent="center"
              h="full"
            >
              <Box>Total Likes</Box>
              <Heading size>15</Heading>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={1}
            rowSpan={1}
            borderColor="gray.600"
            borderBottomWidth={1}
          >
            <Flex
              flexDir="column"
              align="center"
              justifyContent="center"
              h="full"
            >
              <Box>Average Play Time</Box>
              <Heading size>15</Heading>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={1}
            rowSpan={1}
            borderColor="gray.600"
            borderBottomWidth={1}
          >
            <Flex
              flexDir="column"
              align="center"
              justifyContent="center"
              h="full"
            >
              <Box>Average Response Time</Box>
              <Heading size>15</Heading>
            </Flex>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} borderColor="gray.600">
            <Flex
              flexDir="column"
              align="center"
              justifyContent="center"
              h="full"
            >
              <Box>Completion Rate</Box>
              <Heading size>15</Heading>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </PageLayout>
  );
};

export default Dashboard;
