import styled from 'styled-components';

export const EMOJI = {
  BANANA: 'https://openmoji.org/data/color/svg/1F34C.svg',
  DISHWARE: 'https://openmoji.org/data/color/svg/1F37D.svg',
  CALENDAR: 'https://openmoji.org/data/color/svg/1F4C5.svg',
  RECIPE: 'https://openmoji.org/data/color/svg/1F4DC.svg',
  DOOR: 'https://openmoji.org/data/color/svg/1F6AA.svg',
  WAVING: 'https://openmoji.org/data/color/svg/1F44B.svg',
  COMPUTER: 'https://openmoji.org/data/color/svg/1F5A5.svg',
  DELETE: 'https://openmoji.org/data/color/svg/274C.svg',
  UPDATE: 'https://openmoji.org/data/color/svg/270F.svg',
  MEMO: 'https://openmoji.org/data/color/svg/1F4DD.svg',
  BREAKFEAST: 'https://openmoji.org/data/color/svg/1F9C7.svg',
  LUNCH: 'https://openmoji.org/data/color/svg/1F957.svg',
  DINNER: 'https://openmoji.org/data/color/svg/1F372.svg',
};

export const COLOR = {
  LINEN: 'F9EAE1',
  TUSCAN: '7D4F50',
  GAMBODE: 'E59500',
  DARKSEA: 'D8E9DB',
  ARTICHOKE: '7B886B',
};

export const StyledPage = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;

  input {
    margin: 5px 0 10px 0;
    border-radius: 5px;
    padding: 10px;
    outline: 0;
    border: 1.5px solid black;
    width: 100%;
  }
  textarea {
    margin: 5px 0 10px 0;
    border-radius: 5px;
    padding: 10px;
    outline: 0;
    border: 1.5px solid black;
    width: 100%;
  }
  select {
    margin: 5px 0 10px 0;
    border-radius: 5px;
    padding: 10px;
    outline: 0;
    border: 1.5px solid black;
    width: 100%;
    cursor: pointer;
  }
  button {
    margin: 5px 0 10px 0;
    border-radius: 5px;
    padding: 10px;
    outline: 0;
    border: 1.5px solid black;
    background-color: #${COLOR.DARKSEA};
    :hover {
      background-color: #${COLOR.ARTICHOKE};
      cursor: pointer;
      color: white;
    }
  }
`;

export const StyledTitle = styled.div`
  font-size: 1.2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: 'Rockbubble';
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledClickableImg = styled.img`
  cursor: pointer;
  ${(props) =>
    props.isGrey
      ? `
      filter: gray;
      -webkit-filter: grayscale(1); 
      filter: grayscale(1);
  `
      : ''}
`;
