import React from 'react';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import OurService from './OurService/OurService';

const Homepage = () => {
    return (
        <div>
            <Header />
            <Features></Features>
            <OurService></OurService>
            <Reviews></Reviews>
        </div>
    );
};

export default Homepage;