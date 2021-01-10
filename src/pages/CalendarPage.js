import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import moment from 'moment';
import styled from 'styled-components';

const CalendarPage = () => {
    const weekdayShort = moment.weekdaysShort();
    const getDay = moment(moment()).startOf("month").format("d");
    const [ firstDay, setFirstDay ] = useState(getDay);
    const [ currentDay, setCurrentDay ] = useState(moment(moment()).format("D"));
    let blanks = [];
    for (let i = 0; i < firstDay; i++) {
        blanks.push(<td className="calendar-day empty">{""}</td>)
    }
    let daysInMonth = [];
    for (let d = 1; d <= moment(moment()).daysInMonth(); d++) {
        let today = d == currentDay ? "today" : ""
        daysInMonth.push(<td className={`calendar-day ${today}`} key={d}>{d}</td>)
    }
    const totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row)
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            rows.push(cells);
        }
    })
    console.log(daysInMonth)
    return (
        <PageContainer background="green">
            <h1>Calendar</h1>
            <Calendar>
            <table>
                <tbody>
                <tr className="daysWeek-header">
                    {weekdayShort.map(day => {
                        return (
                            <th className="days">{day}</th>
                        )
                    })}
                </tr>
                    {
                        rows.map((d, i) => {
                            return (
                                <tr>{d}</tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </Calendar>
        </PageContainer>
    )
}

const Calendar = styled.div`
    width: 500px;
    height: 500px;
    margin: 0 auto;
    background-color: white;
    table {
        width: 100%;
        table-layout: fixed ;

    }
    .calendar-day {
        color: darkgray;
        text-align: center;
        height: 25px;
        width: 25px;
    }
    .today {
        color: white;
        background-color: darkgray;
        height: 25px;
        width: 25px;
    }
    .daysWeek-header {
        width: 100%;
        background-color: darkgray;

    }
    
`;

export default CalendarPage;
