import { Controller } from "react-hook-form";

import {
  ModalOverlay,
  ModalBox,
  FormContainer,
  CloseButton,
  CheckboxContainer,
} from "./styles";

import { Input } from "../Input";
import { Button } from "../Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IoMdClose } from "react-icons/io";

import { api } from "../../services/api";

import { toast } from "react-toastify";

const schema = yup
  .object({
    title: yup.string().required("O título é obrigatório"),
    description: yup.string().required("A descrição é obrigatória"),
    completed: yup.boolean(),
  })
  .required();

const TaskEditorModal = ({ onClose, onTaskCreated, taskData }) => {
  const isEditing = !!taskData;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      title: taskData?.title || "",
      description: taskData?.description || "",
      completed: taskData?.completed || false,
    },
  });

  const handleCreateTask = async (data) => {
    try {
      if (isEditing) {
        await api.put(`/tasks/update/${taskData.id}`, data);
      } else {
        await api.post("/tasks/create", data);
      }
      toast.success("Tarefa criada com sucesso!");
      onClose();
      onTaskCreated();
    } catch (error) {
      toast.error("Erro na comunicação com o servidor.");
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalBox className="glassy-border" onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <IoMdClose />
        </CloseButton>
        <h3>{isEditing ? "Editar Tarefa" : "Nova Tarefa"}</h3>
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
            multiline
            errorMessage={errors?.description?.message}
          />

          <Controller
            name="completed"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <CheckboxContainer onClick={() => field.onChange(!field.value)}>
                <input
                  type="checkbox"
                  {...field}
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
                <label>Concluída</label>
              </CheckboxContainer>
            )}
          />

          <Button
            type="submit"
            title={isEditing ? "Salvar edição" : "Criar tarefa"}
          />
        </FormContainer>
      </ModalBox>
    </ModalOverlay>
  );
};

export { TaskEditorModal };
