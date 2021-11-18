import React, { useState } from "react";
import { StyledPage } from "../../styled-components";
import WeekTableComponent from "./components/week-table";

const WeekPage = () => {
    const [isBreakfeastActivate, setBreakfeastActivate] = useState(false);
    const [isLunchActivate, setLunchActivate] = useState(true);
    const [isDinnerActivate, setDinnerActivate] = useState(true);

    return (
        <StyledPage>
            Page Semaine
            <button onClick={() => { setBreakfeastActivate(!isBreakfeastActivate) }}>Petit-déjeuner</button>
            <button onClick={() => { setLunchActivate(!isLunchActivate) }}>Déjeuner</button>
            <button onClick={() => { setDinnerActivate(!isDinnerActivate) }}>Repas</button>
            <WeekTableComponent isBreakfeastActivate={isBreakfeastActivate} isLunchActivate={isLunchActivate} isDinnerActivate={isDinnerActivate} />
        </StyledPage>
    )
}

export default WeekPage;