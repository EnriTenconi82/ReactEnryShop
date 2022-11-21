import React from 'react';

import './navbar.css';
import Button from '../button/Button';
import { NavBarButtons } from './NavBarItems';
import CartWidget from '../cartWidget/CartWidget';


const NavBar = () => {
    return (
    <div className="navbar">
        <h1> Se picó</h1>
        {NavBarButtons.map((NavBarButtons) => (
        <Button>
            {NavBarButtons.title}
        </Button>
        ))}
        
        <CartWidget/>
    </div>
    );
};

export default NavBar;
