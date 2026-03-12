import { ButtonContainer } from "./styles";

const Button = ({ title, onClick, ...rest }) => {
  return <ButtonContainer onClick={onClick} {...rest}>
    {title}
  </ButtonContainer>;
};

export { Button };
