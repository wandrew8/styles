import React from 'react';
import PageContainer from '../components/PageContainer';
import CardOne from '../components/cards/CardOne';

const CardsPage = () => {
    return (
        <PageContainer background="yellow">
            <h1>Cards</h1>
            <CardOne heading="Welcome" subtitle="A new beginning" text="This is a card that looks really cool" />
        </PageContainer>
    )
}

export default CardsPage;
