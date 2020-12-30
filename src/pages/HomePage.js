import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
    return (
        <Page>
            <h1>Home</h1>
        </Page>
    )
}

const Page = styled.div`
    height: calc(100vh - 100px);
    background-color: cyan;
    color: #fff;
`;

export default HomePage;
