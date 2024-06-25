import React from 'react';
import reactLogo from '../../assets/react.svg';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={reactLogo} alt="React Logo" className="logo" />
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#tours" className="nav-link">
                            Our tours
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">
                            About us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#booking" className="nav-link">
                            Booking
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#faq" className="nav-link">
                            FAQ
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="menu-icon">
                <button className="menu-button">&#9776;</button>
            </div>
        </header>
    );
};

export default Header;