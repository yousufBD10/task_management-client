import React, { useContext, useEffect } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { TiArrowUnsorted } from "react-icons/ti";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLock, BiPencil } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { AuthContext } from "../Context/UserContext";
import { useState } from "react";
import InviteMember from "../Components/Workspace/Modals/InviteMember";
import EditWorkspace from "../Components/Workspace/Modals/EditWorkspace";

const Workspace = () => {
  const {
    user,
    reloadWorkspaces,
    workspaces,
    setCurrentWorkspace,
    currentWorkspace,
  } = useContext(AuthContext);
  const setCurrent = (id) => {
    setCurrentWorkspace(workspaces.find((w) => w._id == id));
  };
  useEffect(reloadWorkspaces, [user]);

  const image = "/assets/banner/project_img-10.jpg";

  return (
    <div className="text-white">
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
          {currentWorkspace && (
            <>
              <div className="lg:flex justify-between px-5">
                <div className="flex items-center gap-2">
                  <div className="avatar">
                    <div
                      className="w-20 rounded"
                      style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                    url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      {" "}
                      <h1 className="text-xl flex items-center gap-2 font-medium">
                        {currentWorkspace?.name}{" "}
                      </h1>
                      <a
                        href="#edit-workspace"
                        className="hover:bg-slate-200 text-black rounded-lg cursor-pointer p-2"
                      >
                        {" "}
                        <BiPencil></BiPencil>{" "}
                      </a>
                    </div>
                    <p className="flex items-center gap-2">
                      <BiLock></BiLock> Private
                    </p>
                  </div>
                </div>
                <a
                  href="#invite-member"
                  className="btn btn-sm border-none bg-stone-300 hover:bg-indigo-300 text-black font-semibold rounded-sm"
                >
                  <FiUserPlus></FiUserPlus> Invite Workspace members
                </a>
              </div>
              <div className="divider px-5"></div>
            </>
          )}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side shadow-lg bg-slate-800 pt-8">
          <label htmlFor="dashboardDawer" className="drawer-overlay"></label>
          <ul className="pl-4 pr-4 w-80 menu">
            {" "}
            <li className="  hover:bg-gray-600 mb-2  ">
              <Link to="/workspace/boards" className="font-bold">
                {" "}
                <MdOutlineSpaceDashboard />
                Boards
              </Link>
            </li>
            <div className="divider"></div>
            <div className="flex items-center ">
              <h3 className="mb-2 font-medium">Workspace</h3>
              <a
                href="#WorkSpaceModal-1"
                className=" ml-32 hover:bg-zinc-300 hover:text-gray-700  p-2 rounded-full "
              >
                <AiOutlinePlus />
              </a>
            </div>
            {workspaces?.length > 0 ? (
              workspaces.map((el) => {
                return (
                  <div
                    key={el._id}
                    className="collapse   mb-2"
                    onClick={() => setCurrent(el._id)}
                  >
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title  mb-2 flex items-center gap-3 font-bold">
                      {" "}
                      <img
                        className="w-6 rounded-sm"
                        src="https://img.freepik.com/free-photo/strate_53876-95298.jpg?w=740&t=st=1677160634~exp=1677161234~hmac=a7af953f7ed59b74c5c1941493cd1ac1442bf50f1c97dcb8e3e376fdb72f6bfa"
                        alt=""
                      />
                      <li className=" mb-2 flex items-center justify-between hover:bg-gray-600 rounded-md">
                        <Link to="/workspace/boards">
                          {el.name}{" "}
                          <TiArrowUnsorted className="ml-12"></TiArrowUnsorted>
                        </Link>
                      </li>
                    </div>
                    <div className="collapse-content">
                      <li className=" mb-2 hover:bg-gray-600  ">
                        <Link to="/workspace/boards">
                          <MdOutlineSpaceDashboard />
                          Boards
                        </Link>
                      </li>
                      <li className="  hover:bg-gray-600 mb-2 ">
                        <Link to="/workspace/members">
                          <HiOutlineUsers />
                          Members
                        </Link>
                      </li>{" "}
                      <li className="  hover:bg-gray-600 mb-2 ">
                        <Link to="/workspace/settings">
                          {" "}
                          <AiOutlineSetting />
                          Settings
                        </Link>
                      </li>
                    </div>
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
          </ul>
        </div>
      </div>
      <EditWorkspace></EditWorkspace>
      <InviteMember></InviteMember>
    </div>
  );
};

export default Workspace;
