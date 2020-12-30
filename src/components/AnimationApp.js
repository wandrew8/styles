import React from 'react';
import ButtonPage from '../pages/ButtonPage';
import HomePage from '../pages/HomePage';
import {
    TransitionGroup,
    CSSTransition
  } from "react-transition-group";
import {
    Switch,
    Route,
    useLocation
  } from "react-router-dom";
import styled from 'styled-components';

const AnimationApp = () => {
    let location = useLocation();

    return (
        <AnimationStyles>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                    >
                    <Switch location={location}>
                        <Route path="/buttons">
                            <ButtonPage />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </AnimationStyles>
    )
}

const AnimationStyles = styled.div`
    .fade-enter {
        opacity: 0;
        transform: translateY(-10px);
        z-index: 1;
        }

        .fade-enter.fade-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: 250ms ease-in;
        }
`;

export default AnimationApp;
