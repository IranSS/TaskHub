import { Container, LoginContainer, Column, Title } from "./styles";

export const AuthLayout = ({ title, children, footer }) => {
  return (
    <Container>
      <LoginContainer className="glassy-border">
        <Column>
          <Title>{title}</Title>
          {children}
          {footer && (
            <span style={{ marginTop: "16px", alignSelf: "center" }}>
              {footer}
            </span>
          )}
        </Column>
      </LoginContainer>
    </Container>
  );
};
