import React from 'react';
import { Box, Heading, Table, Thead, Tr, Th } from '@chakra-ui/react';

import PageLayout from '../layouts/PageLayout';
import Loading from '../components/misc/Loading';
import PlaytestTableRows from '../components/PlaytestTableRows';
import { QueryPlaytests } from '../hooks/Queries';

const Playtest = () => {
  const {
    isLoading: loading,
    data: playtests,
    status: playtestsCallStatus,
  } = QueryPlaytests();

  if (loading) {
    return (
      <PageLayout title="Playtests">
        <Loading />
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Playtests">
      <Box m={10}>
        <Heading mb={4}>All Playtests</Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Playtest Details</Th>
              <Th>Developer Username</Th>
              <Th>Last Updated</Th>
              <Th>Status</Th>
              <Th>Modal</Th>
            </Tr>
          </Thead>
          <PlaytestTableRows
            playtests={playtests}
            status={playtestsCallStatus}
          />
        </Table>
      </Box>
    </PageLayout>
  );
};

export default Playtest;
