import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;

  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;