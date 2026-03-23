import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border-radius: 8px;
  position: relative;

  h3,
  p {
    color: ${({ theme }) => theme.text};
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
    border-radius: 4px;
    cursor: pointer;
    color: ${({ theme }) => theme.text};

    &:hover {
      scale: 1.1;
    }
  }

  .deletar {
    color: ${({ theme }) => theme.red};
  }
`;
