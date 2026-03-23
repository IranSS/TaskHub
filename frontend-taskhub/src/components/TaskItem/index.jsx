import { memo } from "react";
import { Container, ControlButtons } from "./styles";
import { LuTrash, LuPen } from "react-icons/lu";

const TaskItem = memo(({ task, onDelete, onEdit }) => {
  return (
    <Container className="glassy">
      <h3>{task.title}</h3>
      <br />
      <p>{task.description}</p>
      <br />
      <p>
        Status:
        {task.completed ? (
          <strong className="green"> Concluída</strong>
        ) : (
          <strong className="yellow"> Pendente</strong>
        )}
      </p>
      <ControlButtons>
        <button className="glassy" onClick={() => onEdit(task)}>
          <LuPen />
        </button>
        <button className="glassy deletar" onClick={() => onDelete(task.id)}>
          <LuTrash />
        </button>
      </ControlButtons>
    </Container>
  );
});

export { TaskItem };
