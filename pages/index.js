import NavBarContainer from "@/components/navbar/Container";
import Head from "next/head";
import { useColorMode, Text, Flex, Stack, Box } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const Home = () => {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <Head>
        <title>Home - Ali Yaghuti </title>
      </Head>
      <NavBarContainer>
        <main>
          <Box as="main" mx={"auto"} mb={8} maxWidth="1000px" px={2}>
            <Hero />
            <Box>
              <Text px={4} fontSize="xl">
                Formerly I was working in the Electronics field. More precisely
                I was working more often on micro-controllers and assembly
                language and later on C++ developing platforms related to them
                and finaly with FPGAs (Field Programble Gate Arrays). However I
                was lucky to take the chance and get involved in web programming
                and very soon I found myself immersed in coding the web. No
                doubt that it is interesting and I am open to any chance to dive
                even deeper to it.
              </Text>
            </Box>
            <Education />
            <Skills />
          </Box>
        </main>
      </NavBarContainer>
    </>
  );
};

export default Home;
