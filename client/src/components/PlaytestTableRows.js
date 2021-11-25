import React from 'react';
import { Badge, Tbody, Tr, Td } from '@chakra-ui/react';
import PlaytestModal from './PlaytestModal';
import { formatDateString } from '../utils';

const PlaytestTableRows = (props) => {
  const { status, playtests } = props;

  return (
    <Tbody>
      {status === 'success'
        ? playtests.map((playtest) => (
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

export default PlaytestTableRows;
