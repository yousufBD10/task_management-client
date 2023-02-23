import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";


const UserBoard = () => {
  const { user, reloadWorkspaces } = useContext(AuthContext);
  useEffect(reloadWorkspaces, [user]);

  const { data: alluserdata = [], refetch } = useQuery({
    queryKey: [`/alluserdatas/${user?.uid}`],
    queryFn: async () => {
      const res = await fetch(process.env.REACT_APP_SERVER_URL + `/alluserdatas/${user?.uid}`, {
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
  const handleDelete = (id) => {
    fetch(process.env.REACT_APP_SERVER_URL + `/delete/board/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Board deleted successfully`)
        }
      });
  }

  return (
    <div className="overflow-x-auto w-full p-4">
      <table className="table w-full">

        <thead>
          <tr>
            <th>

            </th>
            <th>No.</th>
            <th>Name</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>

          {
            alluserdata[0]?.map((workspace, i) =>
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

export default UserBoard;