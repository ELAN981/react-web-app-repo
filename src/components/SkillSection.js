import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const skills = [
  {
        title: "React",
        description: "building fully responsive-interactive React SPAs ",
        getImageSrc: () => require("../images/photo12.jpeg")
    },
    {
        title: "Python Dev",
        description: "building backend services and data analysis tools using Python",
        getImageSrc: () => require("../skillsImgs/pythonista.png")
    },
    {
        title: "Django",
        description: "building scalable web applications with the Django framework",
        getImageSrc: () => require("../skillsImgs/django.png")
    },
    {
        title: "Cloud Computing",
        description: "deploying and managing applications on cloud platforms like AWS and Azure",
        getImageSrc: () => require("../skillsImgs/databaser.png")
    },
    {
        title: "Database Management",
        description: "designing and optimizing databases using SQL and NoSQL technologies",
        getImageSrc: () => require("../skillsImgs/databaser.png")
    },
    {
        title: "Version Control",
        description: "using Git and GitHub for fast, secure code collaboration and versioning",
        getImageSrc: () => require("../skillsImgs/pythonista.png")

    },
];

const SkillSection = () => {
  return (
    <FullScreenSection
      id="skills-section" 
      backgroundColor="#e7ececff"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="skills-section" color={"black"}>
        Skills and Learnings
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,2fr))"
        gridGap={10}
      >
        {projects.map((skill) => (
          <Card
            key={skill.title}
            title={skill.title}
            description={skill.description}
            imageSrc={skill.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default SkillSection;
