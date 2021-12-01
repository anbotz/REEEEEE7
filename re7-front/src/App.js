import React, { useEffect } from 'react';
import styled from 'styled-components';
import cookie from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { set, reset } from './slices/userSlice';
import { decodeToken } from 'react-jwt';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import WeekPage from './pages/week/index';
import RecipesPage from './pages/recipes';
import SignupPage from './pages/signup';
import AdminPage from './pages/admin';
import { EMOJI, COLOR } from './styled-components';
import UpdateRecipePage from './pages/update-recipe';
import RecipePage from './pages/recipe';
import LinkComponent from './components/link-component';

const NavComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-family: 'Rockbubble';
  margin: 10 10px;
`;

const StyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: 'Made-Evolve';
`;

const StyledNonLink = styled.a`
  padding: 5px 20px;
  text-decoration: none;
  color: #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0 0 10px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & div {
    display: none;
  }
  :hover {
    background-color: #${COLOR.GAMBODE};
    color: white;
    & div {
      display: block;
    }
  }
`;

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = cookie.get('token');
    dispatch(set(decodeToken(token)));
  }, [dispatch]);

  return (
    <Router>
      <StyledComponent>
        <NavComponent>
          {user?.userId && <LinkComponent to="/week" src={EMOJI.CALENDAR} name="Semaine" />}
          <LinkComponent to="/recipes" src={EMOJI.RECIPE} name="Recettes" />
          {user?.isAdmin && <LinkComponent to="/admin" src={EMOJI.COMPUTER} name="Admin" />}
          {!user?.userId && <LinkComponent to="/signup" src={EMOJI.MEMO} name="Enregistrement" />}
          {!user?.userId && <LinkComponent to="/login" src={EMOJI.WAVING} name="Connexion" />}
          {user?.userId && (
            <StyledNonLink
              onClick={() => {
                cookie.remove('token');
                dispatch(reset());
              }}
              href="/">
              <img src={EMOJI.DOOR} width="40" alt="Déconnexion" />
              <div> Déconnexion</div>
            </StyledNonLink>
          )}
        </NavComponent>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/week" element={<WeekPage />} />
          <Route path="/recipes" exact element={<RecipesPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/update-recipe/:id" element={<UpdateRecipePage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </StyledComponent>
    </Router>
  );
};

export default App;
