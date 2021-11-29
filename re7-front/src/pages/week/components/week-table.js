import React from 'react';
import styled from 'styled-components';
import WeekTrComponent from './weekTr';

const StyledTable = styled.table`
  border: solid 1px black;
  border-radius: 5px;
  width: 100%;
  table-layout: fixed;

  & tbody {
    & tr {
      & td:first-child {
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  & thead {
    & th {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100px;
    }
    & th:first-child {
      text-align: left;
    }
  }
`;
const WEEKDAYS = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

const WeekTableComponent = ({ week, recipes }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Demi-journée</th>
          {WEEKDAYS.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {week.lines.map((line, index) => {
          return line.isActive ? (
            <WeekTrComponent key={index} line={line} indexLine={index} name={line.name} recipes={recipes} />
          ) : (
            <tr key={index} />
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default WeekTableComponent;
