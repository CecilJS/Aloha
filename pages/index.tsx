import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#6600CC" }}>
      <Head>
        <title>Aloha | A Library of Helpful Articles</title>
        <meta
          name="description"
          content="Aloha is simply a library of helpful articles that can help you develop your craft. For computer scientists by computer scientists."
        />
        <link rel="icon" href="/" />
      </Head>
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
        bg="primary"
      >
        <main>
          <Flex direction="column" p={12} bg="primary" color="secondary">
            <Heading as="h1" size="4xl" mb={6}>
              A Library of Helpful Articles!
            </Heading>

            <Text textAlign="center" mb={6}>
              Discover helpful articles that can help you develop your craft
            </Text>
            <Button
              color="primary"
              bg="secondary"
              size="sm"
              alignItems="center"
              justifyContent="center"
              display={"flex"}
              flexWrap={"wrap"}
            >
              Get Started
            </Button>
          </Flex>
        </main>
      </Flex>
      <footer>&copy; Aloha</footer>
    </div>
  );
};

export default Home;
