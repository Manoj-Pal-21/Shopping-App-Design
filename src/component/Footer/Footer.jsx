import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Footer.css"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section logo-section">
                    <img src="./images/logo.png" alt="Company Logo" className="logo" />
                    <p>A3, Execube, Sector 4, Noida</p>
                    <p>27, Old Gloucester Street, Central London</p>
                    <p>WC1N 3AX</p>
                </div>
                <div className="footer-section links-section">
                    <h4>About Us</h4>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/">Special Deals</Link></li>
                        <li><Link to="/">Destinations</Link></li>
                        <li><Link to="/">Services</Link></li>
                        <li><Link to="/">Community</Link></li>
                        <li><Link to="/">Blogs</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Work with Us</h4>
                    <ul>
                        <li><Link to="/">Partner With Us</Link></li>
                        <li><Link to="/">Agent Login</Link></li>
                        <li><Link to="/">Join Us as Local Amigo</Link></li>
                        <li><Link to="/">FAQ</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us On</h4>
                    <div className="social-media-icons">
                        <a href="https://www.facebook.com/YourCompany" aria-label="Facebook" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/YourCompany" aria-label="Twitter" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/YourCompany" aria-label="Instagram" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/YourCompany" aria-label="LinkedIn" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
