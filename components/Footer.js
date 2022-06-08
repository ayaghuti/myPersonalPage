import { Box } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box
      h="50px"
      pt={1}
      pb={2}
      mb={4}
      alignContent={"center"}
      alignItems={"center"}
    >
      <hr />
      <br />
      <footer align="center">
        <p>&copy; Ali Yaghuti 2015 - {new Date().getFullYear()}</p>
      </footer>
    </Box>
  );
};

export default Footer;
