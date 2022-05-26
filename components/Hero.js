import { Flex, Img, Heading, Box, Spacer } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box mb={2}>
      <Flex
        direction={["column", "row"]}
        justifyContent="center"
        alignItems="center"
        maxWidth="1000px"
        mb={5}
      >
        <Box mr={[0, 2, 8, 8]}>
          <Img
            borderRadius="full"
            boxSize="200px"
            src="ali.jpg"
            alt="Ali Yaghuti"
          />
        </Box>
        <Box ml={[0, 2, 8, 8]} align="center">
          <Heading as="h1" size={"xl"} my={[0, 0, 4, 4]} py={2}>
            Hi, my name's Ali Yaghuti.
          </Heading>
          <Heading as="h2" size={"lg"} my={[0, 0, 4, 4]} py={2}>
            Welcome to my site!
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
