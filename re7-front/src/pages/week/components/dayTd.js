import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addFilledMeals, removeFilledMeals } from '../../../slices/weekSlice';
import { COLOR } from '../../../styled-components';
import { useDetectOutsideClick } from '../../../utils/useDetectOutsideClick';

const StyledMenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMenu = styled.div`
  background: #f9eae1;
  border-radius: 5px;
  position: absolute;
  top: 5px;
  left: 0;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-5px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 2;
  ${(props) =>
    props.isActive
      ? ` opacity: 1;
  visibility: visible;
  transform: translateY(0);`
      : ''}
`;

const StyledRecipeChoice = styled.div`
  padding: 1px 5px;
  border-radius: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    background-color: #${COLOR.TUSCAN};
    cursor: pointer;
    color: white;
  }
`;

const StyledChoice = styled.div`
  padding: 3px 5px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${(props) => (props.isChoose ? ` #${COLOR.TUSCAN}` : '#E7D9DA')};
  ${(props) => (props.isChoose ? ` color: white;` : '')};
  :hover {
    background-color: #${COLOR.GAMBODE};
    cursor: pointer;
    color: white;
  }
`;

const StyledTd = styled.td`
  text-align: center;
  min-width: 100px;
`;

const DayTdComponent = ({ day, recipes, cellIndex }) => {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [choice, setChoice] = useState(day);

  return (
    <StyledTd onClick={() => setIsActive(!isActive)}>
      <StyledChoice isChoose={choice && choice !== day ? true : false}>{choice}</StyledChoice>
      <div className="container">
        <StyledMenuContainer>
          <StyledMenu ref={dropdownRef} isActive={isActive}>
            <StyledRecipeChoice
              onClick={() => {
                setChoice(day);
                dispatch(removeFilledMeals());
              }}>
              {day}
            </StyledRecipeChoice>

            {recipes.map((recipe, index) => (
              <StyledRecipeChoice
                key={index}
                onClick={() => {
                  setChoice(recipe.name);
                  dispatch(addFilledMeals());
                }}>
                {recipe.name}
              </StyledRecipeChoice>
            ))}
          </StyledMenu>
        </StyledMenuContainer>
      </div>
    </StyledTd>
  );
};

export default DayTdComponent;
