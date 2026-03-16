import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MdLock, MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { AuthLayout } from "../../components/AuthLayout";

import { api } from "../../services/api";

import { toast } from "react-toastify";

const schema = yup
  .object({
    name: yup
      .string()
      .min(2, "O nome deve conter no mínimo 2 caracteres")
      .required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve conter no mínimo 8 caracteres")
      .required("A senha é obrigatória"),
  })
  .required();

const SignUp = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    try {
      await api.post("/users/create", data);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao criar conta:", error);
      toast.error("Erro ao criar conta. Por favor, tente novamente.");
    }
  };

  return (
    <>
      <Header logged={false} />
      <AuthLayout
        title="Cadastro"
        footer={
          <>
            Já tem uma conta? <Link to="/">Faça login</Link>
          </>
        }
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            placeholder="Nome"
            leftIcon={<FaUser />}
            control={control}
            errorMessage={errors?.name?.message}
          />
          <Input
            name="email"
            placeholder="Email"
            leftIcon={<MdEmail />}
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            leftIcon={<MdLock />}
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Button title="Criar Conta" type="submit" />
        </form>
      </AuthLayout>
    </>
  );
};

export { SignUp };
