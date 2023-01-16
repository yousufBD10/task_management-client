import React from 'react';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineSetting, AiOutlineTable } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Workspace = () => {
    return (
        <div className=' mt-3'>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side  shadow-md">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
    
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
        </div>
    );
};

export default Workspace;