import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { themeAloha } from "../styles/theme";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import "focus-visible/dist/focus-visible";

import { Global, css } from "@emotion/react";

const GlobalStyles = css`
  /*
    This this ensures that the focus indicator is hidden if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={themeAloha}>
      <Global styles={GlobalStyles} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
