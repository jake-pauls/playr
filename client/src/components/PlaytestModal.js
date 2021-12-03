import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import AestheticsBadges from './AestheticBadges';
import { formatDateString } from '../utils';

const PlaytestModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const playtest = props;
  const {
    gameName,
    username,
    instructions,
    buildLink,
    startDate,
    endDate,
    updatedAt,
  } = playtest;

  return (
    <>
      <Button onClick={onOpen}>Expand</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{gameName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Stack mb={2}>
                <Heading size="md" mb={2}>
                  Information
                </Heading>
                <Flex>
                  <Text fontWeight="bold">Created By</Text>
                  <Spacer />
                  <Text>{username} </Text>
                </Flex>
                <Flex direction="column">
                  <Text fontWeight="bold" mb={1}>
                    Instructions
                  </Text>
                  <Text>{instructions} </Text>
                </Flex>
                <Flex>
                  <Text fontWeight="bold">Build Link</Text>
                  <Spacer />
                  <Link>{buildLink}</Link>
                </Flex>
                <AestheticsBadges playtest={playtest} />
              </Stack>
              <Box m={4}>
                <Heading size="md" mb={2}>
                  Playtest Dates
                </Heading>
                <Flex>
                  <Text fontWeight="bold" mr={4}>
                    Start Date
                  </Text>
                  <Text>{formatDateString(startDate)}</Text>
                  <Spacer />
                  <Text fontWeight="bold" mr={4}>
                    End Date
                  </Text>
                  <Text>{formatDateString(endDate)}</Text>
                </Flex>
                <Flex>
                  <Text fontWeight="bold">Last Updated</Text>
                  <Spacer />
                  <Text>{formatDateString(updatedAt)}</Text>
                </Flex>
              </Box>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Download</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PlaytestModal;
