

import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Link,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
} 
from "@chakra-ui/react"; import { HamburgerIcon, CloseIcon } 
from "@chakra-ui/icons"; import { FontAwesomeIcon } 
from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  { icon: faEnvelope, url: "el@l.com" },
  { icon: faGithub, url: "https://github.com/ELAN981" },
  { icon: faLinkedin, url: "https://www.linkedin.com" },
  { icon: faYoutube, url: "https://www.youtube.com" },
  { icon: faStackOverflow, url: "https://stackoverflow.com" },
];

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      onClose();
    }
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      zIndex="9999"
      position="fixed"
      top={0}
      left={0}
      right={0}
      color="white"
      transition="all .3s ease-in-out"
      bg={scrolled ? "#4f4f57ff" : "transparent"}
      boxShadow={scrolled ? "0 2px 8px rgba(0,0,0,0.3)" : "none"}
      backdropFilter={scrolled ? "blur(8px)" : "none"}
    >
      <Flex
        maxW="1280px"
        mx="auto"
        px={{ base: 6, md: 16 }}
        py={4}
        align="center"
        justify="space-between"
      >
        {/* Social Icons */}
        <HStack spacing={6}>
          {socials.map((social, index) => (
            <Link
              key={index}
              href={
                social.url.includes("@")
                  ? `mailto:${social.url}`
                  : social.url
              }
              isExternal
            >
              <FontAwesomeIcon
                icon={social.icon}
                size="lg"
                style={{ transition: "transform 0.2s" }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
              />
            </Link>
          ))}
        </HStack>

        {/* Desktop Nav */}
        <HStack as="nav" spacing={8} display={{ base: "none", md: "flex" }}>
          <Link href="#aboutme-section" onClick={handleClick("aboutme")}>
            About Me
          </Link>
          <Link href="#projects-section" onClick={handleClick("projects")}>
            Projects
          </Link>
          <Link href="#skills-section" onClick={handleClick("skills")}>
            Skills
          </Link>
          <Link href="#contactme-section" onClick={handleClick("contactme")}>
            Contact Me
          </Link>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          bg="transparent"
          _hover={{ bg: "gray.700" }}
        />
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4} textAlign="center">
            <Link href="#aboutme-section" onClick={handleClick("aboutme")}>
              About Me
            </Link>
            <Link href="#projects-section" onClick={handleClick("projects")}>
              Projects
            </Link>
            <Link href="#skills-section" onClick={handleClick("skills")}>
              Skills
            </Link>
            <Link href="#contactme-section" onClick={handleClick("contactme")}>
              Contact Me
            </Link>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Header;