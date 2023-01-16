import React from 'react';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineSetting, AiOutlineTable } from "react-icons/ai";
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Workspace = () => {
  return (
    <div>
      <Navbar></Navbar>
      <label htmlFor="dashboardDawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

      <div className="drawer drawer-mobile mt-8">
        <input id="dashboardDawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side shadow-md">
          <label htmlFor="dashboardDawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  bg-zinc-100 ">
            <Link to='/workspace/boards' > <li className='shadow-sm mb-2 rounded-full'><a> <MdOutlineSpaceDashboard />Boards</a></li></Link>
            <Link to='/workspace/members'><li className='shadow-sm mb-2 rounded-full'><a> <BiUser />Members</a></li></Link>
            <Link to='/workspace/settings'> <li className='shadow-sm mb-2 rounded-full'><a> <AiOutlineSetting />Settings</a></li></Link>
            <h3 className='mb-2 font-medium'>Workspace views</h3>
            <Link to='/workspace/settings'> <li className='shadow-sm mb-2 rounded-full'><a> <AiOutlineTable />Table</a></li></Link>
            <Link to='/workspace/settings'> <li className='shadow-sm mb-2 rounded-full'><a> <AiOutlineCalendar />Caleder</a></li></Link>
            <h3 className='mb-2 font-medium'>Your boards</h3>
          </ul>
        </div>
      </div>

      {/* <div className=' mt-3'>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side  shadow-md">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80  bg-red-600   text-base-content">
    
     <Link to='/workspace/boards' > <li className='shadow-sm mb-2 rounded-full'><a> <MdOutlineSpaceDashboard/>Boards</a></li></Link>
      <Link to='/workspace/members'><li className='shadow-sm mb-2 rounded-full'><a> <BiUser/>Members</a></li></Link>
     <Link to='/workspace/settings'> <li className='shadow-sm mb-2 rounded-full'><a> <AiOutlineSetting/>Settings</a></li></Link>
     <h3 className='mb-2 font-medium'>Workspace views</h3>
     <Link to='/workspace/settings'> <li className='shadow-sm mb-2 rounded-full'><a> <AiOutlineTable/>Table</a></li></Link>
     <Link to='/workspace/settings'> <li className='shadow-sm mb-2 rounded-full'><a> <AiOutlineCalendar/>Caleder</a></li></Link>
     <h3 className='mb-2 font-medium'>Your boards</h3>
    </ul>
  
  </div>

 
 
</div>
        </div> */}


    </div>
  );
};

export default Workspace;