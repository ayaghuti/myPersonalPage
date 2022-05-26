import NavBarContainer from "@/components/navbar/Container";
import Head from "next/head";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Box,
  Link,
  Img,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const About = () => {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <Head>
        <title>About - Ali Yaghuti</title>
      </Head>
      <NavBarContainer>
        <Box as="main" mx={"auto"} mb={8} maxWidth="1000px" px={2}>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="1000px"
          >
            <Img
              w="100%"
              borderRadius="lg"
              // mr={4}
              mb={4}
              src="me.jpg"
              alt="Ali Yaghuti"
            />
            <Heading mb={2} px={4}>
              Ali Yaghuti
            </Heading>
            <Text px={4} fontSize={["lg", "lg", "xl", "xl"]}>
              Ali Yaghutiniat is an Electronics Engineer who loves coding. It's
              really amazing being able to create something from almost nothing.
              Like a painter who gives life to a blank convas. To do so I have
              gone through a roadmap from bootcamper in{" "}
              <Link
                href="https://www.freecodecamp.org/certification/ayaghutiniat/javascript-algorithms-and-data-structures"
                isExternal
                color={"tomato"}
              >
                freeCodeCamp <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              and{" "}
              <Link href="https://w3schools.com/" isExternal color={"tomato"}>
                W3schools <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              to coding along with awesome youtubers like{" "}
              <Link
                href="https://www.youtube.com/c/TraversyMedia"
                isExternal
                color={"tomato"}
              >
                Traversy Media <ExternalLinkIcon mx="2px" />
              </Link>
              ,{" "}
              <Link
                href="https://www.youtube.com/c/TheNetNinja"
                isExternal
                color={"tomato"}
              >
                The Net Ninja <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              and much others to grab ideas and solutions for further progress
              and going into actual creation in this field. It has been a real
              hobby for me.
            </Text>
          </Flex>
        </Box>
      </NavBarContainer>
    </>
  );
};

export default About;
