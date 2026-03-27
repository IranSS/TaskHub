import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Hero = styled.section`
  text-align: center;
  max-width: 600px;
  padding: 0 20px;

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    color: ${({ theme }) => theme.accent};
    letter-spacing: -1px;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    margin-bottom: 40px;
  }
`;

export const FeatureList = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 40px;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;

  .item {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: ${({ theme }) => theme.accent};
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
    margin-top: 40px;
  }
`;