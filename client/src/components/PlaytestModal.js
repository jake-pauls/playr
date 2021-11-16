import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
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

import { formatDateString } from '../utils';

const AestheticsBadges = (props) => {
  return (
    <Flex direction="column">
      <Text fontWeight="bold" mb={1}>
        Aesthetics
      </Text>
      <HStack>
        {props.playtest.aesthetics.map((a) => (
          <Badge key={a} colorScheme="blue" variant="outline">
            {a}
          </Badge>
        ))}
      </HStack>
    </Flex>
  );
};

const PlaytestModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Expand</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.playtest.gameName}</ModalHeader>
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
                  <Text>{props.playtest.username} </Text>
                </Flex>
                <Flex direction="column">
                  <Text fontWeight="bold" mb={1}>
                    Instructions
                  </Text>
                  <Text>{props.playtest.instructions} </Text>
                </Flex>
                <Flex>
                  <Text fontWeight="bold">Build Link</Text>
                  <Spacer />
                  <Link>{props.playtest.buildLink}</Link>
                </Flex>
                <AestheticsBadges playtest={props.playtest} />
              </Stack>
              <Box m={4}>
                <Heading size="md" mb={2}>
                  Playtest Dates
                </Heading>
                <Flex>
                  <Text fontWeight="bold" mr={4}>
                    Start Date
                  </Text>
                  <Text>{formatDateString(props.playtest.startDate)}</Text>
                  <Spacer />
                  <Text fontWeight="bold" mr={4}>
                    End Date
                  </Text>
                  <Text>{formatDateString(props.playtest.endDate)}</Text>
                </Flex>
                <Flex>
                  <Text fontWeight="bold">Last Updated</Text>
                  <Spacer />
                  <Text>{formatDateString(props.playtest.updatedAt)}</Text>
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
