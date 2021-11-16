import React from "react";
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
  Grid,
  InputLeftAddon,
  InputRightAddon
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Header from "../components/Header"

export default function NewPlaytest() {
  return (
      
    <Box bg={useColorModeValue("gray.50", "inherit")}>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(9, 1fr)"
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Navbar/>
        </GridItem>
        <GridItem rowSpan={1} colSpan={8}>
          <Flex
          direction="column"
          m={0}
          w="full"
          >
            <Header name={"New Playtest"}/>

            <chakra.form
              method="POST"
              shadow="base"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
            >
              <Stack
                px={4}
                py={5}
                bg={useColorModeValue("white", "gray.700")}
                spacing={6}
                p={{ sm: 6 }}
              >
                <SimpleGrid columns={3} spacing={6}>
                  <FormControl as={GridItem} colSpan={[3, 2]} isRequired id="game_name">
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Gamename
                    </FormLabel>
                    <InputGroup size="sm">
                      <Input
                      type="text"
                      placeholder="Frostfire"
                      focusBorderColor="brand.400"
                      rounded="md"
                      required="true"
                      />
                    </InputGroup>
                  </FormControl>
                </SimpleGrid>

                <div>
                  <FormControl id="instruction" mt={1} isRequired>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Playtest Instructions
                    </FormLabel>
                    <Textarea
                      placeholder="Write Something"
                      mt={1}
                      rows={10}
                      shadow="sm"
                      focusBorderColor="brand.400"
                      fontSize={{ sm: "sm" }}
                      required="true"
                    />
                  </FormControl>
                </div>

                
                <FormControl id="start_end_date" isRequired>
                  <SimpleGrid columns={3} spacing={6}>
                    <Box>
                      <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                      >
                        Start Date
                      </FormLabel>
                      <InputGroup>
                        <Input
                        type="date"
                        focusBorderColor="brand.400"
                        rounded="md"
                        required="true"
                        >
                        </Input>
                      </InputGroup>
                    </Box>
                    
                    <Box>
                      <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        End Date
                      </FormLabel>
                      <InputGroup>
                        <Input
                        type="date"
                        focusBorderColor="brand.400"
                        rounded="md"
                        required="true"
                        >
                        </Input>
                      </InputGroup>
                    </Box>
                  </SimpleGrid>
                </FormControl>

                <FormControl id="aesthetics">
                  <FormLabel
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                  >
                    Aesthetics
                  </FormLabel>
                  <Input
                    type="search"
                    placeholder="Add..."
                  >
                  </Input>
                  
                </FormControl>
                {/* <Tag
                  size={"md"}
                  key={"md"}
                  borderRadius="full"
                  variant="solid"
                  colorScheme="green"
                >
                  <TagLabel>Green</TagLabel>
                  <TagCloseButton />
                </Tag> */}

                <FormControl id="build">
                  <FormLabel
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                  >
                    Build Link
                  </FormLabel>
                  <InputGroup size="sm">
                    <InputLeftAddon children="https://" />
                    <Input placeholder="mysite" />
                    <InputRightAddon children=".com" />
                  </InputGroup>
                  
                </FormControl>

                <FormControl id="file">
                  <FormLabel
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
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
                    borderColor={useColorModeValue("gray.300", "gray.500")}
                    borderStyle="dashed"
                    rounded="md"
                  >
                    <Stack spacing={1} textAlign="center">
                      <Icon
                        mx="auto"
                        boxSize={12}
                        color={useColorModeValue("gray.400", "gray.500")}
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
                        color={useColorModeValue("gray.600", "gray.400")}
                        alignItems="baseline"
                      >
                        <chakra.label
                          htmlFor="file-upload"
                          cursor="pointer"
                          rounded="md"
                          fontSize="md"
                          color={useColorModeValue("brand.600", "brand.200")}
                          pos="relative"
                          _hover={{
                          color: useColorModeValue("brand.400", "brand.300"),
                          }}
                        >
                          <span>Upload a file</span>
                          <VisuallyHidden>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                          />
                          </VisuallyHidden>
                        </chakra.label>
                        <Text pl={1}>or drag and drop</Text>
                      </Flex>
                      <Text
                      fontSize="xs"
                      color={useColorModeValue("gray.500", "gray.50")}
                      >
                        .zip or .rar file
                      </Text>
                    </Stack>
                  </Flex>
                </FormControl>
                <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue("gray.50", "gray.900")}
                textAlign="right"
                >
                  <Button
                    type="submit"
                    _focus={{ shadow: "" }}
                    fontWeight="md"
                  >
                    Save
                  </Button>
                </Box>
              </Stack>
            </chakra.form>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}