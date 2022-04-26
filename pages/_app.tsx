import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { themeAloha } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={themeAloha}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
