import { useState } from "react";
import {
  useColorMode,
  Button,
  Box,
  Flex,
  Stack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import { FaGithub } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import DarkModeSwitch from "./DarkModeSwitch";
import Footer from "../Footer";

const Container = ({ children }) => {
  const { colorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");

  const bgColor = {
    light: "white",
    dark: "#171717",
  };
  const hambugerMenuBgColor = {
    light: "gray.100",
    dark: "gray.600",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  const navHoverBg = {
    light: "gray.100",
    dark: "gray.500",
  };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1000px"
        minWidth="356px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={5}
        mb={[0, 0, 4]}
        mx="auto"
      >
        <Flex display={["none", "none", "flex", "flex"]}>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _haver={{ backgroundColor: navHoverBg[colorMode] }}
              aria-label="Home"
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _haver={{ backgroundColor: navHoverBg[colorMode] }}
              aria-label="About"
            >
              About
            </Button>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _haver={{ backgroundColor: navHoverBg[colorMode] }}
              aria-label="Contact"
            >
              Contact
            </Button>
          </NextLink>
        </Flex>
        <IconButton
          aria-label="Open-Menu"
          bg={hambugerMenuBgColor[colorMode]}
          // _haver={{ backgroundColor: "gray.500" }}
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          display={["flex", "flex", "none", "none"]}
          onClick={() => changeDisplay("flex")}
        />
        <Stack
          fontSize={["15", "25", "25", "25"]}
          direction={["row"]}
          spacing="24px"
          align={"center"}
        >
          <Box _haver={{ backgroundColor: navHoverBg[colorMode] }}>
            <Link href="https://github.com/ayaghuti" isExternal>
              <FaGithub mx="2px" />
            </Link>
          </Box>

          <Box>
            <DarkModeSwitch />
          </Box>
        </Stack>
        <Flex
          direction={["column"]}
          w="50vh"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          display={display}
          bg={hambugerMenuBgColor[colorMode]}
          color={color[colorMode]}
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="close-menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
            />
          </Flex>
          <Flex flexDir="column" align="center">
            <NextLink href="/" passHref>
              <Button
                as="a"
                variant="ghost"
                p={[1, 2, 4]}
                _haver={{ backgroundColor: navHoverBg[colorMode] }}
                aria-label="Home"
                onClick={() => changeDisplay("none")}
              >
                Home
              </Button>
            </NextLink>
            <NextLink href="/about" passHref>
              <Button
                as="a"
                variant="ghost"
                p={[1, 2, 4]}
                _haver={{ backgroundColor: navHoverBg[colorMode] }}
                aria-label="About"
                onClick={() => changeDisplay("none")}
              >
                About
              </Button>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Button
                as="a"
                variant="ghost"
                p={[1, 2, 4]}
                _haver={{ backgroundColor: navHoverBg[colorMode] }}
                aria-label="Contact"
                onClick={() => changeDisplay("none")}
              >
                Contact
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 2, 2]}
        mt={[4, 8, 8]}
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Container;
