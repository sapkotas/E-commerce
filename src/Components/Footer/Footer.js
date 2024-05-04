import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../Assests/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <img src= {logo}alt="Logo" />
                </div>
                <div className="footer-links">
                    <div className="footer-links-column">
                        <h3>Shop</h3>
                        <ul>
                            <li><button>New Arrivals</button></li>
                            <li><button>Best Sellers</button></li>
                            <li><button>Special Offers</button></li>
                        </ul>
                    </div>
                    <div className="footer-links-column">
                        <h3>Customer Service</h3>
                        <ul>
                            <li><button>Contact Us</button></li>
                            <li><button>FAQs</button></li>
                            <li><button>Shipping</button></li>
                            <li><button>Returns</button></li>
                        </ul>
                    </div>
                    <div className="footer-links-column">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <button><FontAwesomeIcon icon={faFacebookF} /></button>
                            <button><FontAwesomeIcon icon={faTwitter} /></button>
                            <button><FontAwesomeIcon icon={faInstagram} /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
