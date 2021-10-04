import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-address'>
                <h2>Our Address:</h2>
                <ul>
                    <li>12/40 Ambarkhana</li>
                    <li>Sylhet</li>
                </ul>
            </div>
            <div className='footer-branch'>
                <h2>Total Branches:</h2>
                <ul>
                    <li>Dhaka</li>
                    <li>Chittagong</li>
                    <li>Sylhet</li>
                </ul>
            </div>
            <div className='footer-contact'>
                <h2>Contact Us:</h2>
                <ul>
                    <li>01876545798</li>
                    <li>Email: successinstitute@gmail.com</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;