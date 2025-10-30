import React from "react";
import { Box, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import FullScreenSection from "./FullScreenSection";

const AboutMeSection = () => {
    return(
        <FullScreenSection>
            <Box
            as="section"
            // bg={bg}
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={6}
            py={12}
            id="aboutme-section"
            >
            <VStack
                spacing={6}
                maxW="3xl"
                textAlign="center"
            >
                <Heading
                as="h1"
                size="2xl"
                fontWeight="bold"
                color={useColorModeValue('gray.600', 'teal.600')}
                >
                Profile
                </Heading>

                <Text fontSize="lg" color="teal.600" lineHeight="tall" textAlign="center">
                Hi, I’m <strong>Kgaogelo</strong> - An aspiring software developer with a strong 
                passion for code and solving problems using software tools. I am an Engineer by 
                background and my love for Physics, Statistics, Computer Science and Information technology fuels my 
                desire for being a real-world problem solver with software design, architecture.
                <br /><br />
                I am constantly studying and learning new languages and tools on various 
                platforms with a fine focus on Python, React, Next, Angular, Django, MySQl, PostgreSQL,  Cloud and Databases and more...
                </Text>
            </VStack>
            </Box>
            </FullScreenSection>
  );
}






        // backgroundColor="#f0f0f0"
        // isDarkBackground={false}
        // p={8}
        // alignItems = "center"
        // >
        // <Heading as="h1" id="projects-section">
        //     This is Me
        // </Heading>
        // <

export default AboutMeSection;