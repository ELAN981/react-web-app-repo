import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Software Developer",
    description:
      "I am currently learning programming tools and languages to become proficient in solving problems fullstack for WebApps, Cybersceurity, Cloud Solutions and Machine Learning",
    getImageSrc: () => require("../images/photo9.jpg"),
  },
  {
    title: "Engineer",
    description:
      "As an Engineer, and Project Manager I have worked in the mines and with my learnings so far, I have identified gaps where high-end technologies through appliying ML and AI could be deployed as solutions to reduce the hazardous nature of the industry and workplace induced illnesses",
    getImageSrc: () => require("../images/photo8.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "I do photography and videographer works as a hobby, and sometimes on hire. My collection of smaples demonstrate my sharp eye for clean photo creation that make moments even more worth remembering",
    getImageSrc: () => require("../images/photo7.jpg"),
  },
  {
    title: "ELAN T.D.F se",
    description:
      "This is ÉLAN TourdeForce, a fine clothing brand I established in 2020 following my desire to create a new way of expressing mood through what we wear as people, the aim is to provide the finest clothing quality at the best price tags 🔥️",
    getImageSrc: () => require("../images/photo12.jpeg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      id="projects-section" 
      backgroundColor="#e7ececff"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" color={"black"}>
        Featured Projects
      </Heading>
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",     
            md: "repeat(2, 1fr)",    
            lg: "repeat(3, 1fr)",
            w: "full",    
          }}
          gridGap={10}
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
            />
          ))}
        </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
