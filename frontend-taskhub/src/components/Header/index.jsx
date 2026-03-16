import { Container } from "./styles";

import { ThemeToggler } from "../ThemeToggler";

import { Button } from "../Button";

const Header = ({ logged, onAddTask }) => {
  return (
    <Container>
      <h1>TaskHub</h1>
      <div className="actions">
        {logged ? <Button title="Nova tarefa" onClick={onAddTask} /> : null}

        <ThemeToggler />

        {logged ? (
          <Button
            title="Sair"
            className="btn-sair"
            onClick={() => {
              localStorage.removeItem("userId");
              window.location.href = "/";
            }}
          />
        ) : null}
      </div>
    </Container>
  );
};

export { Header };
