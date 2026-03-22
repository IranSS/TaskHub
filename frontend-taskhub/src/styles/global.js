import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Open Sans", sans-serif;
    background-color: ${({ theme }) => theme.body};
  }

  .glassy {
    background-color: ${({ theme }) => theme.glassyBg};
    border: ${({ theme }) => `1px solid ${theme.glassyBorder}`};
  }

  .glassy-border {
    border: ${({ theme }) => `1px solid ${theme.glassyBorder}`}
  }

  .green {
    color: ${({ theme }) => theme.green};
  }

  .yellow {
    color: ${({ theme }) => theme.yellow};
  }

  .red {
    color: ${({ theme }) => theme.red};
  }

  @media (max-width: 768px) {
    .no-mobile {
      display: none;
    }
  }
`;
