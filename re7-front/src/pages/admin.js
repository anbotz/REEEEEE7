import React from 'react';
import styled from 'styled-components';
import AddIngredientPage from './add-ingredient';
import AddRecipePage from './add-recipe';

const StyledDoubleColumn = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 20px;

  justify-content: flex-start;
  align-items: top;

  flex-direction: column;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

const AdminPage = () => {
  return (
    <StyledDoubleColumn>
      <AddIngredientPage />
      <AddRecipePage />
    </StyledDoubleColumn>
  );
};

export default AdminPage;
