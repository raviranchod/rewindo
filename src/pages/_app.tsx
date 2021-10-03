import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../theme/global";
import { Header } from "../components/Header";

import { theme } from "../theme";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
  </ThemeProvider>
);

export default MyApp;
