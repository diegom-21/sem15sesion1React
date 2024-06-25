import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>2024 Página Diego</p>
                <div className="footer-links">
                    <a href="#privacy-policy">Privacidad</a>
                    <a href="#terms-of-service">Terminos</a>
                    <a href="#contact-us">Contactanos</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
