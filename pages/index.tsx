import { Button, Flex, Heading, Text, Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
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
          height="87.3vh"
          alignItems="center"
          justifyContent="center"
          bgImage="url('https://tinyurl.com/alohaofficialbg')"
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPosition="center"
        >
          <Flex
            direction="column"
            p={12}
            bg="secondary"
            color="primary"
            alignItems="center"
            justifyContent="center"
            opacity={0.6}
            borderRadius={10}
          >
            <Heading as="h1" size="4xl" mb={6} textAlign="center">
              A Library of Helpful Articles
            </Heading>

            <Text
              textAlign="center"
              mb={6}
              fontSize="3xl"
              textShadow="0 0 20px primary"
            >
              Discover helpful articles that can help you develop your craft
            </Text>
            <Button
              as={Link}
              href={"/about"}
              color="primary"
              bg="secondary"
              w="2ovw"
              border="1px solid"
              borderColor="primary"
              _hover={{
                bg: "primary",
                color: "secondary",
                border: "1px solid",
                borderColor: "primary",
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

// https://tinyurl.com/alohacjs https://tinyurl.com/bgalohacjs
