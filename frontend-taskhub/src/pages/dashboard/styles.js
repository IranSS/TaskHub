import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const FloatingButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    cursor: pointer;
    right: 1rem;
    bottom: 1rem;
    width: 4rem;
    aspect-ratio: 1;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.fabText};
    background-color: ${({ theme }) => theme.accent};
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.text};
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 1rem;
  gap: 1rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.glassyBorder}`};

  select {
    padding: 0.5rem;
    color: ${({ theme }) => theme.text};
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
