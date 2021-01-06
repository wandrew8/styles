import React from 'react';
import styled from 'styled-components';
import useButtonClick from '../../hooks/UseButtonClick';

const GlassButton = (props) => {
    const [ isClicked, setIsClicked ] = useButtonClick(false)
    const { color } = props;
    return (
        <Button onClick={() => setIsClicked(!isClicked)} color={color}>{isClicked ? "You Clicked Me" : "Click Me!"}</Button>
    )
}

const Button = styled.button`
    background-color: ${props => props.color};

`;

export default GlassButton;
