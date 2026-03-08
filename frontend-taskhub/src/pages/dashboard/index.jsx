import { Header } from "../../components/Header";
import { TaskItem } from "../../components/TaskItem";
import { Container, Row, TasksContainer } from "./styles";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get(`/tasks/getByUser?userId=${userId}`);
        setTasks(response.data);
        console.log("Tarefas:", response.data);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };

    fetchTasks();
  }, []);

  const onDelete = async (taskId) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esta tarefa?",
    );
    if (!confirmDelete) return;
    try {
      await api.delete(`/tasks/delete/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  const onEdit = async (task) => {
    const confirmEdit = window.confirm(
      "Tem certeza que deseja alterar o status desta tarefa?",
    );
    if (!confirmEdit) return;
    try {
      const updatedTask = { ...task, completed: !task.completed };
      await api.put(`/tasks/update/${task.id}`, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? updatedTask : t)),
      );
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <h2>Minhas Tarefas</h2>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Todas</option>
            <option value="completed">Concluídas</option>
            <option value="pending">Pendentes</option>
          </select>
        </Row>
        <TasksContainer>
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </TasksContainer>
      </Container>
    </>
  );
};

export { Dashboard };
