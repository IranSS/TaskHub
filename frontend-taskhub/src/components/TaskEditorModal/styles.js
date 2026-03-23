import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  position: relative;
  display: flex;
  flex-direction: column;

  h3 {
    color: ${({ theme }) => theme.text};
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  cursor: pointer;

  input {
    cursor: pointer;
    width: 18px;
    height: 18px;
  }
`;
