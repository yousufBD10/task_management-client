import React, { useContext, useEffect, useState } from 'react';
import { BiPencil } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';

const UserWorkspace = () => {
  const [refetch, setRefetch] = useState(true);
  const { user, reloadWorkspaces, workspaces } = useContext(AuthContext);
  useEffect(reloadWorkspaces, [user]);

  const handleDelete = (id) => {
    fetch(process.env.REACT_APP_SERVER_URL + `/delete/workspace/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          setRefetch(false)
          // refetch()
          reloadWorkspaces();
          toast.success(`Workspace deleted successfully`)
        }
      });
  }
  useEffect(() => {

  }, [workspaces, refetch, reloadWorkspaces])



  return (
    <div className="overflow-x-auto w-full p-4">
      <table className="table w-full">

        <thead>
          <tr>
            <th>
              No.
            </th>
            <th>Name</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>

          {
            workspaces?.map((workspace, i) =>
              <tr key={i}>
                <th>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{i + 1}</div>
                    </div>
                  </div>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{workspace?.name}</div>
                    </div>
                  </div>
                </td>

                <td><button onClick={() => handleDelete(workspace?._id)} className="bg-red-600 rounded text-white px-2 hover:bg-red-500">Delete</button></td>

              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default UserWorkspace;