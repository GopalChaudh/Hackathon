import React from "react";

import { Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import {
  FiBriefcase,
  FiGift,
  FiGlobe,
  FiSend,
  FiTrello,
  FiWifiOff,
} from "react-icons/fi";

import Feature from "./Feature";

const featuresData = [
  {
    icon: FiBriefcase,
    iconBg: "#1F7CFF",
    heading: "Join Community",
    text: "Join the community that you are interested in",
  },
  {
    icon: FiSend,
    iconBg: "#F75C4E",
    heading: "Donation Report",
    text: "Get the report of the donation you have made",
  },
  {
    icon: FiWifiOff,
    iconBg: "#191046",
    heading: "Make Community",
    text: "Create your own community and invite people to join",
  },
  {
    icon: FiTrello,
    iconBg: "#FF1FB3",
    heading: "Create Event",
    text: "Create an event and invite people to join",
  },
  {
    icon: FiGift,
    iconBg: "#5C4EF7",
    heading: "Points",
    text: "Get points for every donation you make and achive greater Rankings",
  },
  {
    icon: FiGlobe,
    iconBg: "#F7954E",
    heading: "Global Reach",
    text: "Working together worldwide people from anywhere",
  },
];

function Features() {
  return (
    <Container size="md" pt={{ base: "5rem", md: "8.125rem" }}>
      <VStack spacing={{ base: "3rem", md: "4.25rem" }}>
        {/* Heading */}
        <VStack spacing="1.25rem">
          <VStack spacing="0.5rem">
            <Text fontWeight="700" color="red.400" textAlign="center">
              Engage
            </Text>
            <Heading as="h2" size="lg" textAlign="center">
              Volunteer For The Better Future
            </Heading>
          </VStack>
          <Text color="muted" maxW="25rem" textAlign="center" lineHeight="2rem">
            We are the platform to provide you with a way to contribute to the society,
            and help you find the right communities to engage with.
          </Text>
        </VStack>
        {/* Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacingY="3.75rem"
          spacingX="5.25rem"
          maxW="1105px"
        >
          {featuresData.map((featureData, index) => (
            <Feature
              key={index}
              icon={featureData.icon}
              iconBg={featureData.iconBg}
              heading={featureData.heading}
              text={featureData.text}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}

export default Features;
