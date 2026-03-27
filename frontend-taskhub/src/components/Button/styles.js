import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: ${({ $justify }) => $justify};
  align-items: center;
  gap: 8px;
  position: relative;
  padding: 10px 0;

  background-color: ${({ $secondary, theme }) =>
    $secondary ? "transparent" : theme.accent};
  color: ${({ $secondary, theme }) =>
    $secondary ? theme.accent : theme.btnText};

  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 1px;

  width: 100%;

  .centered {
    justify-content: center;
  }

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;
