import React from 'react';
import { Outlet } from "react-router-dom";
import BackToTop from '../Components/BackToTop/BackToTop';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <BackToTop>
                <Navbar />
                <Outlet />
                <Footer />
            </BackToTop>
        </div>
    );
};

export default Main;