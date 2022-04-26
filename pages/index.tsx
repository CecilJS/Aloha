import { Button, Flex, Heading, Text, Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/layouts/Header";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>
        <Flex
          height="93.5vh"
          alignItems="center"
          justifyContent="center"
          bg="primary"
        >
          <Flex
            direction="column"
            p={12}
            bg="primary"
            color="secondary"
            alignItems="center"
            justifyContent="center"
          >
            <Heading as="h1" size="4xl" mb={6}>
              A Library of Helpful Articles
            </Heading>

            <Text
              textAlign="center"
              mb={6}
              fontSize="3xl"
              textShadow="0 0 20px black"
            >
              Discover helpful articles that can help you develop your craft
            </Text>
            <Button
              as={Link}
              href={"/about"}
              color="primary"
              bg="secondary"
              w="2ovw"
              _hover={{
                bg: "primary",
                color: "secondary",
                border: "1px solid",
                borderColor: "secondary",
                textDecoration: "none",
              }}
            >
              GET STARTED
            </Button>
          </Flex>
        </Flex>
      </main>
    </div>
  );
};

export default Home;
