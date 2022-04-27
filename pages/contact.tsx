import { EmailIcon, InfoIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import AloButton from "../components/ui/Button";

const buttonStyle = [
  {
    id: "1",
    href: "/about",
    color: "secondary",
    bgColor: "primary",
    height: "5vw",
    marginBottom: "2",
    borderColor: "secondary",
    hoverBgColor: "secondary",
    hoverColor: "primary",
    hoverBorderColor: "secondary",
    text: "Send",
  },
];
const Contact: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#6600CC" }}>
      <Head>
        <title> Contact Form - Aloha | A Library of Helpful Articles</title>
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
            <form action="submit" method="POST">
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<EmailIcon color="primary" />} />
                  <Input
                    id="email"
                    placeholder="Email"
                    variant="filled"
                    mb={3}
                    type="email"
                    aria-lable="Email"
                    _active={{
                      outlineColor: "secondary",
                    }}
                  />
                </InputGroup>
                <FormLabel htmlFor="full-name">Full name</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<InfoIcon color="primary" />} />
                  <Input
                    id="full-name"
                    placeholder="James Brown"
                    variant="filled"
                    mb={6}
                    type="text"
                  />
                </InputGroup>
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

              <AloButton buttonProps={buttonStyle}>Send</AloButton>
            </form>
          </Flex>
        </Flex>
      </main>
    </div>
  );
};

export default Contact;
