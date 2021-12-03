import React from 'react';
import { Badge, Flex, HStack, Text } from '@chakra-ui/react';

const AestheticsBadges = (props) => {
  const {
    playtest: { aesthetics },
  } = props;

  return (
    <Flex direction="column">
      <Text fontWeight="bold" mb={1}>
        Aesthetics
      </Text>
      <HStack>
        {aesthetics.map((a) => (
          <Badge key={a} colorScheme="blue" variant="outline">
            {a}
          </Badge>
        ))}
      </HStack>
    </Flex>
  );
};

export default AestheticsBadges;
