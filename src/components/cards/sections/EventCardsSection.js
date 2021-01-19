import React, { useState } from 'react';
import CardContainer from '../CardContainer';
import EventCard from '../EventCard';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const EventCardsSection = () => {
    const [ cards, setCards ] = useState([
        {
            event: "Alex's Birthday",
            location: "Seattle, WA",
            day: "19",
            month: "July"
        },
        {
            event: "Borong's Birthday",
            location: "Bothell, WA",
            day: "9",
            month: "September"
        },
        {
            event: "Martha's Birthday",
            location: "Bothell, WA",
            day: "22",
            month: "December"
        }
    ])
    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        if(!destination) {
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }
        const myCards = [...cards];
        const draggedItem = myCards[result.source.index];
        myCards.splice(result.source.index, 1);
        myCards.splice(result.destination.index, 0, draggedItem);
        setCards(myCards);
    }
    return (
        <>
            <h1>Event Cards</h1>
            <CardContainer background={["#222f3e", "transparent"]} svg={true} >
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="list">
                        {(provided) => {
                            return (
                                <div 
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {cards.map((item, index) => {
                                        const { event, location, day, month } = item;
                                        return (
                                            <EventCard 
                                                key={item.event}
                                                event={event}
                                                location={location} 
                                                day={day}
                                                index={index}
                                                month={month} />  
                                        )
                                    })}
                                    {provided.placeholder}
                                </div>
                            )
                        }}
                    </Droppable>
                </DragDropContext>
            </CardContainer>
        </>
    )
}

export default EventCardsSection;
