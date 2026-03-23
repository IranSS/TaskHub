import { ButtonContainer } from "./styles";

const Button = ({ title, icon, onClick, secondary, ...rest }) => {
  return icon ? (
    <ButtonContainer
      $secondary={secondary}
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
      $secondary={secondary}
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
