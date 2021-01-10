import React from 'react';
import ButtonPage from '../pages/ButtonPage';
import CardsPage from '../pages/CardsPage';
import HomePage from '../pages/HomePage';
import CalendarPage from '../pages/CalendarPage';
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
                        <Route path="/cards">
                            <CardsPage />
                        </Route>
                        <Route path="/calendar">
                            <CalendarPage />
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
        z-index: 1;
        overflow: hidden;
        }

        .fade-enter.fade-enter-active {
        opacity: 1;
        transition: 300ms ease-in;
        overflow: hidden;
        }
`;

export default AnimationApp;
