import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFullfilled } from '../../../slices/weekSlice';
import DayTdComponent from './dayTd';

const WeekTrComponent = ({ line, recipes, indexLine }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (line.isActive && !line.isFullfilled) {
      const condition = line.days.reduce((acc, day) => {
        if (!day.isChoose) {
          return acc + 1;
        }
        return acc;
      }, 0);

      if (condition === 0) {
        dispatch(setFullfilled({ indexLine, isFullfilled: true }));
      } else {
        dispatch(setFullfilled({ indexLine, isFullfilled: false }));
      }
    }
  }, [dispatch, indexLine, line]);

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
