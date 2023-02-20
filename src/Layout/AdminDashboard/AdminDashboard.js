import React, { useContext, useEffect } from 'react';
import { AiOutlineHome, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { AuthContext } from '../../Context/UserContext';

const AdminDashboard = () => {
  const { workspaces, setCurrentWorkspace, user, reloadWorkspaces } = useContext(AuthContext);
  const setCurrent = (id) => { setCurrentWorkspace(workspaces.find((w) => w._id == id)) }
  useEffect(reloadWorkspaces, [user]);
  console.log(workspaces);
  return (
    <div>
      <Navbar></Navbar>
      <label
        htmlFor="dashboardDawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <div className="drawer drawer-mobile">
        <input id="dashboardDawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content min-h-screen ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side shadow-md">
          <label htmlFor="dashboardDawer" className="drawer-overlay"></label>
          <ul className="p-4 w-80 menu bg-base-100">
            {" "}
            <li className="mb-1">
              <Link to="/dashboard" className="font-semibold">
                {" "}
                <AiOutlineHome />
                Home
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/dashboard/user" className="font-semibold">
                {" "}
                <AiOutlineUser />
                User
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/dashboard/userworkspace" className="font-semibold">
                {" "}
                <MdOutlineSpaceDashboard />
                All Workspace
              </Link>
            </li>
            <li className=" mb-1  ">
              <Link to={`/dashboard/userboards/${workspaces[0]?._id}`} className="font-semibold">
                {" "}
                <MdOutlineSpaceDashboard />
                Boards
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default AdminDashboard;