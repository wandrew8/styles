import React from 'react';
import CardContainer from '../CardContainer';
import EventCard from '../EventCard';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const EventCardsSection = () => {
    const onDragEnd = (result) => {
        console.log("hello")
    }
    return (
        <CardContainer background={["#222f3e", "transparent"]} svg={true} >
            <h1>Event Cards</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => {
                        return (
                            <div 
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {[1, 2, 3].map((item, index) => {
                                    return (
                                        <EventCard 
                                            key={item}
                                            event="Alex's Birthday Party" 
                                            location="Auburn, Washington" 
                                            day="19" 
                                            index={index}
                                            month="July" />  
                                    )
                                })}
                                {provided.placeholder}
                            </div>
                        )
                    }}
                </Droppable>
            </DragDropContext>
        </CardContainer>
    )
}

export default EventCardsSection;
