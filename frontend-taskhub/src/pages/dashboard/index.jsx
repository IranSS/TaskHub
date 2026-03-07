import { Header } from "../../components/Header";
import { Container } from "./styles";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Bem-vindo ao Dashboard!</h2>
        <p>Aqui você pode gerenciar suas tarefas e projetos.</p>
      </Container>
    </>
  );
};

export { Dashboard };
