import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import React from 'react';


const User = () => {

  const { data: allUsers = [], refetch } = useQuery({
      queryKey: ['allDatas'],
      queryFn: async () => {
        const res = await fetch(process.env.REACT_APP_SERVER_URL + `/allDatas`,{
            method: "GET",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }},
        );
        const data = await res.json();
        console.log(allUsers);
        return data;
      },
    });
   
const handleDelete = (data)=>{
  console.log(data);

  fetch(process.env.REACT_APP_SERVER_URL + `/delete/${data}`, {
            method: 'DELETE', 
             headers: {
               authorization: `bearer ${localStorage.getItem('accessToken')}`
             }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
              refetch()
                toast.success(`Users deleted successfully`)
            }
        })
}
    
  
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
            allUsers[0]?.map((alluser,i)=>
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
              <td><button onClick={()=>handleDelete(alluser._id)} className="bg-red-600 rounded text-white px-2 hover:bg-red-500">Delete</button></td>
            </tr>
            )
          }
          
           
          
          
           
          </tbody>
       
     
          
        </table>
      </div>
    );
};

export default User;