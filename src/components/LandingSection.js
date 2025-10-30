import React, { useRef } from "react";
import {
  Avatar,
  Heading,
  VStack,
  Button,
  Box,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hey there, I’m Kgaogelo!";
const bio1 = "An aspiring Software Developer";
const bio2 = "with a strong passion for code </>";

const MotionAvatar = motion(Avatar);
const MotionVStack = motion(VStack);

const LandingSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // start of section to top of viewport
  });

  // Scroll-based transformations for the avatar
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.8], [0, 720]); // twist 2 full turns
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 0.7], [0, -200]);

  return (
    <FullScreenSection
      ref={ref}
      justifyContent="center"
      alignItems="center"
      isDarkBackground={false}
      backgroundColor="#bec3eeff"
    >
      <MotionVStack spacing={8} textAlign="center">
        {/* Scroll-reactive Avatar */}
        <MotionAvatar
          src="https://th.bing.com/th/id/OIP.ouoxkDFoMUTzuAsoSkS3zAHaEK?w=310&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
          size="4xl"
          name="Kay'Mercy"
          border="none"
          boxShadow="0px 0px 20px rgba(0,0,0,0.2)"
          style={{
            opacity,
            rotate,
            scale,
            y,
          }}
        />

        {/* Text Section */}
        <VStack spacing={4}>
          <Heading as="h4" size="md" color="#45454dff">
            {greeting}
          </Heading>

          <Heading as="h1" size={{ base: "2xl", md: "3xl" }} color="#45454dff">
            {bio1}
          </Heading>

          <Heading as="h1" size={{ base: "2xl", md: "3xl" }} color="#45454dff">
            {bio2}
          </Heading>
        </VStack>

        {/* CTA Button */}
        <Box pt={6}>
          <Button
            size="lg"
            colorScheme="purple"
            backgroundColor="#2f3838ff"
            _hover={{ bg: "#2493b4ff" }}
            onClick={() => {
              document
                .getElementById("projects-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            My Work
          </Button>
        </Box>
      </MotionVStack>
    </FullScreenSection>
  );
};

export default LandingSection;
