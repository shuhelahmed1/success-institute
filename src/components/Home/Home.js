import React, { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import HomeComponents from '../HomeComponents/HomeComponents';
import './Home.css';

const Home = () => {
    const [homeComponents, setHomeComponents] = useState([]);
      useEffect( ()=>{
          fetch('./homeData.json')
          .then(res => res.json())
          .then(data => setHomeComponents(data))
      }, [])
    return (
    <div>
        <h2 className='m-3'>Offer running: </h2>
        <div className='discount-section d-grid mx-auto'>
            <div className='discount-component d-flex'>
                <div>
                <img src="https://image.shutterstock.com/image-vector/grey-discount-20-sale-background-600w-1075991594.jpg" alt="" />
                </div>
                <div>
                    <h2>1. IELTS</h2>
                    <h2>2. GRE</h2>
                </div>
            </div>
            <div className='discount-component d-flex'>
                <div>
                <img src="https://media.istockphoto.com/vectors/discount-sticker-sale-red-tag-isolated-vector-illustration-discount-vector-id831172744?s=612x612" alt="" />
                </div>
                <div>
                    <h2>1. Spoken English</h2>
                    <h2>2. Web Developement</h2>
                </div>
            </div>
        </div>
        <h2 className='mt-4'>Special courses: </h2>
        <Row xs={1} md={2} className="g-4 w-75 mx-auto my-4">
                    {
                        homeComponents.map(homeComponent => <HomeComponents
                        key={homeComponent.key}
                        homeComponentName={homeComponent.name}
                        homeComponentPrice={homeComponent.price}
                        homeComponentImg={homeComponent.img}
                        ></HomeComponents>)
                    }
        </Row>
    </div>
    );
};

export default Home;