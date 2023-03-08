
import {
  FaUserAlt,
  FaWhatsappSquare,
  FaComments,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";


const Contact = () => {
const {theme} = useContext(AuthContext);
  const handleemail = even =>{
    const form = even.target;
    console.log(form.name,form.email,form.message);
    form.reset();
  }
return (
   <div className={theme?.bg}>
     <div className="my-9 min-h-screen">
    <div >
    <h1  className="text-7xl text-white text-center font-bold">
        GET <span className="text-blue-400"> IN TOUCH</span>
      </h1>
      <p  className="  text-center mt-4">
        I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS{" "}
      </p>
    </div>

      <div  className="lg:flex items-center  mt-8 lg:ml-16 justify-center">
        <div className="w-2/4 ml-3">
          <div className="mb-4">
            <p className="text-xl font-bold">Phone</p>
            <div className="flex items-center">
              <FaWhatsappSquare className="mr-2" />
              <p> +8801756858584</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-xl font-bold">Email</p>
            <div className="flex items-center">
              <MdEmail className="mr-2" />
              <p>team.anonymous608.5@gmail.com</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xl font-bold">LinkedIn</p>
            <div className="flex items-center">
              <FaLinkedin className="mr-2" />
              <p>linkedin.com/yousufali</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xl font-bold">Phone</p>
            <div className="flex items-center">
              <FaGithub className="mr-2" />
              <p>github.com/yousufbf10</p>
            </div>
          </div>
        </div>
        <form 
         action="https://formspree.io/f/mdojqbdr"
  method="POST" 
   className="w-full mt-6 px-11">
          <p className="">
            If you have any suggestion, project or even you want to say Hello..
            please fill out the form below and I will reply you shortly.
          </p>
          <div  className="lg:flex   mt-10 ">
            <div className="text-white input my-5 bg-gray-600   rounded-full mr-8 w-full flex items-center  ">
              <div className="text-slate-200">
                {" "}
                <FaUserAlt />
              </div>
              
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name "
                className="input bg-gray-600 border-none rounded-full  w-full "
              />
            </div>

            <div className="text-white input bg-gray-600 my-5   rounded-full w-full flex items-center  ">
              <div className="text-slate-200">
                {" "}
                <MdEmail />
              </div>
            
              <input
              required
                type="email"
                name="email"
                placeholder="example@email.com "
                className="input bg-gray-600 border-none rounded-full  w-full "
              />
            </div>
          </div>
          <div className=" text-white bg-gray-600 border-none rounded-3xl w-full mt-8 textarea">
            <FaComments className="text-white text-2xl mt-4" />
            <textarea
            name='message'
            type='text'
              className="textarea w-full  bg-gray-600 h-32 "
              placeholder="Bio"
              required
            ></textarea>
          </div>
          <button onClick={handleemail} type='submit' className="btn lg:w-auto w-full border-none rounded-full mt-4 bg-blue-500">
            {" "}
            <FiSend className="mr-4"></FiSend> Send Message{" "}
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
