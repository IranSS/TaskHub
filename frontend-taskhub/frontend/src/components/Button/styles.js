import { styled, css } from "styled-components";

export const ButtonContainer = styled.button`
    background-color: black;
    color: white;
    border: none;
    border-radius: 8px;
    position: relative;
    padding: 10px 0;
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 1px;

    width: 100%;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`;