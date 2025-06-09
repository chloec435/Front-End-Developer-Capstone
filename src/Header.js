import React from 'react';
import logo from '../src/images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header className="header">
            <div>
                <img src={logo} alt="Little Lemon Logo" id="logo"/>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/booking">Reserve A Table</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;