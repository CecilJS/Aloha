import { NavItem } from "../interfaces/interfaces";
import {
  Box,
  Flex,
  Text,
  Stack,
  Link,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("primary", "secondary")}
        color={useColorModeValue("secondary", "primary")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        justify={"space-around"}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems="center"
          justifyContent="center"
          direction={{
            base: "column-reverse",
            xl: "row",
            lg: "row",
            md: "column-reverse",
            sm: "column-reverse",
          }}
        >
          <Text
            as={Link}
            href={"/"}
            fontSize={{ base: "lg", md: "xl" }}
            mt={{ base: 5, md: 0 }}
            textDecoration={"none"}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"mono"}
            color={useColorModeValue("secondary", "primary")}
            _hover={{
              textDecoration: "none",
            }}
          >
            Aloha! &copy; {currentYear} &nbsp; &nbsp;
          </Text>
          <Text mt={{ base: 5, md: 0 }}>
            &nbsp; &nbsp; Made with ❤️ by{" "}
            <Link
              href="https://cecilan.uk/"
              target="_blank"
              textDecoration={"none"}
              _hover={{
                textDecoration: "none",
              }}
            >
              CecilJS
            </Link>
          </Text>

          <Flex display={{ base: "flex", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack
      direction={{
        base: "column",
        xl: "row",
        lg: "row",
        md: "row",
        sm: "column",
      }}
      spacing={4}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color="secondary"
            _hover={{
              textDecoration: "none",
              color: "tertiary",
            }}
            _active={{
              textDecoration: "none",
              color: "primary",
              bg: "secondary",
            }}
            _visited={{
              textDecoration: "none",
              fontSize: "md",
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "User Agreement",
    href: "/user-agreement",
  },
  {
    label: "Cookie Policy",
    href: "/cookie-policy",
  },
  {
    label: "Careers",
    href: "/careers",
  },
];
