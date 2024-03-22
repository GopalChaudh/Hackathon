import React from "react";

import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";


function CTA() {
  return (
    <Container
      size="md"
      pt={{ base: "5rem", md: "8.125rem" }}
      pb={{ base: "2.75rem", md: "4.5rem", xl: "7.75rem" }}
    >
      <Stack
        direction={{ base: "column", xl: "row" }}
        align="center"
        justify="center"
        spacing="4.375rem"
      >
        {/* Video Preview */}
        <Box position="relative">
          <Image
            src="assets/images/video-preview.jpg"
            alt="Video preview"
            borderRadius="2.5rem"
            maxW={{ base: "522px", xl: "635px" }}
            w="100%"
          />
          <Box
            pos="absolute"
            top="50%"
            left="50%"
            transform="auto"
            translateX="-50%"
            translateY="-50%"
          >
          </Box>
        </Box>
        {/* Text */}
        <VStack align="stretch" maxW="429px">
          {/* Headings */}
          <VStack spacing="0.5rem" align="stretch">
            <Text
              fontWeight="700"
              color="red.400"
              textAlign={{ base: "center", xl: "start" }}
            >
              CONTRIBUTE
            </Text>
            <Heading
              as="h2"
              size="lg"
              textAlign={{ base: "center", xl: "start" }}
            >
              And make the world a better place!
            </Heading>
          </VStack>
          {/* Text */}
          <Text
            color="muted"
            maxW="25rem"
            pt="0.75rem"
            textAlign={{ base: "center", xl: "start" }}
            lineHeight="2rem"
          >
            It is not all Bell and whistles and sunshine and rainbows. 
            It is hard work but it is worth it and that is just life.
          </Text>
        </VStack>
        <Box></Box>
      </Stack>
    </Container>
  );
}

export default CTA;
