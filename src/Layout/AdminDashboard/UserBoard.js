import  {useContext, useEffect,useState}  from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import  { AuthContext } from "../../Context/UserContext";


const UserBoard = () => {
    const board = useLoaderData();
    const [refetch,setRefetch] = useState(true);
    const { workspaces,setCurrentWorkspace ,user,reloadWorkspaces} = useContext(AuthContext);
    const setCurrent = (id) => { setCurrentWorkspace(workspaces.find((w) => w._id == id)) }
    useEffect(reloadWorkspaces, [user]);
    
    const handleDelete = (id)=>{
        fetch(process.env.REACT_APP_SERVER_URL + `/delete/board/${id}`, {
          method: 'DELETE', 
           headers: {
             authorization: `bearer ${localStorage.getItem('accessToken')}`
           }
      })
      .then(res => res.json())
      .then(data => {
          if(data.deletedCount > 0){
          setRefetch(false);
         
            toast.success(`Board deleted successfully`)
          }
      });
    }
      useEffect(()=>{

      },[refetch])
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
            board?.map((workspace,i)=>
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

export default UserBoard;