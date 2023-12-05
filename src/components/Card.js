import React from "react";
import { Avatar, Heading, VStack, Stack, Text, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullScreenSection from "./FullScreenSection";
import { PhoneIcon, AddIcon, WarningIcon ,ArrowForwardIcon } from '@chakra-ui/icons'


const Card = ({ title, description, imageSrc,id }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  
  return (
    <VStack  maxW='sm' background="white"  borderRadius="6">
 
    <Image
      src={imageSrc}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' pt="6" pl="6"  pr="6" spacing='3' pb="3" color="black" >
      <Heading size='md'>{title}</Heading>
      <Text color="gray">
        {description}
      </Text>
      <p  >
        See More
      <ArrowForwardIcon />
      </p>
    </Stack>

  
</VStack>
  )
};

export default Card;
