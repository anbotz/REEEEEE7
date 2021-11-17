import styled from "styled-components";

export const StyledPage = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 1;

    input {
        margin: 5px 0 10px 0;
        border-radius: 5px;
        padding: 10px;
        outline: 0;
        border: 1.5px solid black;
        width: 100%;

    }
    textarea {
        margin: 5px 0 10px 0;
        border-radius: 5px;
        padding: 10px;
        outline: 0;
        border: 1.5px solid black;
        width: 100%;

    }
    button {
        margin: 5px 0 10px 0;
        border-radius: 5px;
        padding: 10px;
        outline: 0;
        border: 1.5px solid black;
    }
`;