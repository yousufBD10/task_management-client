import React from 'react';
import Features from '../Features/Features';
import Header from '../Header/Header';
import OurService from './OurService/OurService';

const Homepage = () => {
    return (
        <div>
            <Header />
            <Features></Features>
            <OurService></OurService>
        </div>
    );
};

export default Homepage;