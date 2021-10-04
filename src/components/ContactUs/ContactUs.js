import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='w-75 m-auto'>
            <h2 className='m-3'>Meet our CEO</h2>
            <div className='contact-top d-flex'>
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
            <div>
                <h2 className='m-3'>Check out our social media:</h2>
                <a href="https://www.facebook.com"><img className='contact-social-icon' src="https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-593204357.jpg" alt="" /></a>   
                <a href="https://www.twitter.com"><img className='contact-social-icon' src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="" /></a>   
                <a href="https://www.instagram.com"><img className='contact-social-icon' src="https://fdn.gsmarena.com/imgroot/news/18/03/instagram-timeline-changes/-728/gsmarena_001.jpg" alt="" /></a>   
            </div>
        </div>
    );
};

export default ContactUs;