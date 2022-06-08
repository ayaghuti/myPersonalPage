import { useTranslation } from "next-i18next";

import {
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Box,
  Stack,
} from "@chakra-ui/react";

const Skills = () => {
  const { t } = useTranslation("skills");

  return (
    <>
      <Box mt={8} pl={2} ml={8}>
        <Box>
          <Heading as="h2" size={"lg"} mx={2} my={1} color={"green.600"}>
            {t("heading-skills")}
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
                {t("subheading-coding")}
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
                <ListItem>{t("skill-coding-list-html")}</ListItem>
                <ListItem>{t("skill-coding-list-css")}</ListItem>
                <ListItem>{t("skill-coding-list-javascript")}</ListItem>
                <ListItem>{t("skill-coding-list")}</ListItem>
              </UnorderedList>
            </Box>

            <Box w="250px" my={4}>
              <Text fontSize="2xl" color={"pink.500"}>
                {t("subheading-frameworks")}
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
                <ListItem>{t("frameworks-list-react")}</ListItem>
                <ListItem>{t("frameworks-list-redux")}</ListItem>
                <ListItem>{t("frameworks-list-next")}</ListItem>
                <ListItem>{t("frameworks-list-node")}</ListItem>
                <ListItem>{t("frameworks-list-chakra")}</ListItem>
                <ListItem>{t("frameworks-list-tailwind")}</ListItem>
                <ListItem>{t("frameworks-list-materialize")}</ListItem>
              </UnorderedList>
            </Box>
            <Box w="250px" my={4}>
              <Text fontSize="2xl" color={"pink.500"}>
                {t("subheading-databases")}
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
                <ListItem>{t("database-firebase")}</ListItem>
                <ListItem>{t("database-mongo")}</ListItem>
              </UnorderedList>
            </Box>
            <Box w="250px" my={4}>
              <Text fontSize="2xl" color={"pink.500"}>
                {t("subheading-languages")}
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
                <ListItem>{t("langs-fa")}</ListItem>
                <ListItem>{t("langs-en")}</ListItem>
                <ListItem>{t("langs-fr")}</ListItem>
                <ListItem>{t("langs-de")}</ListItem>
              </UnorderedList>
            </Box>
            <Box w="250px" my={4}>
              <Text fontSize="2xl" color={"pink.500"}>
                {t("subheading-hobbies")}
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
                <ListItem>{t("hobbies-coding")}</ListItem>
                <ListItem>{t("hobbies-reading")}</ListItem>
                <ListItem>{t("hobbies-singing")}</ListItem>
                <ListItem>{t("hobbies-skating")}</ListItem>
                <ListItem>{t("hobbies-jogging")}</ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
