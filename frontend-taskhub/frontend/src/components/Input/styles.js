import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    border: none;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.1);

    &:focus-within {
        background-color: rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        padding: 15px 0;
    }
`;

export const IconContainer = styled.div`
    * {
        color: black;
    }

    margin-left: 10px;
    margin-right: 10px;
`;

export const ErrorText = styled.span`
    color: red;
    font-size: 12px;
`;

export const InputText = styled.input`
    background: transparent;
    color: black;
    border: none;
    width: 100%;
    font-size: 100%;
    outline: 0;
`;