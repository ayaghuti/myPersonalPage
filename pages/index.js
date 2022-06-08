import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Text, Box } from "@chakra-ui/react";

import NavBarContainer from "@/components/navbar/Container";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <NavBarContainer>
        <main>
          <Box as="main" mx={"auto"} mb={8} maxWidth="1000px" px={2}>
            <Hero />
            <Box>
              <Text px={4} fontSize="xl">
                {t("intro")}
              </Text>
            </Box>
            <br />
            <br />
            <hr />
            <Education />
            <br />
            <br />
            <hr />
            <Skills />
          </Box>
        </main>
      </NavBarContainer>
    </>
  );
};

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "nav",
        "hero",
        "education",
        "skills",
      ])),
      // Will be passed to the page component as props
    },
  };
}
