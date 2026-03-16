import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Open Sans", sans-serif;
    background-color: ${({ theme }) => theme.body};
  }
`;
