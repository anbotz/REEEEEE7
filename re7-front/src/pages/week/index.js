import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getAllRecipes } from '../../services/recipesRoute';
import { StyledPage, StyledClickableImg, EMOJI } from '../../styled-components';
import WeekTableComponent from './components/week-table';
import { set } from '../../slices/recipesSlice';

const StyledActionBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const WeekPage = () => {
  const dispatch = useDispatch();

  const [isBreakfeastActivate, setBreakfeastActivate] = useState(false);
  const [isLunchActivate, setLunchActivate] = useState(true);
  const [isDinnerActivate, setDinnerActivate] = useState(true);
  const recipes = useSelector((state) => state.recipes);
  const week = useSelector((state) => state.week);

  useEffect(() => {
    getAllRecipes().then((res) => dispatch(set(res)));
  }, [dispatch]);

  return (
    <StyledPage>
      <StyledActionBar>
        <StyledClickableImg
          onClick={() => {
            setBreakfeastActivate(!isBreakfeastActivate);
          }}
          src={EMOJI.BREAKFEAST}
          alt="breakfeast"
          width="50"
          isGrey={!isBreakfeastActivate}
        />
        <StyledClickableImg
          onClick={() => {
            setLunchActivate(!isLunchActivate);
          }}
          src={EMOJI.LUNCH}
          alt="lunch"
          width="50"
          isGrey={!isLunchActivate}
        />
        <StyledClickableImg
          onClick={() => {
            setDinnerActivate(!isDinnerActivate);
          }}
          src={EMOJI.DINNER}
          alt="dinner"
          width="50"
          isGrey={!isDinnerActivate}
        />
      </StyledActionBar>

      {isDinnerActivate || isBreakfeastActivate || isLunchActivate ? (
        <WeekTableComponent
          week={week}
          recipes={recipes}
          isBreakfeastActivate={isBreakfeastActivate}
          isLunchActivate={isLunchActivate}
          isDinnerActivate={isDinnerActivate}
        />
      ) : (
        <>Rien à prévoir ? </>
      )}
      <button disabled={true}>Prêt! </button>
    </StyledPage>
  );
};

export default WeekPage;
