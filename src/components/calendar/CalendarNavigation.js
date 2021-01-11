import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const CalendarNavigation = (props) => {
    const { nextMonth, prevMonth } = props;
    return (
        <Navigation>
            <FontAwesomeIcon icon={faArrowLeft} className="icon" onClick={() => prevMonth()}/>
            <button className="icon">Select Month</button>
            <FontAwesomeIcon icon={faArrowRight} className="icon" onClick={() => nextMonth()}/>

        </Navigation>
    )
}

const Navigation = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    .icon {
        margin: 0 1rem;
    }
`;

export default CalendarNavigation;
