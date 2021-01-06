import React from 'react';
import NeoMorphicButton from '../components/buttons/NeoMorphicButton';
import PageContainer from '../components/PageContainer';

const ButtonPage = () => {
    return (
        <PageContainer background="white">
            <h1>Buttons!</h1>
            <NeoMorphicButton color="white"></NeoMorphicButton>
            <NeoMorphicButton color="light gray"></NeoMorphicButton>
            <NeoMorphicButton color="gray"></NeoMorphicButton>
            <NeoMorphicButton color="black"></NeoMorphicButton>

        </PageContainer>
    )
}

export default ButtonPage;
