import React from 'react';
import { BiBookmarkAlt, BiClipboard, BiTask } from 'react-icons/bi';

const UserDashboard = () => {
    return (
        <div>
        <div className='flex items-cneter justify-around bg-blue-300 mt-0 rounded-b-xl'>
            <div className='mt-12 text-black'>
                <h1 className='text-4xl mb-3'>Welcome to professional dashboard</h1>
                <p  className='text-xl '>Insights, management tools and creation - all in one place.</p>
            </div>
            <div> 
                <img className='w-64' src="https://www.processmaker.com/wp-content/uploads/2020/04/ProcessMakerBAM-03.png" alt="" />
            </div>
        </div>

        <div className=' bg-violet-400 rounded-lg p-4 mt-16 '>
        <h1 className='text-2xl my-5 '>Dashboard Overview</h1>
       <h1 className='mb-3'>Create date: -----</h1>
        <div className='flex gap-4'>
            <div className='bg-slate-100 w-80 rounded-lg p-3'>
                <h1 className='flex items-center gap-4'> <BiBookmarkAlt/> Workspaces</h1>
                <p className="text-3xl text-bold">0</p>
            </div>
            <div className='bg-slate-100 w-80 rounded-lg p-3'>
                <h1 className='flex items-center gap-4'> <BiClipboard/> Boards</h1>
                <p className="text-3xl text-bold">0</p>
            </div>
            <div className='bg-slate-100 w-80 rounded-lg p-3'>
                <h1 className='flex  items-center gap-4'> <BiTask/> Tasks</h1>
                <p className="text-3xl text-bold">0</p>
            </div>
          
          
        </div>
        </div>
        
        </div>
    );
};

export default UserDashboard;