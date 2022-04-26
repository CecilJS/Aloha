import {
  Button,
  Flex,
  Heading,
  Link,
  Input,
  Text,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const SignIn: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#6600CC" }}>
      <Head>
        <title>Sign in - Aloha | A Library of Helpful Articles</title>
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
            <Heading size="lg" mb={2} textAlign="center">
              Sign In
            </Heading>
            <Text mb={8} size="sm">
              Please fill in your Login details below
            </Text>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                placeholder="Jim.B@aloha.com"
                variant="filled"
                type="email"
              />
              <FormHelperText mb={3} color="tertiary">
                We'll never share your email.
              </FormHelperText>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                placeholder="*******"
                variant="filled"
                mb={6}
                type="password"
              />
            </FormControl>

            <Button
              type="submit"
              color="secondary"
              bg="primary"
              w="15vw"
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
              Sign In
            </Button>
            <Text mb={2} as={Link} href={"/reset"}>
              Forgot your account?
            </Text>
            <Text mb={1} as={Link} href={"/signup"}>
              Create an account
            </Text>
          </Flex>
        </Flex>
      </main>
    </div>
  );
};

export default SignIn;
