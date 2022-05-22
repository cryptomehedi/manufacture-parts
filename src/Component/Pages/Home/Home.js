import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import MakeCustomParts from './MakeCustomParts';
import OrderParts from './OrderParts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <MakeCustomParts/>
            <OrderParts/>
            <BusinessSummary/>
        </div>
    );
};

export default Home;