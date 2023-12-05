import React from "react";
import { Avatar, Heading, VStack, Stack, Text, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullScreenSection from "./FullScreenSection";
import { PhoneIcon, AddIcon, WarningIcon ,ArrowForwardIcon } from '@chakra-ui/icons'

const greeting = "Hello, I am Bereket!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack   alignItems="center" >
      <Avatar name='Dan Abrahmov' size='3xl' src='https://i.pravatar.cc/150?img=7' />
      <p>{greeting}</p>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
    
 

  </FullScreenSection>
);

export default LandingSection;
