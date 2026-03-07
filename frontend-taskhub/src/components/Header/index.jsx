import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <h1>TaskHub</h1>
      <button
        className="btn-sair"
        onClick={() => {
          localStorage.removeItem("userId");
          window.location.href = "/";
        }}
      >
        Sair
      </button>
    </Container>
  );
};

export { Header };
