import { Box, Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Drawer from "../components/ui/Drawer";
import Card from "../components/ui/Card";

// Dummy data - should be fetching data from the db
const data = {
  imageUrl: "https://tinyurl.com/43zpc85s",
  imageAlt: "A million lines of code written by a single person",
  duration: "10 Minutes",
  mode: "Read",
  title: "Learn JavaScript in 2022",
  author: "Nathan W.",
  reviewCount: 20,
  rating: 4,
};

const About: NextPage = () => {
  return (
    <>
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

      <Flex
        height="100%"
        alignItems="left"
        justifyContent="left"
        bg="secondary"
        direction={{
          base: "column",
          xl: "row",
          lg: "column",
          md: "column",
          sm: "column",
        }}
      >
        <Drawer />

        <Heading
          textAlign="center"
          fontSize={{ base: "24px", md: "26px", lg: "36px" }}
          p={{ base: "10px", md: "5px", lg: "10px" }}
          mt={10}
          ml={-1}
          color="secondary"
          fontFamily={"mono"}
          backgroundColor="primary"
          height="15%"
          width={{
            base: "50vw",
            xl: "20%",
            lg: "20%",
            md: "30vw",
            sm: "100vw",
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          What's New?{" "}
        </Heading>
        <Flex
          direction={{
            base: "column",
            xl: "row",
            lg: "row",
            md: "column",
            sm: "column",
          }}
          alignItems="center"
          justifyContent="space-around"
        >
          <Box ml={10} mr={10} mt={20}>
            <Card {...data} />
            <Card {...data} />
          </Box>
          <Box ml={10} mr={10} mt={20}>
            <Card {...data} />
            <Card {...data} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
