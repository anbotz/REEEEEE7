import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLOR } from '../styled-components';

const StyledLink = styled(NavLink)`
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

const LinkComponent = ({ to, name, src, onClick }) => {
  return (
    <StyledLink onClick={onClick} to={to}>
      <img src={src} width="40" alt={name} />
      <div> {name}</div>
    </StyledLink>
  );
};

export default LinkComponent;
