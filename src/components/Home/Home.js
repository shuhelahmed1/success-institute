import React, { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import HomeComponents from '../HomeComponents/HomeComponents';

const Home = () => {
    const [homeComponents, setHomeComponents] = useState([]);
      useEffect( ()=>{
          fetch('./homeData.json')
          .then(res => res.json())
          .then(data => setHomeComponents(data))
      }, [])
    return (
            <Row xs={1} md={2} className="g-4 w-75 m-auto">
            {
                homeComponents.map(homeComponent => <HomeComponents
                key={homeComponent.key}
                homeComponentName={homeComponent.name}
                homeComponentPrice={homeComponent.price}
                homeComponentImg={homeComponent.img}
                ></HomeComponents>)
            }
</Row>
    );
};

export default Home;