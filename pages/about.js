import Head from "next/head";
// import Image from "next/image";
import { useRouter } from "next/router";
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

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import NavBarContainer from "@/components/navbar/Container";

const About = () => {
  const router = useRouter();
  const { t } = useTranslation("about");

  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <Head>
        <title>{t("title")}</title>
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
            {/* <Image
              src="/public/me.png"
              alt="Picture of the author"
              width={2204}
              height={1120}
            /> */}
            <Heading mb={2} px={4}>
              {t("name")}
            </Heading>
            <Text px={4} fontSize={["lg", "lg", "xl", "xl"]}>
<<<<<<< HEAD
<<<<<<< HEAD
              {t("about-part-one")}{" "}
=======
=======
>>>>>>> origin
              Ali Yaghutiniat is an Electronics Engineer who loves coding. It is
              really amazing being able to create something from almost nothing.
              Like a painter who gives life to a blank convas. To do so I have
              gone through a roadmap from bootcamper in{" "}
>>>>>>> 78d52242a3b21e21cc478a940e5c3d04fa314b5f
              <Link
                href="https://www.freecodecamp.org/certification/ayaghutiniat/javascript-algorithms-and-data-structures"
                isExternal
                color={"tomato"}
              >
                {t("about-part-two")} <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              and{" "}
              <Link href="https://w3schools.com/" isExternal color={"tomato"}>
                {t("about-part-three")} <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              {t("about-part-four")}{" "}
              <Link
                href="https://www.youtube.com/c/TraversyMedia"
                isExternal
                color={"tomato"}
              >
                {t("about-part-five")} <ExternalLinkIcon mx="2px" />
              </Link>
              ,{" "}
              <Link
                href="https://www.youtube.com/c/TheNetNinja"
                isExternal
                color={"tomato"}
              >
                {t("about-part-six")} <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              {t("about-part-seven")}
            </Text>
          </Flex>
        </Box>
      </NavBarContainer>
    </>
  );
};

export default About;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "nav"])),
      // Will be passed to the page component as props
    },
  };
}
