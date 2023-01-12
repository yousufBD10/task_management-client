import React from 'react';
<<<<<<< HEAD
import taskMaster from '../assets/banner/taskMaster.png';



const Header = () => {
    return (
        <div className='hello bg-gradient-to-r from-blue-700 to-indigo-300 lg:h-[84vh] grid lg:grid-cols-2 px-12'>
            <div>
              
                <h1 className='text-6xl font-serif font-bold mt-12 pl-6'>One app to <br /> replace them all.</h1>
                <h3 className='text-xl font-semibold font-serif pl-6 mt-8'>We’re more than a doc. Or a table. Customize Notion <br /> to work the way you do.</h3>
              <form className='pl-6'>
              <input type="text" placeholder=" Enter your email address" className="input text-black bg-gray-300 mt-12 w-full max-w-xs " /><br />
              <button className="btn btn-outline  hover:bg-blue-500 mt-6 ">Get Started</button>
              </form>
            </div>
            <div>
                    <img className='lg:w-[450px] mx-auto lg:mr-12 lg:mt-8' src={taskMaster} alt="" />
            </div>
        </div>
=======
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <Navbar></Navbar>
>>>>>>> 48fbe36b5bca6190514710e3f8009d8b8869b59b
    );
};

export default Header;