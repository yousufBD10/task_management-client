import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';

const App = () => {
    return (
        <div>
            <Navbar />
            <Sidebar></Sidebar>
            <Outlet />
        </div>
    );
};

export default App;