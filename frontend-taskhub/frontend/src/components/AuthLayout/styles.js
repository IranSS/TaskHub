import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f9;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

export const LoginContainer = styled.div`
    width: 90%;
    max-width: 350px;
    background-color: #FFFFFF;
    border-radius: 12px;
    padding: 40px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
`;

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: #333;
    margin-bottom: 24px;
    text-align: center;
`;