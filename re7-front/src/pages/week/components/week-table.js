import React from "react";
import styled from "styled-components";
import DayTdComponent from "./dayTd";

const StyledTable = styled.table`
border: solid 1px black;
width: 100%;
& tr {
    background-color: green;

    & td {
        background-color: red;
    }
}
`
const WeekDays = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']

const WeekTableComponent = ({ isBreakfeastActivate, isLunchActivate, isDinnerActivate }) => {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <th >Demi-journée</th>
                    {WeekDays.map((day) => <th>{day}</th>)}
                </tr>
            </thead>
            <tbody>
                {isBreakfeastActivate &&
                    <tr>
                        <td>Petit-déjeuner</td>
                        {WeekDays.map((day) => <DayTdComponent day={day} />)}
                    </tr>}
                {isLunchActivate &&
                    <tr>
                        <td>Déjeuner</td>
                        {WeekDays.map((day) => <td>{day}</td>)}
                    </tr>}
                {isDinnerActivate &&
                    <tr>
                        <td>Repas</td>
                        {WeekDays.map((day) => <td>{day}</td>)}
                    </tr>}
            </tbody>
        </StyledTable>
    )
}

export default WeekTableComponent;