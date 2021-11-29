import React from 'react';
import styled from 'styled-components';
import WeekTrComponent from './weekTr';

const StyledTable = styled.table`
  border: solid 1px black;
  border-radius: 5px;
  width: 100%;
  table-layout: fixed;

  & thead {
    & th {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    & th:first-child {
      text-align: left;
    }
  }
`;
const WeekDays = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

const WeekTableComponent = ({ week, recipes, isBreakfeastActivate, isLunchActivate, isDinnerActivate }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Demi-journée</th>
          {WeekDays.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isBreakfeastActivate && <WeekTrComponent line={week.lines[0]} name="Petit-déjeuner" recipes={recipes} />}
        {isLunchActivate && <WeekTrComponent line={week.lines[1]} name="Déjeuner" recipes={recipes} />}
        {isDinnerActivate && <WeekTrComponent line={week.lines[2]} name="Repas" recipes={recipes} />}
      </tbody>
    </StyledTable>
  );
};

export default WeekTableComponent;
