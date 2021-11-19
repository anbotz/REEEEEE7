import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledPage, StyledClickableImg, EMOJI } from '../../styled-components';
import WeekTableComponent from './components/week-table';

const StyledActionBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const WeekPage = () => {
  const [isBreakfeastActivate, setBreakfeastActivate] = useState(false);
  const [isLunchActivate, setLunchActivate] = useState(true);
  const [isDinnerActivate, setDinnerActivate] = useState(true);

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
          isBreakfeastActivate={isBreakfeastActivate}
          isLunchActivate={isLunchActivate}
          isDinnerActivate={isDinnerActivate}
        />
      ) : (
        <>Rien de prévu </>
      )}
    </StyledPage>
  );
};

export default WeekPage;
