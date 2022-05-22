import React from 'react';
import Banner from './Banner';
import MakeCustomParts from './MakeCustomParts';
import OrderParts from './OrderParts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <MakeCustomParts/>
            <OrderParts/>
        </div>
    );
};

export default Home;