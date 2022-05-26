import { Box } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box h="50px" py={3} alignContent={"center"} alignItems={"center"}>
      <footer align="center">
        <p>&copy; Ali Yaghuti 2015 - {new Date().getFullYear()}</p>
      </footer>
    </Box>
  );
};

export default Footer;
