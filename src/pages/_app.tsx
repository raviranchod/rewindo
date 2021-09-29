import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { GlobalStyle } from "../theme/global";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
