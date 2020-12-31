import React from 'react';
import styled from 'styled-components';

const PageContainer = (props) => {
    return (
        <Page background={props.background}>
            {props.children}
        </Page>
    )
}

const Page = styled.div`
   height: calc(100vh - 100px);
    background-color: ${props => props.background};
    color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    top: 2rem;
    bottom: 0;
`;

export default PageContainer;
