import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import SingleTaskModal from '../Components/Workspace/Modals/SingleTaskModal';

const WorkspaceSingle = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <SingleTaskModal></SingleTaskModal>
        </div>
    );
};

export default WorkspaceSingle;