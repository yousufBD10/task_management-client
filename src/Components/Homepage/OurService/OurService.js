import React from 'react';

const OurService = () => (
    <div className='mb-24'>
        <div className='text-center mt-24'>
            <h3 className='font-bold text-blue-400'>BUILT FOR EVERYONE</h3>
            <h1 className='text-3xl font-serif mt-5 font-bold'>See how TaskMaster can work for you.</h1>
        </div>
        <div className='justify-around lg:flex lg:px-32 py-16'>
        <div><button className="bg-white hover:bg-emerald-300 font-bold px-2 h-8 border rounded-lg">Project Management</button></div>
        <div>
        <button className="bg-white hover:bg-emerald-300 font-bold px-2 h-8 border rounded-lg">Engineering</button>
        </div>
        <div>
        <button className="bg-white hover:bg-emerald-300 font-bold px-2 h-8 border rounded-lg">Sales</button>
        </div>
      <div>
      <button className="bg-white hover:bg-emerald-300 font-bold px-2 h-8 border rounded-lg">Marketing</button>
      </div>
       <div>
       <button className="bg-white hover:bg-emerald-300 font-bold px-2 h-8 border rounded-lg">Product</button>
       </div>
        <div>
        <button className="bg-white hover:bg-emerald-300 font-bold px-2 h-8 border rounded-lg">Design</button>
        </div>
        <div>
        <button className="bg-white hover:bg-emerald-300 font-bold px-2 h-8 border rounded-lg">Finance</button>
        </div>
       <div>
       <button className="bg-white hover:bg-emerald-300 font-bold px-2 h-8 border rounded-lg">HR</button>
       </div>
        <div>
        <button className="bg-white hover:bg-emerald-300 font-bold px-2 h-8 border rounded-lg">IT</button>
        </div> 
        </div>
            <div className='grid grid-cols-2 lg:px-12 items-center'>
                  <div className=' lg:px-16 '>
                       <div className='flex'>
                       <div>
                        <img className='lg:w-16 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/709/709612.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold px-2'>Visualize & plan</h2>
                            <h4 className='font-semibold px-2 '>Manage any project from start to finish with highly customizable views that make project planning a breeze.</h4>
                        </div>
                       </div>
                       <div className='flex py-10'>
                       <div>
                        <img className='lg:w-24 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/9482/9482846.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold px-2'>Collaborate</h2>
                            <h4 className='font-semibold px-2 '>Work with your team in real-time with Chat, assign comments for action items, and never miss a beat with notifications that bring everything in one place</h4>
                        </div>
                       </div>
                       <div className='flex'>
                       <div>
                        <img className='lg:w-16 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/4862/4862463.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold px-2'>Track progress</h2>
                            <h4 className='font-semibold px-2 '>Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</h4>
                        </div>
                       </div>
                       <div className='px-12 mt-12'>
                <button className='border rounded-lg  hover:text-white  lg:h-12 text-xl font-bold lg:w-36 border-gray-500 bg-gray-200 hover:bg-blue-600'>Get Start</button>
            </div>
                    </div>
                    <div>
                    <img src="https://assets.plan.io/images/blog/what-makes-a-great-project-manager.png" alt="" />
                    </div>
            </div>
            
    </div>
);

export default OurService;


