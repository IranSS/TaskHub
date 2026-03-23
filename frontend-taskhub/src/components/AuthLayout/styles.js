import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 350px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  a {
    text-decoration: none;
    font-weight: bolder;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;
