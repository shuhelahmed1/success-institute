import React, { useState } from 'react';
import { useEffect } from 'react';
import HomeComponents from '../HomeComponents/HomeComponents';

const Home = () => {
    const [homeComponents, setHomeComponents] = useState([]);
      useEffect( ()=>{
          fetch('./homeData.json')
          .then(res => res.json())
          .then(data => setHomeComponents(data))
      }, [])
    return (
        <div>
            {
                homeComponents.map(homeComponent => <HomeComponents
                key={homeComponent.key}
                homeComponentName={homeComponent.name}
                homeComponentPrice={homeComponent.price}
                homeComponentImg={homeComponent.img}
                ></HomeComponents>)
            }
        </div>
    );
};

export default Home;