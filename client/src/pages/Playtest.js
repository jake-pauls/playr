import {
  Badge,
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

import PageLayout from '../layouts/PageLayout';
import Loading from '../components/misc/Loading';
import PlaytestModal from '../components/PlaytestModal';
import { QueryPlaytests } from '../hooks/Queries';
import { formatDateString } from '../utils';

const PlaytestTableRows = (props) => {
  return (
    <Tbody>
      {props.status === 'success'
        ? props.playtests.map((playtest) => (
            <Tr key={playtest._id}>
              <Td>{playtest.gameName}</Td>
              <Td>{playtest.username}</Td>
              <Td>{formatDateString(playtest.updatedAt)}</Td>
              <Td>
                <Badge variant="solid" colorScheme="green">
                  {playtest.status}
                </Badge>
              </Td>
              <Td>
                <PlaytestModal playtest={playtest} />
              </Td>
            </Tr>
          ))
        : ''}
    </Tbody>
  );
};

const Playtest = () => {
  const {
    isLoading: loading,
    data: playtests,
    status: playtestsCallStatus,
  } = QueryPlaytests();

  console.log(playtests);

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
