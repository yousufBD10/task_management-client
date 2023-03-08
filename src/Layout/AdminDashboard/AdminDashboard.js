import React, { useContext, useEffect } from 'react';
import { AiOutlineHome, AiOutlinePlus, AiOutlineSlack, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineBookmarkAdd, MdOutlineSpaceDashboard } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { AuthContext } from '../../Context/UserContext';
import useRole from '../../hooks/useRole';

const AdminDashboard = () => {
  const { user, theme,reloadWorkspaces } = useContext(AuthContext);
  const [role] = useRole(user?.email);
  useEffect(reloadWorkspaces, [user]);

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
      <div className="drawer  drawer-mobile">
        <input id="dashboardDawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content min-h-screen ">
          <Outlet></Outlet>
        </div>
        <div className={theme?.feature}>
          <label htmlFor="dashboardDawer" className="drawer-overlay"></label>
          <ul className="p-4 w-80 menu ">
            {" "}
            <li className="mb-1 hover:bg-gray-600">
              <Link to="/dashboard" className="font-semibold">
                {" "}
                <AiOutlineHome />
                Home
              </Link>
            </li>
            {role === 'admin' && <li className=" hover:bg-gray-600 mb-1">
              <Link to="/dashboard/user" className="font-semibold">
                {" "}
                <AiOutlineUser />
                User
              </Link>
            </li>}
            <li className=" hover:bg-gray-600 mb-1">
              <Link to="/dashboard/userworkspace" className="font-semibold">
                {" "}
                <MdOutlineSpaceDashboard />
                All Workspace
              </Link>
            </li>
            <li className=" hover:bg-gray-600 mb-1  ">
              <Link to='/dashboard/userboard' className="font-semibold">
                {" "}
                <MdOutlineBookmarkAdd />
                Boards
              </Link>
            </li>

            <li className=" hover:bg-gray-600 mb-1">
              <Link to="/dashboard/tasks" className="font-semibold">
                {" "}
                <AiOutlineSlack />
                Tasks
              </Link>
            </li>

          </ul>
        </div>


      </div>
    </div >
  );
};

export default AdminDashboard;