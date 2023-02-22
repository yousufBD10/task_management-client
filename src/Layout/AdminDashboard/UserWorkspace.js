import React, { useContext, useEffect, useState } from 'react';
import { BiPencil } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';

const UserWorkspace = () => {
     const [id,setId] = useState('');
    const [refetch,setRefetch] = useState(true);
    const { user, reloadWorkspaces, workspaces, setCurrentWorkspace, currentWorkspace } = useContext(AuthContext);
    const setCurrent = (id) => { setCurrentWorkspace(workspaces.find((w) => w._id == id)) }
    useEffect(reloadWorkspaces, [user]);
    console.log(workspaces);
    const handleDelete = (data)=>{
        setId(data)
    }
      useEffect(()=>{
        fetch(process.env.REACT_APP_SERVER_URL + `/delete/${id}`, {
            method: 'DELETE', 
             headers: {
               authorization: `bearer ${localStorage.getItem('accessToken')}`
             }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
              setRefetch(false)
              // refetch()
              reloadWorkspaces();
                toast.success(`Workspace deleted successfully`)
            }
        });
      },[workspaces,id,reloadWorkspaces])
      

     
    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
         
          <thead>
            <tr>
              <th>
                
              </th>
              <th>Name</th>
              <th>Action</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          
          {
            workspaces?.map((workspace,i)=>
                <tr key={i}>
              <th>
                
              </th>
              <td>
                <div className="flex items-center space-x-3">
                 <div>
                    <div className="font-bold">{workspace?.name}</div>
                  </div>
                </div>
              </td>
              <th>
              <a href='#edit-workspace' className='hover:bg-slate-200 text-black rounded-lg cursor-pointer p-2'> Edit </a>
                {/* <button className="btn btn-ghost btn-xs">Edit</button> */}
              </th>
              <td><button onClick={()=>handleDelete(workspace?._id)} className="bg-red-600 rounded text-white px-2 hover:bg-red-500">Delete</button></td>
            </tr>
            )
          }
            </tbody>
       </table>
      </div>
    );
};

export default UserWorkspace;