import React from 'react';
import DayTdComponent from './dayTd';

const WeekTrComponent = ({ line, recipes, indexLine }) => {
  return (
    <tr>
      <td>{line.name}</td>
      {line.days.map((day, index) => (
        <DayTdComponent key={line.name + index} day={day} recipes={recipes} cellCouple={{ indexLine, index }} />
      ))}
    </tr>
  );
};

export default WeekTrComponent;
