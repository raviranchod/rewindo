import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${(p) => p.theme.fonts.family.sansSerif.name};
    font-weight: ${(p) => p.theme.fonts.family.sansSerif.weight};
    margin: 0;
  }
`;

export { GlobalStyle };
