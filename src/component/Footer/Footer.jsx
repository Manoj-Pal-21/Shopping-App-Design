import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#EBFEFA',
    };

    return (
        <footer style={footerStyle} className="text-gray-900 py-10 px-5 text-left">
            <div className="flex flex-wrap justify-between">
                <div className="flex flex-col items-start min-w-[250px] mb-5">
                    <img src="./images/logo.png" alt="Company Logo" className="max-w-[150px] h-auto mb-2" />
                    <p className="mb-1">A3, Execube, Sector 4, Noida</p>
                    <p className="mb-1">27, Old Gloucester Street, Central London</p>
                    <p>WC1N 3AX</p>
                </div>
                <div className="min-w-[250px] mb-5">
                    <h4 className="text-gray-900 font-bold mb-2">About Us</h4>
                    <ul className="list-none p-0">
                        <li className="mb-1"><Link to="/home" className="text-gray-900 hover:text-blue-500 hover:underline">Home</Link></li>
                        <li className="mb-1"><Link to="/" className="text-gray-900 hover:text-blue-500 hover:underline">Special Deals</Link></li>
                        <li className="mb-1"><Link to="/" className="text-gray-900 hover:text-blue-500 hover:underline">Destinations</Link></li>
                        <li className="mb-1"><Link to="/" className="text-gray-900 hover:text-blue-500 hover:underline">Services</Link></li>
                        <li className="mb-1"><Link to="/" className="text-gray-900 hover:text-blue-500 hover:underline">Community</Link></li>
                        <li className="mb-1"><Link to="/" className="text-gray-900 hover:text-blue-500 hover:underline">Blogs</Link></li>
                    </ul>
                </div>
                <div className="min-w-[250px] mb-5">
                    <h4 className="text-gray-900 font-bold mb-2">Work with Us</h4>
                    <ul className="list-none p-0">
                        <li className="mb-1"><Link to="/" className="text-gray-900 hover:text-blue-500 hover:underline">Partner With Us</Link></li>
                        <li className="mb-1"><Link to="/" className="text-gray-900 hover:text-blue-500 hover:underline">Agent Login</Link></li>
                        <li className="mb-1"><Link to="/" className="text-gray-900 hover:text-blue-500 hover:underline">Join Us as Local Amigo</Link></li>
                        <li className="mb-1"><Link to="/" className="text-gray-900 hover:text-blue-500 hover:underline">FAQ</Link></li>
                    </ul>
                </div>
                <div className="min-w-[250px] mb-5">
                    <h4 className="text-gray-900 font-bold mb-2">Follow Us On</h4>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/YourCompany" aria-label="Facebook" className="text-gray-800 flex items-center justify-center w-5 h-5 rounded-full text-lg transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/YourCompany" aria-label="Twitter" className="text-gray-800 flex items-center justify-center w-5 h-5 rounded-full text-lg transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/YourCompany" aria-label="Instagram" className="text-gray-800 flex items-center justify-center w-5 h-5 rounded-full text-lg transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/YourCompany" aria-label="LinkedIn" className="text-gray-800 flex items-center justify-center w-5 h-5 rounded-full text-lg transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
