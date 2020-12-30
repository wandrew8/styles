import React from 'react';
import styled from 'styled-components';

const ButtonPage = () => {
    return (
        <Page>
            <h1>Buttons!</h1>
        </Page>
    )
}

const Page = styled.div`
    height: calc(100vh - 100px);
    background-color: gray;
    color: #fff;
`;


export default ButtonPage;
