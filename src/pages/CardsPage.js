import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import CardOne from '../components/cards/CardOne';
import ModalForm from '../components/ModalForm';

const CardsPage = () => {
    const [ showModal, setShowModal ] = useState(false);
    const closeModal = () => setShowModal(false)
    return (
        <PageContainer background="yellow">
            <h1>Cards</h1>
            <button onClick={() => setShowModal(true)}>Show Modal</button>
            { showModal && <ModalForm closeModal={closeModal} showModal={showModal}/> }
            <CardOne heading="Welcome" subtitle="A new beginning" text="This is a card that looks really cool" />
        </PageContainer>
    )
}

export default CardsPage;
