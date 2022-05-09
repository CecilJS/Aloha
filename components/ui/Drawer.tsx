import { Container, Button, Heading, Text, Link, Flex } from "@chakra-ui/react";

function Drawer() {
  return (
    <Flex
      justify-content="flex-start"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width={{
        base: "100vw",
        xl: "30vw",
        lg: "100vw",
        md: "100vw",
        sm: "100vw",
      }}
      backgroundColor="primary"
      color="secondary"
    >
      <Container p={15} m={10}>
        <Heading size="md" fontSize="4xl">
          Getting Started
        </Heading>
        <Text mt={10}>
          Welcome to Aloha! A place where you can share your knowledge and
          receive so much more in return.
        </Text>
        <Text mt={5} fontSize="3xl">
          "Words have power."
        </Text>
        <Text mt={5}>
          These well written articles have the power to take you from zero to
          hero.
        </Text>
        <Text mt={5}>
          Welcome to Aloha! A place where you can share your knowledge and
          receive so much more in return.
        </Text>
        <Text mt={5}>
          Sign up now and join the pool talent authors in this free knowledge
          exchange platform.
        </Text>
        <Button
          as={Link}
          href={"/signup"}
          color="secondary"
          bg="primary"
          w="15vw"
          mb="2"
          mt="10"
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
      </Container>
    </Flex>
  );
}

export default Drawer;
