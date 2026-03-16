import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.text};
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;

  select {
    padding: 0.5rem;
    color: ${({ theme }) => theme.text};
    background-color: transparent;
    border: ${({ theme }) => `1px solid ${theme.accent}`};
    border-radius: 4px;

    option {
      background-color: ${({ theme }) => theme.background};
    }
  }
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;
