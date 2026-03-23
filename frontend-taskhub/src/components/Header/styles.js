import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  h1 {
    color: ${({ theme }) => theme.text};
  }

  button {
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }
  }

  .actions {
    display: flex;
    gap: 0.5rem;
  }

  .btn-sair {
    background-color: #e74c3c;
  }
`;

export const UserPicture = styled.img`
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: ${({ theme }) => `2px solid ${theme.accent}`};
`;

export const UserContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const ProfileTrigger = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 120%;
  right: 0;
  width: 200px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  list-style: none;
  margin: 0;
  z-index: 10;

  opacity: ${({ $opened }) => ($opened ? "1" : "0")};
  visibility: ${({ $opened }) => ($opened ? "visible" : "hidden")};
  transform: ${({ $opened }) =>
    $opened ? "translateY(0)" : "translateY(-10px)"};
  transition: all 0.2s ease-in-out;
`;

export const MenuItem = styled.li`
  padding: 12px 20px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  transition: background 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.inputBg};
  }

  &.divider {
    border-top: ${({ theme }) => `1px solid ${theme.text}`};
    margin-top: 5px;
  }
`;
