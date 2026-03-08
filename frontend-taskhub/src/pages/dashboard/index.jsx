import { Header } from "../../components/Header";
import { TaskItem } from "../../components/TaskItem";
import { Container, TasksContainer } from "./styles";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get(`/tasks/getAll`);
        setTasks(response.data);
        console.log("Tarefas:", response.data);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };

    fetchTasks();
  }, []);

  const onDelete = async (taskId) => {
    try {
      await api.delete(`/tasks/delete/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  const onEdit = () => {};

  return (
    <>
      <Header />
      <Container>
        <h3>Dashboard</h3>
        <TasksContainer>
          {tasks.map((task) => (
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
