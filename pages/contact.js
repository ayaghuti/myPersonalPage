import NavBarContainer from "@/components/navbar/Container";
import Head from "next/head";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

const Contact = () => {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <Head>
        <title>Contact - Ali Yaghuti</title>
      </Head>
      <NavBarContainer>
        <Box as="main" mx={"auto"} mb={8} maxWidth="1000px" px={2}>
          <Flex
            flexDirection="column"
            alignContent={"center"}
            alignItems="center"
            maxWidth="1000px"
          >
            <Box>
              <Heading mb={4}>Way to contact me:</Heading>
            </Box>
            <Box align="center">
              <Text fontSize="2xl" ml={4} align="center">
                You can reach me via:
              </Text>
              <List
                spacing={3}
                my={3}
                ml={4}
                fontSize={["sm", "sm", "lg", "lg"]}
                direction={["column", "row"]}
                align={"center"}
                justifyContent="flex-start"
              >
                <ListItem>
                  <EmailIcon as={EmailIcon} color="gray.500" fontSize={"2xl"} />{" "}
                  aliyaghuti55@gmail.com
                </ListItem>
                <ListItem>
                  <PhoneIcon as={PhoneIcon} color="green.500" /> +989126104995
                </ListItem>
                <ListItem>
                  <Text>Or find me on social media:</Text>
                  <List fontSize={"2xl"} my={4}>
                    <ListItem my={4}>
                      <Box align="center">
                        <Link
                          href="https://www.facebook.com/ali.yaghuti.50/"
                          isExternal
                          color={"blue.400"}
                        >
                          <FaFacebook mx="2px" />
                        </Link>
                      </Box>
                    </ListItem>
                    <ListItem my={4}>
                      <Box align="center">
                        <Link
                          href="https://www.instagram.com/a.yaghuti.n/"
                          isExternal
                          color={"pink.400"}
                        >
                          <FaInstagram mx="2px" />
                        </Link>
                      </Box>
                    </ListItem>
                    <ListItem my={4}>
                      <Box align="center">
                        <Link
                          href="https://www.linkedin.com/in/ali-yaghutiniat-7b6918133/"
                          isExternal
                          color={"blue.600"}
                        >
                          <FaLinkedin mx="2px" />
                        </Link>
                      </Box>
                    </ListItem>
                    <ListItem my={4}>
                      <Box align="center">
                        <Link href="@ali197666" isExternal color={"blue.500"}>
                          <FaTelegram mx="2px" />
                        </Link>
                      </Box>
                    </ListItem>
                    <ListItem my={4}>
                      <Box align="center">
                        <Link href="#" isExternal color={"green.500"}>
                          <FaWhatsapp mx="2px" />
                        </Link>
                      </Box>
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Box>
      </NavBarContainer>
    </>
  );
};

export default Contact;
