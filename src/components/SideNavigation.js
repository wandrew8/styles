import React, { useState, useRef } from 'react';
import { CSSTransition } from "react-transition-group";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import useOutsideClick from '../hooks/UseClickOutside';

const SideNavigation = () => {
    const [ expandNav, setExpandNav ] = useState(false);
    const toggleNav = () => setExpandNav(!expandNav);
    const closeNav = () => setExpandNav(false);
    const ref = useRef();
    useOutsideClick(ref, () => {
        closeNav();
    });
    return (
        <Header>

        <Nav ref={ref}>
            <div className="icon-holder">
                <FontAwesomeIcon className="icon" icon={faBars} onClick={toggleNav}/>
            </div>
           <CSSTransition
            in={expandNav}
            timeout={300}
            classNames="visible"
            unmountOnExit
            >
                <div>
                    <ul>
                        <NavLink activeClassName="selected" exact to="/">
                            <li className="sidebar-link" onClick={closeNav}>Home</li>
                        </NavLink>
                        <NavLink activeClassName="selected" to="/buttons">
                            <li className="sidebar-link" onClick={closeNav}>Buttons</li>
                        </NavLink>
                        <NavLink activeClassName="selected" to="/cards">
                            <li className="sidebar-link" onClick={closeNav}>Cards</li>
                        </NavLink>
                        <NavLink activeClassName="selected" to="/calendar">
                            <li className="sidebar-link" onClick={closeNav}>Calendar</li>
                        </NavLink>
                    </ul>
                </div>

           </CSSTransition>
        </Nav>
        </Header>
    )
}

const Header = styled.header`
    width: 100%;
    height: 30px;
    align-items: center;
    z-index: 110;
    position: absolute;
    top: 0;
`;

const Nav = styled.nav`
    z-index: 100;
    position: absolute;
    background-color: white;
    margin: 0;
    transform: translate(0);
    border-radius: 0px 0px 10px 0px;
    .selected {
        background-color: gray;
        color: white;
        width: 100%;
        height: 100%;
        outline: none;
        li {
            background-color: gray;
        }
    }
    .icon-holder {
        height: 30px;
        display: flex;
        align-items: center;
        margin: 0rem 2rem;
    }
    .icon {
        &:hover {
            cursor: pointer;
        }
    }
    ul {
        list-style-type: none;
        padding: 0.5rem 1rem 1rem 1rem;
        margin: 0;
        a {
            text-decoration: none;
            transition: 200ms ease-in;
            color: black;
        }
        li {
            border-bottom: solid gray 1px;
            width: 100px;
            padding: 0.5rem;
            transition: 200ms ease-in;
            :hover {
                background-color: gray;
                color: white;
            }
            
        }
    }
    .visible-enter {
        transform: translate(-100%);
        z-index: 100;
        position: absolute;
        background-color: white;
        margin: 0;
        border-radius: 0px 0px 10px 0px;

    }
    .visible-enter-active {
        transform: translate(0);
        transition: 300ms linear;
        z-index: 100;
        position: absolute;
        background-color: white;
        margin: 0;
        border-radius: 0px 0px 10px 0px;


    }
    .visible-exit {
        transform: translate(0);
        z-index: 100;
        position: absolute;
        background-color: white;
        margin: 0;
        border-radius: 0px 0px 10px 0px;

    }
    .visible-exit-active {
        transform: translate(-100%);
        transition: 300ms linear;
        z-index: 100;
        position: absolute;
        background-color: white;
        margin: 0;
        border-radius: 0px 0px 10px 0px;

    }
`;

export default SideNavigation;
