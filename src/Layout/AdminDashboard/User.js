import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const User = () => {
    const {currentWorkspace} = useContext(AuthContext);
   const [allUsers,setAllUsers] = useState([])


    useEffect(()=>{
      fetch(process.env.REACT_APP_SERVER_URL + `/allusers`,{
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
      
      )
      .then((res)=>res.json())
      .then((data)=>setAllUsers(data))
      
    },[])
    // const { data: allUsers = [], refetch } = useQuery({
    //   queryKey: ['allUsers'],
    //   queryFn: async () => {
    //     const res = await fetch(process.env.REACT_APP_SERVER_URL + `/allusers`);
    //     const data = await res.json();
    //     console.log(allUsers);
    //     return data;
    //   },
    // });
    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
         
          <thead>
            <tr>
              <th>
                
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          
          {
            allUsers.map((alluser,i)=>
                <tr key={i}>
              <th>
                
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask rounded-full w-12 h-12">
                      <img src={alluser?.photoURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{alluser?.name}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
               {alluser?.email}
              
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
              <td><button className="bg-red-600 rounded text-white px-2 hover:bg-red-500">Delete</button></td>
            </tr>
            )
          }
          
           
          
          
           
          </tbody>
       
     
          
        </table>
      </div>
    );
};

export default User;