import {
  Flex,
  Img,
  Heading,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Education = () => {
  return (
    <>
      <Box mt={8} pl={2}>
        <Heading as="h2" size={"lg"} m={2} color={"green.600"}>
          Education
        </Heading>

        <TableContainer fontSize={"sm"}>
          <Table variant="striped" colorScheme="pink">
            <Thead>
              <Tr>
                <Th>Start Year - End Year</Th>
                <Th>School</Th>
                <Th>Degree</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>2011-2013</Td>
                <Td>Mehralborz Institute of Higher Education</Td>
                <Td>Master of Business Administration (MBA)</Td>
              </Tr>
              <Tr>
                <Td>1994-1998</Td>
                <Td>Malek-Ashtar Industrial University</Td>
                <Td>
                  Bachelor of Science (B.Sc.), Electrical and Electronics
                  Engineering
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Education;
