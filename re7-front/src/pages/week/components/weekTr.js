import React from 'react';
import DayTdComponent from './dayTd';

const WeekTrComponent = ({ line, recipes }) => {
  return (
    <tr>
      <td>{line.name}</td>
      {line.days.map((day, index) => (
        <DayTdComponent key={line.name + day} day={day} recipes={recipes} cellIndex={index} />
      ))}
    </tr>
  );
};

export default WeekTrComponent;
