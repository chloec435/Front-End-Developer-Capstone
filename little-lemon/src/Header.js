import React from 'react';
import logo from '../src/images/Logo.svg'
import './Header.css'
function Header() {
    return (
        <header className="header">
            <div className>
                <img src={logo} alt="Little Lemon Logo" />
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservation">Reserve A Table</a></li>
                    <li><a href="#order">Order Online</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
