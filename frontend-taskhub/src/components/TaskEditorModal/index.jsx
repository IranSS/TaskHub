import { ModalOverlay, ModalBox, FormContainer, CloseButton } from "./styles";

import { Input } from "../Input";
import { Button } from "../Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";

import { toast } from "react-toastify";

const schema = yup
  .object({
    title: yup.string().required("O título é obrigatório"),
    description: yup.string().required("A descrição é obrigatória"),
  })
  .required();

const TaskEditorModal = ({ onClose, onTaskCreated, userId }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const handleCreateTask = async (data) => {
    try {
      await api.post("/tasks/create", {
        title: data.title,
        description: data.description,
        completed: false,
        userId,
      });
      onClose();
      onTaskCreated();
      toast.success("Tarefa criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
      toast.error("Erro ao criar tarefa.");
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h3>Nova Tarefa</h3>
        <FormContainer onSubmit={handleSubmit(handleCreateTask)}>
          <Input
            control={control}
            name="title"
            placeholder="Título"
            errorMessage={errors?.title?.message}
          />
          <Input
            control={control}
            name="description"
            placeholder="Descrição"
            errorMessage={errors?.description?.message}
          />
          <Button type="submit" title="Criar Tarefa" />
        </FormContainer>
      </ModalBox>
    </ModalOverlay>
  );
};

export { TaskEditorModal };
