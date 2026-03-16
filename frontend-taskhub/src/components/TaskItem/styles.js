import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border: ${({ theme }) => `1px solid ${theme.accent}`};
  border-radius: 8px;
  position: relative;

  h3, p {
    color: ${({ theme }) => theme.text}
  }
`;

export const ControlButtons = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 1rem;
  position: absolute;
  right: 1rem;
  top: 0;

  button {
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;

    &:hover {
      opacity: 0.8;
    }
  }

  .excluir {
    background-color: #e74c3c;
  }

  .editar {
    background-color: #3498db;
  }
`;
