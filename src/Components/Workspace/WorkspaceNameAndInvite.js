import React from 'react';
import { BiLock, BiPencil } from "react-icons/bi";
import {  FiUserPlus } from "react-icons/fi";

const WorkspaceNameAndInvite = () => {
    return (
       <div>
         <div className='lg:flex justify-between mt-2 px-5'>
            <div className='flex items-center gap-2'>
            <div className="avatar">
  <div className="w-20 rounded">
    <img src="https://placeimg.com/192/192/people" />
  </div>
</div> 
<div>
    <h1 className='text-xl flex items-center gap-2 font-medium'>Anonymous <BiPencil></BiPencil> </h1>
    <p className='flex items-center gap-2'><BiLock></BiLock> Private</p>
</div>
            </div>
            <button className='flex mt-12 items-center gap-2 bg-blue-600 btn btn-primary btn-sm rounded-sm'><FiUserPlus></FiUserPlus> Invite Workspace members</button>
        </div>
        <div className="divider px-5"></div>
       </div>
    );
};

export default WorkspaceNameAndInvite;