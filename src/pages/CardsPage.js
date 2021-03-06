import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import GlassCard from '../components/cards/GlassCard';
import ModalForm from '../components/ModalForm';
import EventCardSection from '../components/cards/sections/EventCardsSection';
import CardContainer from '../components/cards/CardContainer';

const CardsPage = () => {
    const [ showModal, setShowModal ] = useState(false);
    const closeModal = () => setShowModal(false)
    return (
        <PageContainer background="yellow">
            <h1>Cards</h1>
            <button onClick={() => setShowModal(true)}>Show Modal</button>
            { showModal && <ModalForm closeModal={closeModal} showModal={showModal}/> }
            <CardContainer background={["#222f3e"]} svg={true}>
                <GlassCard heading="Card One" number="01" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio minus cum provident animi laborum dignissimos magni, labore enim nobis magnam iure maxime consequatur deleniti nesciunt! Error debitis laboriosam veniam itaque." />
                <GlassCard heading="Card Two" number="02" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio minus cum provident animi laborum dignissimos magni, labore enim nobis magnam iure maxime consequatur deleniti nesciunt! Error debitis laboriosam veniam itaque." />
                <GlassCard heading="Card Three" number="03" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio minus cum provident animi laborum dignissimos magni, labore enim nobis magnam iure maxime consequatur deleniti nesciunt! Error debitis laboriosam veniam itaque." />
            </CardContainer>
            <EventCardSection />
        </PageContainer>
    )
}

export default CardsPage;
