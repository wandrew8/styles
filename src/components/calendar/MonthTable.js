import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const MonthTable = (props) => {
    const { allMonths, setMonth } = props;
    let months = [];
    allMonths.map(data => {
        const monthNo = moment().month(data).format("M");
        months.push(
            <td onClick={() => setMonth(monthNo)}><span>{data}</span></td>
        )
    })
    let rows = [];
    let cells = [];
    months.forEach((row, i) => {
        if (i % 3 !== 0 || i == 0) { // except zero index 
            cells.push(row); 
        } else { 
            rows.push(cells); 
            cells = [];
            cells.push(row); 
        } 
    })
    rows.push(cells);
    let monthlist = rows.map((d, i) => {
        return <tr>{d}</tr>
    })
    return (
        <Calendar>
            <table className="calendar-month">
                <thead>
                <tr>
                    <th colSpan="4">Select a Month</th>
                </tr>
                </thead>
                <tbody>{monthlist}</tbody>
            </table>
        </Calendar>
    )
}

const Calendar = styled.div`
    width: 200px;
    margin: 0 auto;
    table {
        width: 100%;
    }
    .calendar-month span{
        padding: 0.25rem;
        transition: 100ms ease-in-out;
        &:hover {
            color: white;
            background-color: darkgray;
            cursor: pointer;
            border-radius: 5px;
        }
    }
`;
export default MonthTable;
