import FullScreenSection from "./FullScreenSection";
import React from "react";
import {Box, Heading, Img} from "@chakra-ui/react"
import Card from "./Card";

const skills = [
    {
        title: "React and JavaScript",
        description: "building fully responsive-interactive React SPAs ",
        getImageSrc: () => require("../skillsImgs/reactnatv.png")
    },
    {
        title: "Python Dev",
        description: "building backend services and data analysis tools using Python",
        getImageSrc: () => require("../skillsImgs/pythonista.png")
    },
    {
        title: "Django",
        description: "building scalable web applications with the Django framework",
        getImageSrc: () => require("../skillsImgs/djangobtr.png")
    },
    {
        title: "Cloud Computing",
        description: "deploying and managing applications on cloud platforms like AWS and Azure",
        getImageSrc: () => require("../skillsImgs/cloudfav.png")
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

const Skills = () => {
    return(
        <FullScreenSection
        id="skills-section"
        backgroundColor="#f0f0f0"
        p={8}
        alignItems="center"
        spacing={8}
        >
        <Heading as="h1" id="skills-section" color={"gray"} >
            Skills and Learnings
        </Heading>
        <Box
        display="grid" 
        gridTemplateColumns="repeat(3,minmax(0,8fr))"
        gridGap={10}
        >
            {skills.map((skill) => (
                <Card 
                key={skill.title} 
                title={skill.title}
                description ={skill.description}
                imageSrc={skill.getImageSrc()}
                />
            ))}
        </Box>
        </FullScreenSection>
    );
}   

export default Skills;
                     

