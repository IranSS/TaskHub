import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.accent}`};

  h1 {
    color: ${({ theme }) => theme.text};
  }

  button {
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }
  }

  .actions {
    display: flex;
    gap: 0.5rem;
  }

  .btn-sair {
    background-color: #e74c3c;
  }
`;
