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
        <Nav ref={ref}>
           <FontAwesomeIcon className="icon" icon={faBars} onClick={toggleNav}/>
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
                        <NavLink activeClassName="selected" exact to="/cards">
                            <li className="sidebar-link" onClick={closeNav}>Cards</li>
                        </NavLink>
                    </ul>
                </div>

           </CSSTransition>
        </Nav>
    )
}

const Nav = styled.nav`
    z-index: 100;
    position: absolute;
    background-color: white;
    padding: 0.5rem 1rem 1rem 1rem;
    margin: 0;
    .selected {
        background: gray;
        color: white;
        width: 100%;
        height: 100%;
    }
    .icon {
        &:hover {
            cursor: pointer;
        }
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        a {
            text-decoration: none;
            transition: 200ms ease-in;
            color: black;
        }
        li {
            border-bottom: solid black 1px;
            width: 100px;
            padding: 0.5rem;
            transition: 200ms ease-in;
            :hover {
                transform: scale(1.1);
            }
            
        }
    }
    .visible-enter {
        transform: translate(-100%);
    }
    .visible-enter-active {
        transform: translate(0);
        transition: 300ms linear;
    }
    .visible-exit {
        transform: translate(0);

    }
    .visible-exit-active {
        transform: translate(-100%);
        transition: 300ms linear;

    }
`;

export default SideNavigation;
