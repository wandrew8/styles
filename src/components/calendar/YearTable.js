import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const YearTable = (props) => {
    const { setYear } = props;
    const currentYear = moment(moment()).format("Y");
    let years = [];
    let nextten = moment().set('year', currentYear).add(11, 'year').format("Y");
    const getDates = (startDate, stopDate) => {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
          dateArray.push(moment(currentDate).format("YYYY"));
          currentDate = moment(currentDate).add(1, "year");
        }
        return dateArray;
    }
    let twelveyears = getDates(currentYear, nextten);
    twelveyears.map(data => {
        years.push(
          <td
            key={data}
            className="calendar-month"
            onClick={() => {
              setYear(data);
            }}
          >
            <span>{data}</span>
          </td>
        );
      });
      let rows = [];
      let cells = [];
  
      years.forEach((row, i) => {
        if (i % 3 !== 0 || i == 0) {
          cells.push(row);
        } else {
          rows.push(cells);
          cells = [];
          cells.push(row);
        }
      });
      rows.push(cells);
      let yearlist = rows.map((d, i) => {
        return <tr>{d}</tr>;
      });
    return (
        <Calendar>
            <table className="calendar-month">
                <thead>
                <tr>
                    <th colSpan="4">Select a Year</th>
                </tr>
                </thead>
                <tbody>{yearlist}</tbody>
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

export default YearTable;
