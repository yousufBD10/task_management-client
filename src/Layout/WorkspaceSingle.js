import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import NewBoardModal from '../Components/NewBoard/NewBoardModal';

const WorkspaceSingle = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <NewBoardModal></NewBoardModal>
        </div>
    );
};

export default WorkspaceSingle;