import React from 'react';
import ButtonPage from '../pages/ButtonPage';
import {
    TransitionGroup,
    CSSTransition
  } from "react-transition-group";
  import {
    Switch,
    Route,
    useLocation
  } from "react-router-dom";

const AnimationApp = () => {
    let location = useLocation();

    return (
        <div>
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
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default AnimationApp;
