import React from "react";
import styled from "styled-components";
import { StyledPage } from "../styled-components";
import AddIngredientPage from "./add-ingredient";
import AddRecipePage from "./add-recipe";

const StyledDoubleColumn = styled.div`
display: flex;
flex-grow: 1;
padding: 20px;
flex-direction: row;
justify-content: flex-start;
align-items: top;`

const AdminPage = () => {
    return (
        <StyledDoubleColumn>
            <AddIngredientPage></AddIngredientPage>
            <AddRecipePage></AddRecipePage>
        </StyledDoubleColumn>
    )
}

export default AdminPage;