import React from "react";

import { NavLink } from "react-router-dom";
import { Box, Button, Container, HStack, Link, Show } from "@chakra-ui/react";

import Logo from "assets/svg/logo.svg";

function NavBar() {
  // const checkForCookies = () => {
  //   return document.cookie.split(';').some((cookie) => {
  //     return cookie.trim().startsWith('yourCookieName='); // Replace 'yourCookieName' with the name of your cookie
  //   });
  // };
  const checkForlocalBaseData = () => {
    const secret = localStorage.getItem('user-auth-secret');
    if(secret) return true;
    else false;

  }
  const UserExist = checkForlocalBaseData();
  return (
    <Container size="lg" py="2.5rem">
      <HStack>
        <Box w="100%" position="relative">
          <Link
            as={NavLink}
            to="/"
            transform="auto"
            translateY="-0.2rem"
            _focus={{ boxShadow: "none" }}
          >
            <Logo />
          </Link>
        </Box>
        <Show above="lg">
          <HStack w="auto" spacing="3.75rem">
            <Link as={NavLink} to="/">
              Home
            </Link>
            <Link as={NavLink} to="/about">
              About
            </Link>
            <Link as={NavLink} to="/events">
              Events
            </Link>
            <Link as={NavLink} to="/organisations">
              ORGs
            </Link>
          </HStack>
        </Show>
        <Show above="sm">
          <HStack w="100%" justify="flex-end">
          {!UserExist && ( // Render the following only if cookies exist
        <Link as={NavLink} to="/login">
          <Button colorScheme="gray" fontWeight="400">
            Sign In
          </Button>
        </Link>
      )}
          </HStack>
        </Show>
      </HStack>
    </Container>
  );
}

export default NavBar;
