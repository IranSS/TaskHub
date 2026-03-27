import { useRef, useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import {
  Container,
  UserPicture,
  UserContainer,
  ProfileTrigger,
  DropdownMenu,
  MenuItem,
} from "./styles";

import { FaPlus } from "react-icons/fa";

import { ThemeToggler } from "../ThemeToggler";
import { Button } from "../Button";

const Header = ({ logged, onAddTask, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Container className="glassy">
      <h1 onClick={() => navigate("/")}>TaskHub</h1>
      <div className="actions">
        {pathname === "/login" && (
          <Button
            className="glassy-border"
            title="Criar Conta"
            onClick={() => navigate("/signup")}
          />
        )}
        {(pathname === "/signup") | (pathname === "/") ? (
          <Button secondary title="Entrar" onClick={() => navigate("/login")} />
        ) : null}
        {logged && (
          <Button
            className="no-mobile glassy-border"
            icon={<FaPlus size={16} />}
            title="Nova Tarefa"
            onClick={onAddTask}
          />
        )}

        <ThemeToggler />

        {logged && (
          <UserContainer ref={menuRef}>
            <ProfileTrigger onClick={() => setIsOpen(!isOpen)} $opened={isOpen}>
              <UserPicture src="https://ui-avatars.com/api/?name=TH&rounded=true" />
            </ProfileTrigger>

            <DropdownMenu className="glassy-border" $opened={isOpen}>
              <MenuItem onClick={onLogout}>Sair</MenuItem>
            </DropdownMenu>
          </UserContainer>
        )}
      </div>
    </Container>
  );
};

export { Header };
