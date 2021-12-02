import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getAllRecipes } from '../../services/recipesRoute';
import { StyledPage, StyledClickableImg, EMOJI } from '../../styled-components';
import WeekTableComponent from './components/week-table';
import { set } from '../../slices/recipesSlice';
import { reset, setActive } from '../../slices/weekSlice';

const StyledActionBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const WeekPage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const week = useSelector((state) => state.week);
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    getAllRecipes().then((res) => dispatch(set(res)));
    dispatch(reset());
  }, [dispatch]);

  useEffect(() => {
    const condition = week.lines.reduce((acc, line) => {
      if (line.isActive && !line.isFullfilled) {
        return acc + 1;
      }
      return acc;
    }, 0);

    if (condition === 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [week.lines]);

  return (
    <StyledPage>
      <StyledActionBar>
        <StyledClickableImg
          onClick={() => {
            dispatch(setActive({ indexLine: 0 }));
          }}
          src={EMOJI.BREAKFEAST}
          alt="breakfeast"
          width="50"
          isGrey={!week.lines[0].isActive}
        />
        <StyledClickableImg
          onClick={() => {
            dispatch(setActive({ indexLine: 1 }));
          }}
          src={EMOJI.LUNCH}
          alt="lunch"
          width="50"
          isGrey={!week.lines[1].isActive}
        />
        <StyledClickableImg
          onClick={() => {
            dispatch(setActive({ indexLine: 2 }));
          }}
          src={EMOJI.DINNER}
          alt="dinner"
          width="50"
          isGrey={!week.lines[2].isActive}
        />
      </StyledActionBar>

      {week.lines[0].isActive || week.lines[1].isActive || week.lines[2].isActive ? (
        <WeekTableComponent week={week} recipes={recipes} />
      ) : (
        <>Rien à prévoir ? </>
      )}
      {(week.lines[0].isActive || week.lines[1].isActive || week.lines[2].isActive) && (
        <button disabled={isDisabled}>Prêt! </button>
      )}
    </StyledPage>
  );
};

export default WeekPage;
