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
import AdminPage from "./pages/admin";
import { EMOJI, COLOR } from "./styled-components";

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
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0 5px 5px 0px;
 
:hover {
  background-color:#${COLOR.GAMBODE};
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
          {user?.userId && <StyledLink to="/week">
            <img src={EMOJI.CALENDAR} width='40' />Semaine</StyledLink>}
          <StyledLink to="/recipes"> <img src={EMOJI.RECIPE} width='40' />Recettes</StyledLink>
          {user?.admin && <StyledLink to="/admin"><img src={EMOJI.COMPUTER} width='40' />Admin</StyledLink>}

          {!user?.userId && <StyledLink to="/signup">Enregistrement</StyledLink>}
          {!user?.userId && <StyledLink to="/login"> <img src={EMOJI.WAVING} width='40' />Connexion</StyledLink>}
          {user?.userId && <StyledLink onClick={() => {
            cookie.remove("token");
            dispatch(reset());
          }} to="/"> <img src={EMOJI.DOOR} width='40' />Déconnexion</StyledLink>}
        </NavComponent>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/week" element={<WeekPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/signup" element={<SignupPage />} />

        </Routes>
      </StyledComponent>
    </Router>
  );
};

export default App;