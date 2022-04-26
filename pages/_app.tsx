import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { themeAloha } from "../styles/theme";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={themeAloha}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
