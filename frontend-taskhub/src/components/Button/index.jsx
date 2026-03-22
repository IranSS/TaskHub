import { ButtonContainer } from "./styles";

const Button = ({ title, icon, onClick, ...rest }) => {
  return icon ? (
    <ButtonContainer
      className="glassy-border"
      $justify="space-between"
      onClick={onClick}
      {...rest}
    >
      {icon}
      {title}
    </ButtonContainer>
  ) : (
    <ButtonContainer
      className="glassy-border"
      $justify="center"
      onClick={onClick}
      {...rest}
    >
      {title}
    </ButtonContainer>
  );
};

export { Button };
