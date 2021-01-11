import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import moment from 'moment';
import styled from 'styled-components';
import MonthTable from '../components/calendar/MonthTable';
import YearTable from '../components/calendar/YearTable'
import CalendarSettings from '../components/calendar/CalendarSettings';
import CalendarNavigation from '../components/calendar/CalendarNavigation';

const CalendarPage = () => {
    const weekdayShort = moment.weekdaysShort();
    const [ dateObject, setDateObject ] = useState(moment());
    const [ allMonths, setAllMonths ] = useState(moment.monthsShort());
    const [ showYearPicker, setShowYearPicker ] = useState(false);
    const [ showMonthPicker, setShowMonthPicker ] = useState(false);
    const currentMonth = parseInt(dateObject.format("M"));
    const firstDay = moment(dateObject).startOf("month").format("d");
    const [ currentYear, setCurrentYear ] = useState(dateObject.format("Y"))
    const currentDay = dateObject.format("D");
    const [ viewMode, setViewMode ] = useState("single");
    let blanks = [];
    for (let i = 0; i < firstDay; i++) {
        blanks.push(<td className="calendar-day empty">{""}</td>)
    }
    let daysInMonth = [];
    for (let d = 1; d <= dateObject.daysInMonth(); d++) {
        let today = d == currentDay && currentMonth == moment().format("M") ? "today" : ""
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
    const changeViewMode = (mode) => {
        setViewMode(mode);
    }
    const setYear = (year) => setCurrentYear(year);
    const getMonthHeading = () => {
        if(viewMode === "single") {
            return moment().set('month', parseInt(currentMonth - 1)).format("MMMM");
        } else if(viewMode === "double") {
            const thisMonth = moment().set('month', parseInt(currentMonth - 1)).format("MMMM");
            const nextMonth = moment().set('month', parseInt(currentMonth === 12 ? 0 : currentMonth)).format("MMMM");
            return `${thisMonth} & ${nextMonth}`;
        } else if (viewMode === "all") {
            return "All Months"
        }
    }
    const toggleYearPicker = () => { 
        setShowMonthPicker(false);
        setShowYearPicker(!showYearPicker);
    };
    const toggleMonthPicker = () => {
        setShowYearPicker(false);
        setShowMonthPicker(!showMonthPicker);
    };
    const setCurrentMonth = month => {
        let date = Object.assign({}, dateObject);
        date = moment(dateObject).set("month", month - 1); // change month value
        setDateObject(date);
      };
    console.log(dateObject)
    const nextMonth = () => setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    const prevMonth = () => setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    return (
        <PageContainer background="green">
            <h1>Calendar</h1>
            <CalendarSettings toggleMonthPicker={toggleMonthPicker} toggleYearPicker={toggleYearPicker} currentYear={currentYear} changeViewMode={changeViewMode} monthHeading={getMonthHeading()} />
            <CalendarNavigation currentMonth={currentMonth} nextMonth={nextMonth} prevMonth={prevMonth}/>
            { showYearPicker && <YearTable currentYear={currentYear} setYear={setYear} /> }
            { showMonthPicker && <MonthTable allMonths={allMonths} setMonth={setCurrentMonth} /> }

            { viewMode === "single" && <Calendar>
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
            }
            {   viewMode === 'double' && <DoubleCalendar>
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
            </DoubleCalendar>

            }
        </PageContainer>
    )
}

const Calendar = styled.div`
    width: 500px;
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

const DoubleCalendar = styled.div`
    width: 500px;
    height: 500px;
    margin: 0 auto;
    background-color: white;
    table {
        width: 50%;
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
