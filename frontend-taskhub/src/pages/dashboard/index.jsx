import { Header } from "../../components/Header";
import { TaskItem } from "../../components/TaskItem";
import { TaskEditorModal } from "../../components/TaskEditorModal";
import { Container, Row, TasksContainer, Title } from "./styles";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const [showModal, setShowModal] = useState(false);
  const [actualTask, setActualTask] = useState(null);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const userId = localStorage.getItem("userId");

  const fetchTasks = async () => {
    try {
      const response = await api.get(`/tasks/getByUser?userId=${userId}`);
      setTasks(response.data);
      console.log("Tarefas:", response.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  useEffect(() => {
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
      toast.success("Tarefa excluída com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
      toast.error("Erro ao excluir tarefa.");
    }
  };

  const onEdit = async (task) => {
    setActualTask(task);
    toggleModal();
  };

  return (
    <>
      <Header logged={true} onAddTask={toggleModal} />
      <Container>
        <Row>
          <Title>Minhas Tarefas</Title>
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
      {showModal && (
        <TaskEditorModal
          taskData={actualTask}
          onClose={toggleModal}
          onTaskCreated={fetchTasks}
          userId={userId}
        />
      )}
    </>
  );
};

export { Dashboard };
