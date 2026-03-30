<h1 align="center">TaskHub</h1>

> Um gerenciador de tarefas minimalista para quem não quer perder tempo com menus complexos.

## 📖 Visão Geral

Este projeto foi desenvolvido como Atividade Parcial da disciplina de **Desenvolvimento de Software em Nuvem** do curso de Análise e desenvolvimento de sistemas (Unifor - EAD). O objetivo principal é projetar, implementar e implantar uma aplicação web escalável baseada em nuvem, utilizando arquitetura em camadas, serviços gerenciados, containers e práticas de DevOps.


---

## 👥 A Equipe

A equipe é composta por 6 integrantes, distribuídos nos seguintes papéis técnicos:

| Nome do Aluno | Papel Técnico |  
| :--- | :--- | 
| **Dante Vasconcelos Diniz<br>Francisco Iranildo de Sousa Avelino** | Arquiteto(a) de Software em Nuvem
| **Francisco Iranildo de Sousa Avelino** | Desenvolvedor(a) Back-end
| **Arimateia Barbosa da Silveira** | Desenvolvedor(a) Front-end
| **Jorgirerison Leite Peixoto** | Engenheiro(a) DevOps 
| **Keberson Moura Carvalho** | Responsável por Qualidade e Testes 
| **Danrley Pereira Dantas** | Documentação e Integração 
---

## 🛠️ Arquitetura e Tecnologias

O projeto foi desenvolvido utilizando uma arquitetura cliente-servidor, separando claramente o front-end, o back-end e a persistência de dados.

- **Front-end:** `React` - Hospedado em `Vercel`.
- **Back-end:** API RESTful desenvolvida em `Java/Spring Boot` - Hospedada em `Render`.
- **Banco de Dados:** `Supabase`.
- **CI/CD e DevOps:** GitHub Actions para automação de build, testes e deploy automático.

---

## 🔗 Links Importantes

-  **Link do projeto frontend Vercel:** [Clique aqui](https://task-hub-chi-seven.vercel.app/)
-  **Link do projeto backend Render:** [Clique aqui](https://taskhub-clam.onrender.com/)
-  **Link do projeto backend Swagger Render:** [Clique aqui](https://taskhub-clam.onrender.com/swagger-ui/index.html#/)

---

## ⚙️ Pré-requisitos

Para rodar este projeto localmente, você precisará ter instalado em sua máquina:

- [Docker](https://www.docker.com/) e Docker Compose

---

## 🚀 Como Executar o Projeto Localmente

**1. Clone o repositório:**
```bash
git clone https://github.com/IranSS/TaskHub.git
cd TaskHub
```
**2. Configurar Variáveis de Ambiente:**

Ambos os serviços precisam de um arquivo .env para funcionar corretamente.

Na pasta /backend-taskhub, duplique o arquivo .env.example e renomeie para .env.

Na pasta /frontend-taskhub, duplique o arquivo .env.example e renomeie para .env.

Nota: Certifique-se de que a variável de URL da API no frontend esteja apontando para http://localhost:8080 (ou a porta definida no seu backend).

**3. Subir os Containers:**

Na raiz do projeto (onde o arquivo docker-compose.yml está localizado), execute:
```bash
docker-compose up --build
```
Após o processo de build, você poderá acessar:

Frontend: http://localhost:5173

Backend (API): http://localhost:8080

---

## 📺 Demonstração em Vídeo

[![Demonstração em Vídeo](https://img.youtube.com/vi/M2hXj6KMCI0/maxresdefault.jpg)](https://www.youtube.com/watch?v=M2hXj6KMCI0)
---
#### Copyright © 2026 / [TaskHub Team](https://github.com/IranSS/)

A permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste arquivo, sem restrição nos direitos de usar, copiar, modificar e mesclar.
