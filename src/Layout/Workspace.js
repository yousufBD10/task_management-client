import React, { useContext, useEffect } from 'react';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import {
  AiOutlineSetting,
} from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { TiArrowUnsorted } from "react-icons/ti";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLock, BiPencil } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { AuthContext } from '../Context/UserContext';
import { useState } from 'react';
import InviteMember from '../Components/Workspace/Modals/InviteMember';
import EditWorkspace from '../Components/Workspace/Modals/EditWorkspace';

const Workspace = () => {
  const { user, reloadWorkspaces, workspaces, setCurrentWorkspace, currentWorkspace } = useContext(AuthContext);
  const setCurrent = (id) => { setCurrentWorkspace(workspaces.find((w) => w._id == id)) }
  useEffect(reloadWorkspaces, [user]);

  return (
    <div className='text-white'>
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

      <div className="drawer drawer-mobile">
        <input id="dashboardDawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content min-h-screen  pt-8">
          {currentWorkspace && <><div className='lg:flex justify-between px-5'>
            <div className='flex items-center gap-2'>
              <div className="avatar">
                <div className="w-20 rounded">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div>
                <div className='flex items-center gap-3'> <h1 className='text-xl flex items-center gap-2 font-medium'>{currentWorkspace?.name} </h1>
                  <a href='#edit-workspace' className='hover:bg-slate-200 text-black rounded-lg cursor-pointer p-2'> <BiPencil></BiPencil> </a>
                </div>
                <p className='flex items-center gap-2'><BiLock></BiLock> Private</p>
              </div>
            </div>
            <a href='#invite-member' className='flex mt-12 items-center gap-2 bg-blue-600 btn btn-primary btn-sm rounded-sm text-white'><FiUserPlus></FiUserPlus> Invite Workspace members</a>
          </div><div className="divider px-5"></div></>
          }
          <Outlet></Outlet>
        </div>
        <div className="drawer-side shadow-lg bg-slate-800 pt-8">
          <label htmlFor="dashboardDawer" className="drawer-overlay"></label>
          <ul className="pl-4 pr-4 w-80 menu">
            {" "}
            <li className="shadow-sm mb-2 rounded-md ">
              <Link to="/workspace/boards" className="font-bold">
                {" "}
                <MdOutlineSpaceDashboard />
                Boards
              </Link>
            </li>
            <div className="divider"></div>
            <div className="flex items-center ">
              <h3 className="mb-2 font-medium">Workspace</h3>
              <a href="#WorkSpaceModal-1" className=" ml-32 hover:bg-zinc-300 p-2 rounded-md">
                <AiOutlinePlus />
              </a>
            </div>
            {workspaces?.length > 0 ? workspaces.map((el) => {
              return <div key={el._id} className="collapse hover:bg-gray-100 hover:text-black shadow-sm mb-2" onClick={() => setCurrent(el._id)}>
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
                  <li className="shadow-sm mb-2 rounded-md">
                    <Link to="/workspace/boards">
                      <MdOutlineSpaceDashboard />
                      Boards
                    </Link>
                  </li>
                  <li className="shadow-sm mb-2 rounded-md">
                    <Link to="/workspace/members">
                      <HiOutlineUsers />
                      Members
                    </Link>
                  </li>
                  {" "}
                  <li className="shadow-sm mb-2 rounded-md">
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
      <EditWorkspace></EditWorkspace>
      <InviteMember></InviteMember>
    </div>
  );
};

export default Workspace;
