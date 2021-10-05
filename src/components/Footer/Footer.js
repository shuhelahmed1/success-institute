import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='footer-section p-3 m-auto my-2 text-white d-grid'>
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
            <p>Copyright <span >&copy;</span> || Success Institute</p>
        </div> 
    );
};

export default Footer;