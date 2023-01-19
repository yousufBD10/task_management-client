import React, { useContext, useEffect, useState } from 'react';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import {
  AiOutlineSetting,
} from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { TiArrowUnsorted } from "react-icons/ti";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import WorkspaceNameAndInvite from "../Components/Workspace/WorkspaceNameAndInvite";
import { AuthContext } from '../Context/UserContext';

const Workspace = () => {

  const { user, reloadWorkspaces, workspaces, setCurrentWorkspace } = useContext(AuthContext);

  useEffect(reloadWorkspaces, [user]);

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
        <div className="drawer-content min-h-screen">
          <WorkspaceNameAndInvite></WorkspaceNameAndInvite>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side shadow-md">
          <label htmlFor="dashboardDawer" className="drawer-overlay"></label>
          <ul className=" p-4 w-80 menu bg-base-100 ">
            {" "}
            <li className="shadow-sm mb-2 rounded-full ">
              <Link to="/workspace/boards" className="font-bold">
                {" "}
                <MdOutlineSpaceDashboard />
                Boards
              </Link>
            </li>
            <div className="divider"></div>
            <div className="flex items-center ">
              <h3 className="mb-2 font-medium">Workspace</h3>
              <a href="#WorkSpaceModal-1" className=" ml-32 hover:bg-zinc-300 p-2 rounded-full">
                <AiOutlinePlus />
              </a>
            </div>
            {workspaces.length > 0 ? workspaces.map((el) => {
              return <div key={el._id} className="collapse hover:bg-zinc-100 shadow-sm mb-2" onClick={() => { setCurrentWorkspace(workspaces.find((w) => w._id == el._id)) }}>
                <input type="checkbox" className="peer" />
                <div className="collapse-title mb-2 flex items-center gap-3 font-bold">
                  {" "}
                  <img
                    className="w-6 rounded-sm"
                    src="https://placeimg.com/192/192/people"
                    alt=""
                  />
                  {el.name} <TiArrowUnsorted className="ml-16"></TiArrowUnsorted>
                </div>
                <div className="collapse-content">
                  <li className="shadow-sm mb-2 rounded-full">
                    <Link to="/workspace/boards">
                      <MdOutlineSpaceDashboard />
                      Boards
                    </Link>
                  </li>
                  <li className="shadow-sm mb-2 rounded-full">
                    <Link to="/workspace/members">
                      <HiOutlineUsers />
                      Members
                    </Link>
                  </li>
                  {" "}
                  <li className="shadow-sm mb-2 rounded-full">
                    <Link to="/workspace/settings">
                      {" "}
                      <AiOutlineSetting />
                      Settings
                    </Link>
                  </li>
                </div>
              </div>
            }) : <div></div>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
