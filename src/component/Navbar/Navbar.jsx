import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <img src="./images/logo.png" alt="Company Logo" className="logo" />
            <div>
                <input type="search" placeholder='Search destinations or activities...' />
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Airport Transfers</Link></li>
                <li><Link to="/">Deals</Link></li>
                <li><Link to="/activities">Activities</Link></li>
                <li><Link to="/">Agent Login</Link></li>
                <li><Link to="/">USD</Link></li>
            </ul>
            <div className="menu-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default Navbar;
