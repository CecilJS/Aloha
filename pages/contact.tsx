import {
  Button,
  Flex,
  Heading,
  Text,
  Link,
  Input,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
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
          bg="secondary"
        >
          <Flex
            direction="column"
            p={12}
            bg="primary"
            color="secondary"
            alignItems="center"
            justifyContent="center"
            borderRadius={8}
          >
            <Heading size="md" mb={2} textAlign="center">
              Send us a message
            </Heading>
            <Text mb={6} fontSize="sm">
              Thank you for contacting us, we will be in touch shortly!
            </Text>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                id="email"
                placeholder="Email"
                variant="filled"
                mb={3}
                type="email"
              />
              <FormLabel htmlFor="full-name">Full name</FormLabel>
              <Input
                id="full-name"
                placeholder="James Brown"
                variant="filled"
                mb={6}
                type="text"
              />
            </FormControl>
            <FormLabel htmlFor="message"></FormLabel>
            <Textarea
              id="message"
              placeholder="Please type your message here"
              size="md"
              mb={6}
              variant="filled"
              rows={5}
            />

            <Button
              as={Link}
              href={"/about"}
              color="secondary"
              bg="primary"
              w="10vw"
              mb="2"
              border="1px solid"
              borderColor="secondary"
              _hover={{
                bg: "secondary",
                color: "primary",
                border: "1px solid",
                borderColor: "primary",
                textDecoration: "none",
              }}
            >
              Send
            </Button>
          </Flex>
        </Flex>
      </main>
    </div>
  );
};

export default Home;
