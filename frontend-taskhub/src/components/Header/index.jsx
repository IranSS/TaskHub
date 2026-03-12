import { Container } from "./styles";

const Header = ({ onAddTask }) => {
  return (
    <Container>
      <h1>TaskHub</h1>
      <div className="actions">
        <button className="btn-nova-tarefa" onClick={onAddTask}>
          Nova Tarefa
        </button>
        <button
          className="btn-sair"
          onClick={() => {
            localStorage.removeItem("userId");
            window.location.href = "/";
          }}
        >
          Sair
        </button>
      </div>
    </Container>
  );
};

export { Header };
