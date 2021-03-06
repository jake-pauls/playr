import React from 'react';
import { GridItem, Box, Grid, Flex } from '@chakra-ui/react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';

const PageLayout = (props) => {
  const { title, children } = props;

  return (
    <Box h="100%">
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(9, 1fr)"
        h="100%"
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Navbar navIndex={1} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={8}>
          <Flex direction="column" m={0} w="full">
            <Header name={title} />
            {children}
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PageLayout;
