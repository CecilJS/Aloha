import { Box, Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Drawer from "../components/ui/Drawer";
import Card from "../components/ui/Card";

const About: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#6600CC" }}>
      <Head>
        <title>Aloha | A Library of Helpful Articles</title>
        <meta
          name="description"
          content="Aloha is simply a library of helpful articles that can help you develop your craft. For computer scientists by computer scientists."
        />
        <link rel="icon" href="/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Flex
          height="93.5vh"
          alignItems="left"
          justifyContent="left"
          bg="secondary"
        >
          <Drawer />

          <Heading
            textAlign="center"
            size="md"
            mt={10}
            ml={-1}
            color="secondary"
            fontFamily={"mono"}
            backgroundColor="primary"
            height="5%"
            width="10%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            What's New?{" "}
          </Heading>
          <Flex>
            <Box m={5}>
              <Card />
              <Card />
            </Box>
            <Box m={5}>
              <Card />
              <Card />
            </Box>
          </Flex>
        </Flex>
      </main>
    </div>
  );
};

export default About;
