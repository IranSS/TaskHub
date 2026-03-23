import { Header } from "../../components/Header";
import { TaskItem } from "../../components/TaskItem";
import { TaskEditorModal } from "../../components/TaskEditorModal";
import {
  Container,
  Row,
  TasksContainer,
  Title,
  FloatingButton,
} from "./styles";

import { FaPlus } from "react-icons/fa";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const [showingModal, setShowingModal] = useState(false);
  const [actualTask, setActualTask] = useState(null);

  const showModal = () => {
    setShowingModal(true);
  };

  const hideModal = () => {
    setShowingModal(false);
    setActualTask(null);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("@TaskHub:token");
    navigate("/");
  };

  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks/getByUser");
      setTasks(response.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      toast.error("Não foi possível carregar suas tarefas.");
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
    showModal();
  };

  return (
    <>
      <Header logged={true} onAddTask={showModal} onLogout={handleLogout} />
      <Container>
        <Row>
          <Title>Minhas Tarefas</Title>
          <select
          className="glassy"
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
      {showingModal && (
        <TaskEditorModal
          taskData={actualTask}
          onClose={hideModal}
          onTaskCreated={fetchTasks}
        />
      )}
      <FloatingButton className="glassy-border" onClick={showModal}>
        <FaPlus />
      </FloatingButton>
    </>
  );
};

export { Dashboard };
