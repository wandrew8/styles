import React from 'react';
import styled from 'styled-components';

const CardOne = (props) => {
    const { heading, subtitle, text, image } = props;
    return (
        <Card>
            <h1>{heading}</h1>
            <small>{subtitle}</small>
            <p>{text}</p>
        </Card>
    )
}

const Card = styled.div`
    border: solid black 1px;
    width: 300px;
    height: 300px;
    padding: 1rem;
    text-align: center;
    color: black;
    background-color: white;
    border-radius: 1rem;
`;

export default CardOne;
