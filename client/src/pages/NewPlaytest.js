import React, { useState } from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
  Icon,
  Button,
  VisuallyHidden,
  InputLeftAddon,
} from '@chakra-ui/react';

import PageLayout from '../layouts/PageLayout';
import { SendCreatePlaytest } from '../hooks/Queries';

const NewPlaytest = () => {
  const [gameName, setGameName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [aesthetics, setAesthetics] = useState('');
  const [buildLink, setBuildLink] = useState('');
  const [buildUpload, setBuildUpload] = useState(null);

  const { refetch: sendPlaytest } = SendCreatePlaytest({
    username: 'jake-pauls',
    gameName,
    instructions,
    startDate,
    endDate,
    aesthetics,
    buildLink,
    buildUpload,
  });

  return (
    <PageLayout title="New Playtest">
      <chakra.form
        method="POST"
        shadow="base"
        rounded={[null, 'md']}
        overflow={{ sm: 'hidden' }}
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          sendPlaytest();
        }}
      >
        <Stack
          px={4}
          py={5}
          bg={useColorModeValue('white', 'gray.700')}
          spacing={6}
          p={{ sm: 6 }}
        >
          <SimpleGrid columns={3} spacing={6}>
            <FormControl
              as={GridItem}
              colSpan={[3, 2]}
              isRequired
              id="game_name"
            >
              <FormLabel
                fontSize="sm"
                fontWeight="md"
                color={useColorModeValue('gray.700', 'gray.50')}
              >
                Game Name
              </FormLabel>
              <InputGroup size="sm">
                <Input
                  type="text"
                  placeholder="Enter an amazing game name"
                  focusBorderColor="brand.400"
                  rounded="md"
                  onChange={(e) => setGameName(e.target.value)}
                />
              </InputGroup>
            </FormControl>
          </SimpleGrid>
          <div>
            <FormControl id="instruction" mt={1} isRequired>
              <FormLabel
                fontSize="sm"
                fontWeight="md"
                color={useColorModeValue('gray.700', 'gray.50')}
              >
                Playtest Instructions
              </FormLabel>
              <Textarea
                placeholder="Write some instructions for users who playtest your game"
                mt={1}
                rows={10}
                shadow="sm"
                focusBorderColor="brand.400"
                fontSize={{ sm: 'sm' }}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </FormControl>
          </div>
          <FormControl id="start_end_date" isRequired>
            <SimpleGrid columns={3} spacing={6}>
              <Box>
                <FormLabel
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue('gray.700', 'gray.50')}
                >
                  Start Date
                </FormLabel>
                <InputGroup>
                  <Input
                    type="date"
                    focusBorderColor="brand.400"
                    rounded="md"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </InputGroup>
              </Box>
              <Box>
                <FormLabel
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue('gray.700', 'gray.50')}
                >
                  End Date
                </FormLabel>
                <InputGroup>
                  <Input
                    type="date"
                    focusBorderColor="brand.400"
                    rounded="md"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </InputGroup>
              </Box>
            </SimpleGrid>
          </FormControl>
          <FormControl id="aesthetics">
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color={useColorModeValue('gray.700', 'gray.50')}
            >
              Aesthetics
            </FormLabel>
            <Input
              type="search"
              placeholder="ie: 'Challenge', 'Discovery', 'Submission', etc."
              onChange={(e) => setAesthetics(e.target.value)}
            />
          </FormControl>
          <FormControl id="build">
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color={useColorModeValue('gray.700', 'gray.50')}
            >
              Build Link (GitHub, Itch.io, or Drive)
            </FormLabel>
            <InputGroup size="sm">
              <InputLeftAddon>https://</InputLeftAddon>
              <Input
                placeholder="github.com/user/game"
                onChange={(e) => setBuildLink(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl id="file">
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color={useColorModeValue('gray.700', 'gray.50')}
            >
              Game Build File
            </FormLabel>
            <Flex
              mt={1}
              justify="center"
              px={6}
              pt={5}
              pb={6}
              borderWidth={2}
              borderColor={useColorModeValue('gray.300', 'gray.500')}
              borderStyle="dashed"
              rounded="md"
            >
              <Stack spacing={1} textAlign="center">
                <Icon
                  mx="auto"
                  boxSize={12}
                  color={useColorModeValue('gray.400', 'gray.500')}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Icon>
                <Flex
                  fontSize="sm"
                  color={useColorModeValue('gray.600', 'gray.400')}
                  alignItems="baseline"
                >
                  <chakra.label
                    htmlFor="file-upload"
                    cursor="pointer"
                    rounded="md"
                    fontSize="md"
                    color={useColorModeValue('brand.600', 'brand.200')}
                    pos="relative"
                    _hover={{
                      color: useColorModeValue('brand.400', 'brand.300'),
                    }}
                  >
                    <Text>Upload a file</Text>
                    <VisuallyHidden>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        onChange={(e) => setBuildUpload(e.target.files[0])}
                      />
                    </VisuallyHidden>
                    <Text pl={1}>or drag and drop</Text>
                  </chakra.label>
                </Flex>
                <Text
                  fontSize="xs"
                  color={useColorModeValue('gray.500', 'gray.50')}
                >
                  .zip or .rar file
                </Text>
              </Stack>
            </Flex>
          </FormControl>
          <Box
            px={{ base: 4, sm: 6 }}
            py={3}
            bg={useColorModeValue('gray.50', 'gray.900')}
            textAlign="right"
          >
            <Button type="submit" _focus={{ shadow: '' }} fontWeight="md">
              Save
            </Button>
          </Box>
        </Stack>
      </chakra.form>
    </PageLayout>
  );
};

export default NewPlaytest;
