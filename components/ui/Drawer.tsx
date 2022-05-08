import { Box, Button, Heading, Text, Link } from "@chakra-ui/react";
import classes from "./Drawer.module.css";

function Drawer() {
  return (
    <>
      <div className={classes.bg_color}>
        <Box p={15} m={10}>
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
        </Box>
      </div>
    </>
  );
}

export default Drawer;
