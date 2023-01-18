import React from "react";
import { MdArrowDropDown, MdOutlineSpaceDashboard } from "react-icons/md";
import { BiHome, BiUser } from "react-icons/bi";
import {
  AiOutlineCalendar,
  AiOutlineSetting,
  AiOutlineTable,
} from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { TiArrowUnsorted } from "react-icons/ti";
import { HiOutlineTemplate, HiOutlineUsers } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { MdGridView } from "react-icons/md";

const Workspace = () => {
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
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side shadow-md">
          <label htmlFor="dashboardDawer" className="drawer-overlay"></label>
          <ul className=" p-4 w-80  menu bg-base-100 ">
            <Link to="/workspace/boards">
              {" "}
              <li className="shadow-sm mb-2 rounded-full ">
                <a className="font-bold">
                  {" "}
                  <MdOutlineSpaceDashboard />
                  Boards
                </a>
              </li>
            </Link>
            <div className="collapse shadow-sm mb-2 ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title shadow-sm mb-2 rounded-full  flex items-center gap-3 font-bold">
                {" "}
                <HiOutlineTemplate />
                All Members<TiArrowUnsorted className="ml-16"></TiArrowUnsorted>
              </div>
              <div className="collapse-content">
                <Link to="/workspace/members">
                  <li className="shadow-sm mb-2 rounded-full">
                    <a>Business</a>
                  </li>
                </Link>
                <Link to="/workspace/members">
                  <li className="shadow-sm mb-2 rounded-full">
                    <a>Design</a>
                  </li>
                </Link>
                <Link to="/workspace/members">
                  <li className="shadow-sm mb-2 rounded-full">
                    <a>Education</a>
                  </li>
                </Link>
                <Link to="/workspace/members">
                  <li className="shadow-sm mb-2 rounded-full">
                    <a>Engineering</a>
                  </li>
                </Link>
                <Link to="/workspace/members">
                  <li className="shadow-sm mb-2 rounded-full">
                    <a>Marketing</a>
                  </li>
                </Link>
                <Link to="/workspace/members">
                  <li className="shadow-sm mb-2 rounded-full">
                    <a>HR & Opetations</a>
                  </li>
                </Link>
              </div>
            </div>
            <Link to="/workspace/members">
              <li className="shadow-sm mb-2 rounded-full font-bold">
                <a>
                  {" "}
                  <BiHome />
                  Home
                </a>
              </li>
            </Link>
            <div className="divider"></div>
            <div className="flex items-center ">
              <h3 className="mb-2 font-medium">Workspace</h3>
              <button className=" ml-32 hover:bg-zinc-300 p-2 rounded-full">
                <AiOutlinePlus />
              </button>
            </div>
            <div className="collapse  hover:bg-zinc-100 shadow-sm mb-2 ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title mb-2 flex items-center gap-3 font-bold">
                {" "}
                <img
                  className="w-6 rounded-sm"
                  src="https://placeimg.com/192/192/people"
                  alt=""
                />
                Anonymous <TiArrowUnsorted className="ml-16"></TiArrowUnsorted>
              </div>
              <div className="collapse-content">
                <Link to="/workspace/members">
                  <li className="shadow-sm mb-2 rounded-full">
                    <a>
                      <MdOutlineSpaceDashboard />
                      Boards
                    </a>
                  </li>
                </Link>
                <Link to="/workspace/members">
                  <li className="shadow-sm mb-2 rounded-full">
                    <a>
                      <GiSelfLove /> Highlights
                    </a>
                  </li>
                </Link>
                <Link to="/workspace/members">
                  <li className="shadow-sm mb-2 rounded-full">
                    <a>
                      <MdGridView />
                      Views
                    </a>
                  </li>
                </Link>
                <Link to="/workspace/members">
                  <li className="shadow-sm mb-2 rounded-full">
                    <a>
                      <HiOutlineUsers />
                      Members
                    </a>
                  </li>
                </Link>
                <Link to="/workspace/settings">
                  {" "}
                  <li className="shadow-sm mb-2 rounded-full">
                    <a>
                      {" "}
                      <AiOutlineSetting />
                      Settings
                    </a>
                  </li>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
