import React, { useState } from 'react';

const OurService = () => {
    const [Management, setManagement] = useState(false)
    const [Engineering, setEngineering] = useState(false)
    const [Sales, setSales] = useState(false)
    const [Marketing, setMarketing] = useState(false)
    const [Product, setProduct] = useState(false)
    const [Design, setDesign] = useState(false)
    const [Finance, setFinance] = useState(false)
    const [HR, setHR] = useState(false)
    const [IT, setIT] = useState(false)
    
    return (

    <div className='lg:mb-24  py-16 border border-none '>
        <div className='text-center mt-24'>
            <h3 className='font-bold text-blue-900'>BUILT FOR EVERYONE</h3>
            <h1 className='text-3xl font-serif mt-5 text-black  font-bold'>See how TaskMaster can work for you.</h1>
        </div>

        <div className='justify-around lg:flex lg:px-32 py-16'>
        <div><button onClick={() =>setManagement(true) || setEngineering(false) || setSales(false) || setMarketing(false) || setProduct(false) ||  setDesign(false) || setFinance(false) || setHR(false) || setIT(false)}  className="bg-indigo-500 text-black hover:bg-gray-300 font-bold w-28  h-8   rounded-sm shadow-lg">Project </button></div>

        <div>
        <button onClick={() => setEngineering(true) || setSales(false) || setMarketing(false) || setProduct(false) ||  setDesign(false) || setFinance(false) || setHR(false) || setIT(false) || setManagement(false) }  className="bg-indigo-500 text-black  hover:bg-gray-300 font-bold w-28  h-8  rounded-sm shadow-lg ml-1">Engineering</button>
        </div>

        <div>
        <button onClick={() => setSales(true) || setEngineering(false) || setMarketing(false) || setProduct(false) ||  setDesign(false) || setFinance(false) || setHR(false) || setIT(false) || setManagement(false) } className="bg-indigo-500 text-black  hover:bg-gray-300 font-bold w-28  h-8  rounded-sm shadow-lg ml-1">Sales</button>
        </div>

      <div>
      <button  onClick={() => setMarketing(true) || setSales(false) || setEngineering(false) ||  setProduct(false) ||  setDesign(false) || setFinance(false) || setHR(false) || setIT(false) || setManagement(false) } className="bg-indigo-500 text-black  hover:bg-gray-300 font-bold w-28  h-8  rounded-sm shadow-lg ml-1">Marketing</button>
      </div>

       <div>
       <button  onClick={() => setProduct(true) ||setMarketing(false) || setSales(false) || setEngineering(false) ||    setDesign(false) || setFinance(false) || setHR(false) || setIT(false) || setManagement(false) } className="bg-indigo-500 text-black  hover:bg-gray-300 font-bold w-28  h-8  rounded-sm ml-1 shadow-lg">Product</button>
       </div>

        <div>
        <button className="bg-indigo-500 text-black  hover:bg-gray-300 font-bold w-28 ml-1 h-8 rounded-sm shadow-lg">Design</button>
        </div>

        <div>
        <button className="bg-indigo-500 text-black  hover:bg-gray-300 font-bold w-28  ml-1 h-8 rounded-sm shadow-lg">Finance</button>
        </div>

       <div>
       <button className="bg-indigo-500 text-black  hover:bg-gray-300 font-bold w-28  ml-1 h-8 rounded-sm shadow-lg">HR</button>
       </div>

        <div>
        <button className="bg-indigo-500 text-black  hover:bg-gray-300 font-bold w-28  h-8 ml-1 rounded-sm shadow-lg">IT</button>
        </div> 
        </div>

{/* -----------------------Project Management --------------------- */}

            {Management && <div className='grid grid-cols-2 lg:px-12 items-center'>
                  <div className=' lg:px-16 '>
                       <div className='flex'>
                       <div>
                        <img className='lg:w-24 p-2 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/709/709612.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold text-black px-2'>Visualize & plan</h2>
                            <h4 className='font-semibold text-black px-2 '>Manage any project from start to finish with highly customizable views that make project planning a breeze.</h4>
                        </div>
                       </div>
                       <div className='flex py-10'>
                       <div>
                        <img className='lg:w-36 p-2 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/9482/9482846.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold text-black px-2'>Collaborate</h2>
                            <h4 className='font-semibold text-black px-2 '>Work with your team in real-time with Chat, assign comments for action items, and never miss a beat with notifications that bring everything in one place</h4>
                        </div>
                       </div>
                       <div className='flex'>
                       <div>
                        <img className='lg:w-24 p-2 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/4862/4862463.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold text-black px-2'>Track progress</h2>
                            <h4 className='font-semibold text-black px-2 '>Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</h4>
                        </div>
                       </div>
                     
                    </div>
                    <div>
                    <img className='lg:w-96 mx-auto' src="https://cdn-icons-png.flaticon.com/512/1934/1934025.png" alt="" />
                    </div>
            </div>}
{/* ---------------------------Engineering--------------------- */}

{ Engineering &&<div className='grid grid-cols-2 lg:px-12 items-center'>
                  <div className=' lg:px-16 '>
                       <div className='flex'>
                       <div>
                        <img className='lg:w-36 p-2 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/6111/6111884.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold text-black px-2'>Develop better products, faster.</h2>
                            <h4 className='font-semibold text-black px-2 '>From backlog to release, prioritize and plan your initiatives, epics, tasks, and docs—all on a shared platform with your key stakeholders.</h4>
                        </div>
                       </div>
                       <div className='flex py-10'>
                       <div>
                        <img className='lg:w-32 p-2 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/8901/8901393.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold text-black px-2'>Visibility—Without the busy work</h2>
                            <h4 className='font-semibold text-black px-2 '>Agile dashboards provide better insights, automatic progress tracking and updates, and reduce redundant meetings.</h4>
                        </div>
                       </div>
                       <div className='flex'>
                       <div>
                        <img className='lg:w-36 p-2 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold text-black px-2'>Seamless DevOps integrations</h2>
                            <h4 className='font-semibold text-black px-2 '>Connect your existing development workflows with native integrations for GitHub, GitLab Bitbucket, Sentry, Slack, Figma, and more.</h4>
                        </div>
                       </div>
                     
                    </div>
                    <div>
                    <img className='lg:w-96 mx-auto' src="https://cdn-icons-png.flaticon.com/512/609/609034.png" alt="" />
                    </div>
            </div>}

            {/* -----------------------Sales --------------------- */}

            {Sales && <div className='grid grid-cols-2 lg:px-12 items-center'>
                  <div className=' lg:px-16 '>
                       <div className='flex'>
                       <div>
                        <img className='lg:w-32 p-2 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/3214/3214710.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold text-black px-2'>Automate sales processes</h2>
                            <h4 className='font-semibold text-black px-2 '>Keep deals moving through your pipeline with automations that assign leads, track follow-up, and trigger lead status updates for your team.</h4>
                        </div>
                       </div>
                       <div className='flex py-10'>
                       <div>
                        <img className='lg:w-28 p-2 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/9504/9504140.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl text-black font-bold px-2'>Manage accounts</h2>
                            <h4 className='font-semibold text-black px-2 '>Track prospects, clients, and deals on a List, Board, or Table view that make it easy to visualize your accounts at a glance.</h4>
                        </div>
                       </div>
                       <div className='flex'>
                       <div>
                        <img className='lg:w-28 p-2 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/2364/2364820.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl text-black font-bold px-2'>Real-time reporting</h2>
                            <h4 className='font-semibold text-black px-2 '>See how deals track over time, who is closing, and how your team is performing overall with customizable Dashboards.</h4>
                        </div>
                       </div>
                     
                    </div>
                    <div>
                    <img className='lg:w-96 mx-auto' src="https://cdn-icons-png.flaticon.com/512/3505/3505655.png" alt="" />
                    </div>
            </div>}

            {/* ----------------------- marking management --------------------- */}

            {Marketing && <div className='grid grid-cols-2 lg:px-12 items-center'>
                  <div className=' lg:px-16 '>
                       <div className='flex'>
                       <div>
                        <img className='lg:w-32 p-2 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/7670/7670372.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold text-black px-2'>Campaign management</h2>
                            <h4 className='font-semibold text-black px-2 '>Plan your marketing campaigns on a flexible timeline that makes it easy to track promotions, ad campaigns, events, and more.</h4>
                        </div>
                       </div>
                       <div className='flex py-10'>
                       <div>
                        <img className='lg:w-28 p-2 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/809/809522.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl text-black font-bold px-2'>Collaborate on marketing assets</h2>
                            <h4 className='font-semibold text-black px-2 '>Draft and edit documents with your team, annotate design files, and manage all of your marketing assets in one place.</h4>
                        </div>
                       </div>
                       <div className='flex'>
                       <div>
                        <img className='lg:w-36 p-2 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/661/661512.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl text-black font-bold px-2'>Content calendars</h2>
                            <h4 className='font-semibold text-black px-2 '>Visualize your content schedule on a calendar with dates, assignees, and Custom Statuses that make it easy to understand where your content stands at a glance.</h4>
                        </div>
                       </div>
                     
                    </div>
                    <div>
                    <img className='lg:w-96 mx-auto' src="https://cdn-icons-png.flaticon.com/512/9609/9609568.png" alt="" />
                    </div>
            </div>}

            {/* -----------------------Product --------------------- */}

            {Product && <div className='grid grid-cols-2 lg:px-12 items-center'>
                  <div className=' lg:px-16 '>
                       <div className='flex'>
                       <div>
                        <img className='lg:w-36 p-2 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/232/232587.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl text-black font-bold px-2'>Prioritize, Plan, and Deliver</h2>
                            <h4 className='font-semibold text-black px-2 '>Consolidate all feedback, ideas, epics, and sprints into a unified  product roadmap—providing stakeholders full context and visibility into what's coming next. </h4>
                        </div>
                       </div>
                       <div className='flex py-10'>
                       <div>
                        <img className='lg:w-28 p-2 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/2040/2040514.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl text-black font-bold px-2'>Customize your workflows</h2>
                            <h4 className='font-semibold text-black px-2 '>Create custom agile workflows tailor-fit for product management, and automate handoffs to design and engineering.</h4>
                        </div>
                       </div>
                       <div className='flex'>
                       <div>
                        <img className='lg:w-32 p-2 bg-white border rounded-lg hover:bg-gray-300' src="https://cdn-icons-png.flaticon.com/512/9430/9430155.png" alt=""  />
                        </div>
                        <div>
                            <h2 className='text-2xl text-black font-bold px-2'>All-in-one platform</h2>
                            <h4 className='font-semibold text-black px-2 '>Connect product briefs, whiteboards, docs, and more directly to your epics and stories for better visibility—without the busy work. </h4>
                        </div>
                       </div>
                      
                    </div>
                    <div>
                    <img className='lg:w-96 mx-auto' src="https://cdn-icons-png.flaticon.com/512/1474/1474674.png" alt="" />
                    </div>
            </div>}
            
    </div>
    );
};

export default OurService;


