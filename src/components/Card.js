import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  
  return (
    <VStack 
    transition={"transform 2s ease-in-out"}
    _hover={{
      transform: "scale(1.1)",
      boxShadow: "xl"
    }}

    boxShadow={""}
    color="black"
    backgroundColor='white'
    cursor='pointer'
    borderRadius='xl'
    >
      <Image src= {imageSrc} borderRadius='xl' />

      <VStack alignItems='flex-start' spacing={4} p={4} >
        <HStack
          justifyContent='space-between'
          alignItems="center"
        >
          <Heading as='h3' size='md'>{title}</Heading>

        </HStack>
          <Text color='#64748b' fontSize='md' >{description}
          </Text>
        <HStack>
          <p>See more</p>
          <FontAwesomeIcon icon={faArrowRight} size='1x'/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
