import React, { useEffect } from "react";
import styled from "styled-components";
import cookie from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { set, reset } from "./slices/userSlice";
import { decodeToken } from "react-jwt";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/home';
import AddRecipePage from "./pages/add-recipe";
import LoginPage from "./pages/login";
import WeekPage from "./pages/week/index";
import RecipesPage from "./pages/recipes";
import SignupPage from "./pages/signup";
import AddIngredientPage from "./pages/add-ingredient";

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
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = cookie.get("token");
    dispatch(set(decodeToken(token)));
  }, [dispatch]);

  return (
    <Router>
      <StyledComponent>
        <NavComponent>

          <StyledLink to="/">RE7</StyledLink>
          <StyledLink to="/week">Semaine</StyledLink>
          <StyledLink to="/recipes">Recettes</StyledLink>
          <StyledLink to="/add-recipe">Ajouter une recette</StyledLink>
          {user?.admin && <StyledLink to="/add-ingredient">Ajouter un ingrédient</StyledLink>}
          {!user?.userId && <StyledLink to="/signup">Enregistrement</StyledLink>}
          {!user?.userId && <StyledLink to="/login">Connexion</StyledLink>}
          {user?.userId && <StyledLink onClick={() => {
            cookie.remove("token");
            dispatch(reset());
          }} to="/">Déconnexion</StyledLink>}
        </NavComponent>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/add-recipe" element={<AddRecipePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/week" element={<WeekPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/add-ingredient" element={<AddIngredientPage />} />
          <Route path="/signup" element={<SignupPage />} />

        </Routes>
      </StyledComponent>
    </Router>
  );
};

export default App;