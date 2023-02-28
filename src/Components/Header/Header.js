import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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
        <div className="py-12  grid items-center lg:grid-cols-2 px-12">
            <div><h3 className='text-xl font-semibold font-serif mt-8 text-sky-700'> EASY TASK MANAGEMENT</h3>
                <h1 className='text-6xl font-sans font-bold  mt-5'> <span className=''>Getting things done as a team quickly and easily </span></h1>
                <h3 className='text-xl font-semibold  mt-8 '>We’re more than a doc. Or a table. Customize TaskMaster <br /> to work the way you do.</h3>
                <form onSubmit={handleSubs}>
                    <input type="email" name='email' placeholder="Enter your email address" className="rounded-md input  bg-gray-100 mt-5 w-full max-w-xs input-bordered" /><br />
                    <button type='submit' className="btn btn-outline border-none font-bold  bg-blue-400 hover:bg-blue-700 mt-6 ">Get Started</button>
                </form>
            </div>
            <div>
            
                <img className='lg:w-[650px] mx-auto lg:mr-12' src="/assets/banner/project management.gif" alt="" />
            </div>
        </div>
    );
};

export default Header;
