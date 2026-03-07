import { ButtonContainer } from "./styles";

const Button = ({ title, onClick }) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};

export { Button };
