import {
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Box,
  Stack,
} from "@chakra-ui/react";

const Skills = () => {
  return (
    <>
      <Box mt={8} pl={2} ml={8}>
        <Box>
          <Heading as="h2" size={"lg"} mx={2} my={1} color={"green.600"}>
            Skills:
          </Heading>
        </Box>
        <Box>
          <Stack
            direction={["column", "column", "row", "row"]}
            spacing="15px"
            alignContent={"center"}
          >
            <Box w="250px" my={0}>
              <Text fontSize="2xl" color={"pink.500"}>
                Coding:
              </Text>
              <UnorderedList
                spacing={3}
                my={3}
                ml={2}
                fontSize={["sm", "sm", "lg", "lg"]}
                direction={["column", "row"]}
                // align={"center"}
                justifyContent="flex-start"
              >
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
                <ListItem>Javascript</ListItem>
                <ListItem>Some experience with Python and C++</ListItem>
              </UnorderedList>
            </Box>

            <Box w="250px" my={4}>
              <Text fontSize="2xl" color={"pink.500"}>
                Frameworks:
              </Text>
              <UnorderedList
                spacing={3}
                my={3}
                ml={2}
                fontSize={["sm", "sm", "lg", "lg"]}
                direction={["column", "row"]}
                // align={"center"}
                justifyContent="flex-start"
              >
                <ListItem>React</ListItem>
                <ListItem>Redux</ListItem>
                <ListItem>Nextjs</ListItem>
                <ListItem>Nodejs</ListItem>
                <ListItem>Chakra-ui</ListItem>
                <ListItem>Tailwind-css</ListItem>
                <ListItem>Materialize-css</ListItem>
              </UnorderedList>
            </Box>
            <Box w="250px" my={4}>
              <Text fontSize="2xl" color={"pink.500"}>
                Data Bases:
              </Text>
              <UnorderedList
                spacing={3}
                my={3}
                ml={2}
                fontSize={["sm", "sm", "lg", "lg"]}
                direction={["column", "row"]}
                // align={"center"}
                justifyContent="flex-start"
              >
                <ListItem>Google Firebase</ListItem>
                <ListItem>MongoDB</ListItem>
              </UnorderedList>
            </Box>
            <Box w="250px" my={4}>
              <Text fontSize="2xl" color={"pink.500"}>
                Languages:
              </Text>
              <UnorderedList
                spacing={3}
                my={3}
                ml={2}
                fontSize={["sm", "sm", "lg", "lg"]}
                direction={["column", "row"]}
                // align={"center"}
                justifyContent="flex-start"
              >
                <ListItem>Persian-Mother Tongue</ListItem>
                <ListItem>English-B2</ListItem>
                <ListItem>French-B1</ListItem>
                <ListItem>German-A2</ListItem>
              </UnorderedList>
            </Box>
            <Box w="250px" my={4}>
              <Text fontSize="2xl" color={"pink.500"}>
                Hobbies:
              </Text>
              <UnorderedList
                spacing={3}
                my={3}
                ml={2}
                fontSize={["sm", "sm", "lg", "lg"]}
                direction={["column", "row"]}
                // align={"center"}
                justifyContent="flex-start"
              >
                <ListItem>Coding</ListItem>
                <ListItem>Reading</ListItem>
                <ListItem>Singing</ListItem>
                <ListItem>Figure Skating</ListItem>
                <ListItem>Jogging</ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
