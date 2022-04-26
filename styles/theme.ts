import { extendTheme } from "@chakra-ui/react";

export const themeAloha = extendTheme({
  colors: {
    primary: "#6600CC",
    secondary: "#FFFFFF",
    tertiary: "#B2AEAE",
    highlight: "#2a69ac",
    warning: "#ffb400",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Poppins, sans-serif",
    mono: "Pacifico, cursive",
  },
});
