import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const EventCard = (props) => {
    const { event, day, month, location, category, index } = props;
    return (
        <Draggable draggableId={event} index={index}>
            {(provided, snapshot) => {   
                return (
                    <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
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
            }}
        </Draggable>
    )
}

const Card = styled.div`
    width: 100%;
    max-width: 500px;
    height: 100px;
    font-family: 'Poppins', sans-serif;
    transition: 100ms ease-in-out;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    margin-bottom: 10px;
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        transition: 100ms ease-in-out;
        .date {
            border-radius: 10px 0px 0px 10px;
            width: 150px;
            height: 100px;
            transition: 100ms ease-in-out;
            background-color: rgba(10, 189, 227, 0.8);
            color: #fff;
            padding: 1rem;
            h2 {
                font-size: 2.5rem;
                transition: 200ms ease-out;
                font-weight: 200;
                text-align: center;
                letter-spacing: 0.25rem;
                margin-left: 0.5rem;
            }
            h3 {
                transition: 200ms ease-out;
                text-align: center;
                font-size: 1.4rem;
                text-transform: uppercase;
            }

        }
        .body {
            width: 350px;
            height: 100px;
            padding: 1rem;
            transition: 500ms ease-in-out;
            border-radius: 0px 10px 10px 0px;
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
    &:hover {
        box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
        transform: translateX(5px);
        backdrop-filter: blur(10px);
    }
`;

export default EventCard;
