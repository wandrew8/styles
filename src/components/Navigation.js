import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <nav>
            <NavLink activeClassName="selected" to="/buttons">Buttons</NavLink>
            <NavLink activeClassName="selected" to="/cards">Cards</NavLink>
            <NavLink exact activeClassName="selected" to="/">Home</NavLink>
        </nav>
    )
}

export default Navigation;
