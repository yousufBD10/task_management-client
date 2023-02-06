import { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const Header = () => {
    const {setSubscribes} =  useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubs = (e)=>{
        e.preventDefault();
        navigate('/register')
        setSubscribes(e.target.email.value);
        console.log(e.target.email.value);
    }
    return (
        <div className="my-10 grid items-center lg:grid-cols-2 px-12">
            <div>
                <h1 className='text-6xl  font-serif font-bold mt-12'> <span className='text-red-600'>One app to</span> <br /> replace them all.</h1>
                <h3 className='text-xl   font-semibold font-serif mt-8'>We’re more than a doc. Or a table. Customize TaskMaster <br /> to work the way you do.</h3>
                <form onSubmit={handleSubs}>
                    <input type="email" name='email' placeholder="Enter your email address" className="rounded-md input text-black bg-gray-300 mt-12 w-full max-w-xs input-bordered" /><br />
                    <button type='submit' className="btn btn-outline  hover:bg-blue-500 mt-6 ">Get Started</button>
                </form>
            </div>
            <div>
                <img className='lg:w-[650px] mx-auto lg:mr-12' src="/assets/banner/SMS2.gif" alt="" />
            </div>
        </div>
    );
};

export default Header;
