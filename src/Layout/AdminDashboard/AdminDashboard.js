import React from 'react';
import { AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const AdminDashboard = () => {
    return (
        <div>
        <Navbar></Navbar>
        <label
          htmlFor="dashboardDawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
  
        <div className="drawer drawer-mobile mt-8">
          <input id="dashboardDawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content min-h-screen border">
          
            <Outlet></Outlet>
          </div>
          <div className="drawer-side shadow-md">
            <label htmlFor="dashboardDawer" className="drawer-overlay"></label>
            <ul className="p-4 w-80 menu bg-base-100">
              {" "}
              <li className="shadow-sm mb-2 rounded-md ">
                <Link to="/dashboard/user" className="font-bold">
                  {" "}
                  <AiOutlineUser />
                User
                </Link>
              </li>
              <li className="shadow-sm mb-2 rounded-md ">
                <Link to="/workspace/boards" className="font-bold">
                  {" "}
                  <MdOutlineSpaceDashboard />
                  Email
                </Link>
              </li>
              <li className="shadow-sm mb-2 rounded-md ">
                <Link to="/workspace/boards" className="font-bold">
                  {" "}
                  <MdOutlineSpaceDashboard />
                 Contact
                </Link>
              </li>
              <li className="shadow-sm mb-2 rounded-md ">
                <Link to="/workspace/boards" className="font-bold">
                  {" "}
                  <MdOutlineSpaceDashboard />
                  Boards
                </Link>
              </li>
             
             
             
            </ul>
          </div>
        </div>
  
      
      </div>
    );
};

export default AdminDashboard;