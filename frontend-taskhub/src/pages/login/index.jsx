import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MdLock, MdEmail } from "react-icons/md";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { AuthLayout } from "../../components/AuthLayout";

import { api } from "../../services/api";

import { toast } from "react-toastify";

const schema = yup
  .object({
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

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
  });

  const handleLogin = async (data) => {
    try {
      const response = await api.post("/auth/login", {
        email: data.email,
        password: data.password,
      });

      const rawResponse = response.data;
      const token = rawResponse.split(": ")[1];

      if (token) {
        localStorage.setItem("@TaskHub:token", token);
        localStorage.setItem("@TaskHub:userEmail", data.email);

        toast.success("Login realizado com sucesso!");
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
      toast.error("Erro ao logar: Verifique suas credenciais.");
    }
  };

  return (
    <>
      <Header logged={false} />
      <AuthLayout
        title="Login"
        footer={
          <>
            Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
          </>
        }
      >
        <form onSubmit={handleSubmit(handleLogin)}>
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
          <Button title="Entrar" type="submit" />
        </form>
      </AuthLayout>
    </>
  );
};

export { Login };
