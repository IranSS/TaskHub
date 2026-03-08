import { memo } from "react";
import { Container, ControlButtons } from "./styles";
import { FaTrash, FaPen } from "react-icons/fa";

const TaskItem = memo(({ task, onDelete, onEdit }) => {
  return (
    <Container>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>
        Status: <strong>{task.completed ? "Concluída" : "Pendente"}</strong>
      </p>
      <ControlButtons>
        <button className="editar" onClick={() => onEdit(task)}>
          <FaPen />
        </button>
        <button className="excluir" onClick={() => onDelete(task.id)}>
          <FaTrash />
        </button>
      </ControlButtons>
    </Container>
  );
});

export { TaskItem };
