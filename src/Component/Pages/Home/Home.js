import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import MakeCustomParts from './MakeCustomParts';
import OrderParts from './OrderParts';
import ToolsOrParts from './ToolsOrParts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <MakeCustomParts/>
            <OrderParts/>
            <BusinessSummary/>
            <ToolsOrParts/>
        </div>
    );
};

export default Home;