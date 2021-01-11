import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const CalendarSettings = (props) => {
    const { monthHeading, changeViewMode, currentYear, toggleMonthPicker, toggleYearPicker } = props;
    return (
        <Settings>
            <div className="section">
                <h2><span className="link" onClick={() => toggleMonthPicker()}>{monthHeading}</span> ∙ <span className="link" onClick={() => toggleYearPicker()}>{currentYear}</span></h2>
            </div>
            <div className="section">
                <div className="buttonGrid">
                    <FontAwesomeIcon className="icon" icon={faBars} onClick={() => changeViewMode("single")}/>
                    <FontAwesomeIcon className="icon" icon={faBars} onClick={() => changeViewMode("double")}/>
                    <FontAwesomeIcon className="icon" icon={faBars} onClick={() => changeViewMode("all")}/>
                </div>
            </div>
        </Settings>
    )
}

const Settings = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    margin: 0 auto;
    justify-content: space-around;
    .icon {
        cursor: pointer;
    }
    .link {
        cursor: pointer;
    }
    .section {
        width: 100%;
        text-align: left;
    }
    .buttonGrid {
        display: flex;
        width: 200px;
        justify-content: space-between;
        align-items: center;
    }
`;

export default CalendarSettings;
