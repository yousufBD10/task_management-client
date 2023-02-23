import { useQuery } from '@tanstack/react-query';
import React, { useContext} from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';

const UserAllTask = () => {
    
  const {user} = useContext(AuthContext);

    const { data: alluserdata = [] ,refetch} = useQuery({
      queryKey: [user?.uid],
      queryFn: async () => {
        const res = await fetch(process.env.REACT_APP_SERVER_URL +  `/alluserdatas/${user?.uid}`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          }
        },
        );
        const data = await res.json();
        return data;
      },
    });
    const handleDelete = (id)=>{
      
      fetch(process.env.REACT_APP_SERVER_URL + `/delete/task/${id}`, {
        method: 'DELETE', 
         headers: {
           authorization: `bearer ${localStorage.getItem('accessToken')}`
         }
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
          refetch()
            toast.success(`Tasks deleted successfully`)
        }
    });
    };

     return (
      
       <div className="overflow-x-auto p-4">
        <table className="table w-full">
         
          <thead>
            <tr>
              <th>
                
              </th>
              <th>No</th>
              <th>Name</th>
              <th>Delete</th>
             
            </tr>
          </thead>
          <tbody>
          
          {
            alluserdata[1]?.map((task,i)=>
                <tr key={i}>
              <th>
                
              </th>
              <td>
                <div className="flex items-center space-x-3">
                 <div>
                    <div className="font-bold">{i + 1}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                 <div>
                    <div className="font-bold">{task?.note}</div>
                  </div>
                </div>
              </td>
             
              <td><button onClick={()=>handleDelete(task?._id)} className="bg-red-600 rounded text-white px-2 hover:bg-red-500">Delete</button></td>
            </tr>
            )
          }
            </tbody>
       </table>
      </div>
   
   
    );
};

export default UserAllTask;