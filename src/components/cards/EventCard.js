import React from 'react';
import styled from 'styled-components';

const EventCard = (props) => {
    const { event, day, month, location, category } = props;
    return (
        <Card>
            <div className="content">
                <div className="date">
                    <h2>{day}</h2>
                    <h3>{month}</h3>
                </div>
                <div className="body">
                    <p className="event">{event}</p>
                    <p className="location">{location}</p>
                </div>
            </div>
        </Card>
    )
}

const Card = styled.div`
    width: 100%;
    max-width: 500px;
    height: 100px;
    font-family: 'Poppins', sans-serif;
    .content {
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        .date {
            width: 150px;
            height: 100px;
            background-color: blue;
            color: #fff;
            padding: 1rem;
            h2 {
                font-size: 2.5rem;
                font-weight: 200;
                text-align: center;
                letter-spacing: 0.25rem;
                margin-left: 0.5rem;
            }
            h3 {
                text-align: center;
                font-size: 1.4rem;
                text-transform: uppercase;
            }

        }
        .body {
            width: 350px;
            height: 100px;
            padding: 1rem;
            background-color: rgba(255,255,255,0.2);
            backdrop-filter: blur(5px);
            justify-content: center;
            display: flex;
            flex-direction: column;
            .event {
                font-size: 1.5rem;
                font-weight: 300;
                line-height: 2rem;
                margin-bottom: 0.2rem;
            }
            .location {
                font-weight: 200;
            }
        }
    }
`;

export default EventCard;
