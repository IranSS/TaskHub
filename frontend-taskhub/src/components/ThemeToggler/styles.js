import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: ${({ theme }) => `1px solid ${theme.accent}`};
  border-radius: 8px;
`;
