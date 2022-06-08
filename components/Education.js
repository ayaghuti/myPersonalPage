import { useTranslation } from "next-i18next";

import {
  Flex,
  Img,
  Heading,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Education = () => {
  const { t } = useTranslation("education");

  return (
    <>
      <Box mt={8} pl={2}>
        <Heading as="h2" size={"lg"} m={2} color={"green.600"}>
          {t("education-h2")}
        </Heading>

        <TableContainer fontSize={"sm"}>
          <Table variant="striped" colorScheme="pink">
            <Thead>
              <Tr>
                <Th>{t("education-table-time")}</Th>
                <Th>{t("education-table-school")}</Th>
                <Th>{t("education-table-degree")}</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{t("t-period-one")}</Td>
                <Td>{t("school-one")}</Td>
                <Td>{t("degree-one")}</Td>
              </Tr>
              <Tr>
                <Td>{t("t-period-two")}</Td>
                <Td>{t("school-two")}</Td>
                <Td>{t("degree-two")}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Education;
