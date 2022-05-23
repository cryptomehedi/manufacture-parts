import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import MakeCustomParts from './MakeCustomParts';
import OrderParts from './OrderParts';
import Reviews from './Reviews';
import ToolsOrParts from './ToolsOrParts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <MakeCustomParts/>
            <OrderParts/>
            <BusinessSummary/>
            <ToolsOrParts/>
            <Reviews/>
        </div>
    );
};

export default Home;