import React from 'react';
import styled from 'styled-components';
import useButtonClick from '../../hooks/UseButtonClick';

const NeoMorphicButton = (props) => {
    const [ isClicked, setIsClicked ] = useButtonClick(false)
    const { color } = props;
    return (
        <Button onClick={() => setIsClicked(!isClicked)} color={color}>{isClicked ? "You Clicked Me" : "Click Me!"}</Button>
    )
}

const Button = styled.button`
    background-color: ${props => props.color};
    border-radius: 10px;
    padding: 0.5rem 1rem;
    max-width: 150px;
    min-width: 125px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.9);
    

`;

export default NeoMorphicButton;
