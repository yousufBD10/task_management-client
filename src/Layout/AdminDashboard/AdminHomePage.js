import React from "react";
import {HiViewBoards} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiTask} from 'react-icons/bi'
import {IoIosBriefcase} from 'react-icons/io'
import { useQuery } from "@tanstack/react-query";

const AdminHomePage = () => {
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ['allusers'],
    queryFn: async () => {
      const res = await fetch(process.env.REACT_APP_SERVER_URL + `/allusers`,{
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          }},
      );
      const data = await res.json();
      return data;
    },
  });
  const { data: allTasks = [] } = useQuery({
    queryKey: ['alltasks'],
    queryFn: async () => {
      const res = await fetch(process.env.REACT_APP_SERVER_URL + `/alltasks`,{
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          }},
      );
      const data = await res.json();
      return data;
    },
  });
  const { data: allBoards = [] } = useQuery({
    queryKey: ['allboards'],
    queryFn: async () => {
      const res = await fetch(process.env.REACT_APP_SERVER_URL + `/allboards`,{
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          }},
      );
      const data = await res.json();
      return data;
    },
  });
  const { data: allWorkspace = [] } = useQuery({
    queryKey: ['allworkspace'],
    queryFn: async () => {
      const res = await fetch(process.env.REACT_APP_SERVER_URL + `/allworkspace`,{
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          }},
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <div className=" ml-1 lg:flex grid md:grid-cols-3 lg:grid-cols-4 gap-5    ">
     
       <div className="bg-green-500 rounded-md  text-white w-72 mb-4 shadow-xl">
          <div className="flex ml-2  justify-between">
          <div className="mt-3">
          <p className="">{allUsers.length}</p>
          <h2 className="card-title">Total Members</h2>
          </div>
          <div className="text-4xl mt-3 mr-3">   < AiOutlineUser/></div>
          </div>
          <figure> <img src="../../../public/assets/banner/graph.png" alt="" /></figure>
          <img className="text-white" src="graph.png" alt="" />
        </div>

       <div className="bg-pink-500 rounded-md mb-4  text-white w-72  shadow-xl">
          <div className="flex ml-2  justify-around">
          <div className="mt-3">
          <p className="">{allBoards.length}</p>
          <h2 className="card-title">Total Boards</h2>
          </div>
        <div className="text-4xl mt-3 mr-3">   < HiViewBoards/></div>
          </div>
          <figure> <img src="../../../public/assets/banner/graph.png" alt="" /></figure>
          <img className="text-white" src="graph.png" alt="" />
        </div>

       <div className="bg-red-500 rounded-md mb-4  text-white w-72  shadow-xl">
          <div className="flex ml-2  justify-between">
          <div className="mt-3">
          <p className="">{allTasks.length}</p>
          <h2 className="card-title">Total Tasks</h2>
          </div>
          <div className="text-4xl mt-3 mr-3">   < BiTask/></div>
          </div>
          <figure> <img src="../../../public/assets/banner/graph.png" alt="" /></figure>
          <img className="text-white" src="graph.png" alt="" />
        </div>

       <div className="bg-blue-500 rounded-md mb-4  text-white w-72  shadow-xl">
          <div className="flex ml-2  justify-between">
          <div className="mt-3">
          <p className="">{allWorkspace.length}</p>
          <h2 className="card-title">Total Workspace</h2>
          </div>
          <div className="text-4xl mt-3 mr-3">   < IoIosBriefcase/></div>
          </div>
          </div>

       </div>

       <img className="w-full" src="https://apexcharts.com/wp-content/uploads/2018/05/basic-area-chart.svg" alt="" />
    </div>
  );
};

export default AdminHomePage;
