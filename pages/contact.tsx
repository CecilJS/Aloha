import { EmailIcon, InfoIcon } from "@chakra-ui/icons";
import {
  Flex,
  Button,
  Heading,
  Text,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  InputLeftElement,
  InputGroup,
  Box,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Contact: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmitForm = async (data: any) => {
    const config = {
      method: "POST",
      url: "/api/hello",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        setIsSuccess(!isSuccess);
        reset();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleFeedback = async () => {
    if (isSuccess) {
      toast({
        title: "Message Sent!",
        description:
          "Thank you for contacting Aloha. We will be in touch with you shortly.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setIsSuccess(false);
    }
  };

  return (
    <>
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
            <form
              action="submit"
              method="POST"
              onSubmit={handleSubmit(onSubmitForm)}
            >
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<EmailIcon color="primary" />} />
                  <Input
                    color="tertiary"
                    id="email"
                    placeholder="Email"
                    variant="filled"
                    mb={3}
                    type="email"
                    aria-lable="Email"
                    {...register("email", {
                      required: "Please enter with your email address.",
                      minLength: {
                        value: 8,
                        message: "Please enter a valid email address.",
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address.",
                      },
                      maxLength: {
                        value: 50,
                        message: "The email address is too long.",
                      },
                    })}
                    _active={{
                      outlineColor: "secondary",
                      color: "secondary",
                    }}
                    _hover={{
                      color: "tertiary",
                    }}
                  />
                </InputGroup>
                <Box as="span" color="warning" fontSize="sm">
                  <Flex mb={6}>{errors?.email?.message}</Flex>
                </Box>
                <FormLabel htmlFor="full-name">Full name</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<InfoIcon color="primary" />} />
                  <Input
                    id="full-name"
                    placeholder="James Brown"
                    variant="filled"
                    mb={3}
                    type="text"
                    {...register("name", {
                      required: "Please enter with your fullname.",
                      minLength: {
                        value: 3,
                        message: "Must be at least 3 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Must be less than 20 characters",
                      },
                    })}
                  />
                </InputGroup>
                <Box as="span" color="warning" fontSize="sm">
                  <Flex mb={6}>{errors?.name?.message}</Flex>
                </Box>
              </FormControl>

              <FormLabel htmlFor="message"></FormLabel>

              <Textarea
                id="message"
                placeholder="Please type your message here"
                size="md"
                mb={3}
                variant="filled"
                rows={5}
                {...register("message", {
                  required: "You have probably forgotten to type your message.",
                  minLength: {
                    value: 10,
                    message:
                      "The content of your message must be at least 10 characters long.",
                  },
                  maxLength: {
                    value: 1000,
                    message:
                      "The content of your message must not exceed 1000 characters.",
                  },
                })}
              />
              <Box as="span" color="warning" fontSize="sm">
                <Flex mb={6}> {errors?.message?.message}</Flex>
              </Box>

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
                onClick={handleFeedback}
              >
                Send
              </Button>
            </form>
          </Flex>
        </Flex>
      </main>
    </>
  );
};

export default Contact;
