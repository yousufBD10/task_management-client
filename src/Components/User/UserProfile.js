import React, { useContext, useEffect, useState } from 'react';
import { FaGraduationCap, FaHome, FaPen } from "react-icons/fa";
import { GiLovers } from 'react-icons/gi';
import { MdCastForEducation, MdLocationOn } from 'react-icons/md';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';
import EditeProfile from './EditeProfile';

const UserProfile = () => {
 const {user} =    useContext(AuthContext);
 const [modal,setModal] = useState(true);
    const [refetch ,setRefetch] = useState(true);
    const [update,setUpdate] = useState({})
  useEffect(()=>{
     fetch(process.env.REACT_APP_SERVER_URL + `/updateprofile?email=${user?.email}`,{
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }})
      .then(res =>res.json())
    .then(data=>{
      setUpdate(data);
      
      toast.success('Users update successful')
       
    })
  },[user?.email, refetch])
   
    return (
        <div className="px-6 lg:w-3/4 m-auto mt-8">
        <div className="lg:flex justify-between">
          <div className="flex  gap-5">
            <div className="avatar mr-3">
              <div className=" w-48 rounded-full    ring-offset-base-100 ring-offset-2">
                {user?.photoURL ? (
                  <img src={user?.photoURL} alt="f" />
                ) : (
                  <img src={user?.photoURL} alt="f" />
                )}
              </div>
            </div>
           <div className='mt-7'>
             <h1 className="text-2xl font-bold mt-5 text-black">{user?.displayName}</h1>
            <h1 className="flex items-center gap-3 font-bold text-black text-2xl mt-5"><FaHome></FaHome>{update?.address}</h1>
            </div>
          </div>
  
          <div className="flex -mt-4 pt-32  ">
              
            
              <label  htmlFor="my-modal-4"  className="flex items-center font-bold text-black gap-2 btn btn-ghost">Edit profile <FaPen></FaPen></label>
          </div>
        </div>
        {modal &&   <EditeProfile setRefetch={setRefetch} setModal={setModal}></EditeProfile>}
         
        <div className="divider"></div>
  
        <div>
           <h1 className="text-3xl font-bold my-6 text-black">About</h1>
           <h1 className="flex items-center gap-3 my-6 text-black font-bold "><MdCastForEducation></MdCastForEducation>  Former <span className=' font-bold '>{update?.workplace}</span> </h1>
           <h1 className=" flex items-center gap-3 text-black font-bold my-6"><FaGraduationCap></FaGraduationCap> Studies at<span className=' font-bold '>{update?.univerty}</span> </h1>
           <h1 className=" flex items-center gap-3 my-6 text-black font-bold "><FaHome></FaHome> Live at <span className=' font-bold '>{update?.address}</span></h1>
           <h1 className=" flex items-center gap-3  my-6 text-black font-bold "><MdLocationOn></MdLocationOn> From at <span className=' font-bold '>{update?.come}</span> </h1>
         
           <h1 className=" flex items-center gap-3  my-6 text-black font-bold "><GiLovers></GiLovers> Relationship <span className=' font-bold '>{update?.relationship}</span> </h1>
  
        </div>
      </div>
    );
};
export default UserProfile;