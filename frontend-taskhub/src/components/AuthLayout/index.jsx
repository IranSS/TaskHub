import { Container, LoginContainer, Column, Title } from "./styles";

export const AuthLayout = ({ title, children, footer }) => {
  return (
    <Container>
      <LoginContainer className="glassy-border">
        <Column>
          <Title>{title}</Title>
          {children}
        </Column>
      </LoginContainer>
    </Container>
  );
};
