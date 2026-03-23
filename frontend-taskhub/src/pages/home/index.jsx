import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Container, Hero, FeatureList } from "./styles";
import { FaCheckCircle, FaFilter, FaRocket } from "react-icons/fa";

import { MainContainer } from "../../styles/global";

const Home = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Header logged={false} />
      <Container>
        <Hero>
          <h1>TaskHub</h1>
          <p>
            Um gerenciador de tarefas minimalista para quem não quer perder
            tempo com menus complexos.
          </p>

          <Button title="Comece Agora" onClick={() => navigate("/signup")} />
        </Hero>

        <FeatureList>
          <div className="item">
            <FaRocket />
            <span>Rápido e Leve (Vite + React)</span>
          </div>
          <div className="item">
            <FaFilter />
            <span>Filtros Inteligentes</span>
          </div>
          <div className="item">
            <FaCheckCircle />
            <span>Segurança Spring Security</span>
          </div>
        </FeatureList>
      </Container>
    </MainContainer>
  );
};

export { Home };
