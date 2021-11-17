import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/home';
import AddRecipePage from "./pages/add-recipe";
import LoginPage from "./pages/login";
import WipPage from "./pages/wip";
import RecipesPage from "./pages/recipes";

const NavComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Rockbubble";
  margin: 10 10px;
`;

const StyledLink = styled(Link)`
  padding: 5px 10px;
  text-decoration: none;
  color: #333;
 
:hover {
  background-color: rgb(112, 4, 89);
  color: white;
}
`;

const StyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const App = () => {
  return (
    <Router>
      <StyledComponent>
        <NavComponent>

          <StyledLink to="/">RE7</StyledLink>
          <StyledLink to="/week">Semaine</StyledLink>
          <StyledLink to="/recipes">Recettes</StyledLink>
          <StyledLink to="/add-recipe">Ajouter une recette</StyledLink>
          <StyledLink to="/add-ingredient">Ajouter un ingrédient</StyledLink>
          <StyledLink to="/signup">Enregistrement</StyledLink>
          <StyledLink to="/login">Connexion</StyledLink>
          <StyledLink to="/logout">Déconnexion</StyledLink>
        </NavComponent>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/add-recipe" element={<AddRecipePage />} />
          <Route path="/login" element={<LoginPage />} />


          <Route path="/week" element={<WipPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/add-ingredient" element={<WipPage />} />
          <Route path="/signup" element={<WipPage />} />
          <Route path="/logout" element={<WipPage />} />

        </Routes>
      </StyledComponent>
    </Router>
  );
};

export default App;