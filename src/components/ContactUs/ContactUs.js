import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='w-75 m-auto'>
            <h2 className='m-3'>Meet our CEO</h2>
            <div className='contact-section d-flex'>
                <div>
                    <img src="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?b=1&k=20&m=1270067126&s=170667a&w=0&h=rq1zL5aHt9q4DtwW8jp2BrdTSOGKt7dGI8e5jham9R8=" alt="" />
                </div>
                <div>
                    <h2>Name: Bilal Hasan</h2>
                    <h3>Email: bilalpro@gmail.com</h3>
                    <h3>Phone: 01789338458</h3>
                    <h3>Address: Zindabazar, Sylhet</h3>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;