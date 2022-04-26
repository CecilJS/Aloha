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
  Checkbox,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const SignUp: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#6600CC" }}>
      <Head>
        <title>Sign up - Aloha | A Library of Helpful Articles</title>
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
              Sign Up
            </Heading>
            <Text mb={8} size="sm">
              Please provide your details below
            </Text>
            <FormControl isRequired>
              <FormLabel htmlFor="full-name">Full name</FormLabel>
              <Input
                id="full-name"
                placeholder="James Brown"
                variant="filled"
                mb={6}
                type="text"
              />
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                placeholder="James Brown"
                variant="filled"
                mb={6}
                type="text"
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                placeholder="*******"
                variant="filled"
                mb={6}
                type="password"
              />
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                id="email"
                placeholder="Jim.B@aloha.com"
                variant="filled"
                type="email"
              />
              <FormHelperText mb={3} color="tertiary">
                We'll never share your email.
              </FormHelperText>
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
              Sign Up
            </Button>
            <Checkbox size="sm">I agree to Aloha User Agreement</Checkbox>
            <Text mb={2} as={Link} href={"/reset"}>
              Forgot your account?
            </Text>
            <Text mb={1} as={Link} href={"/signin"}>
              Sign In
            </Text>
          </Flex>
        </Flex>
      </main>
    </div>
  );
};

export default SignUp;
