import React, { useContext } from "react";
import {HiViewBoards} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiTask} from 'react-icons/bi'
import {IoIosBriefcase} from 'react-icons/io'
import { useQuery } from "@tanstack/react-query";
import { VictoryChart , VictoryLegend,VictoryBar, VictorySharedEvents, VictoryLabel, VictoryPie} from "victory";
import useRole from "../../hooks/useRole";
import { AuthContext } from "../../Context/UserContext";
import UserDashboard from "./UserDashboard";

const AdminHomePage = () => {
  const {user} = useContext(AuthContext);
  const [role] = useRole(user?.email)

  const { data: allData = [] } = useQuery({
    queryKey: ['allDatas'],
    queryFn: async () => {
      const res = await fetch(process.env.REACT_APP_SERVER_URL + `/allDatas`,{
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          }},
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(allData)
 
  return (
    <div>
    {role === 'admin' && 
     <div>
       <div className=" ml-1 lg:flex grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5   ">
     
       <div className="bg-green-500 rounded-md  text-white w-72 mb-4 shadow-xl">
          <div className="flex ml-2  justify-between">
          <div className="mt-3">
          <p className="">{allData[0]?.length}</p>
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
          <p className="">{allData[1]?.length}</p>
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
          <p className="">{allData[2]?.length}</p>
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
          <p className="">{allData[3]?.length}</p>
          <h2 className="card-title">Total Workspace</h2>
          </div>
          <div className="text-4xl mt-3 mr-3">   < IoIosBriefcase/></div>
          </div>
          </div>

       </div>
    <div className="mt-10 ml-3">
      <h1 className="text-3xl">Analysis Reports</h1>
      <h1 className="text-blue-300">Checkout your latest project and their progress</h1>
    </div>
      <svg viewBox="0 0 450 350">
  <VictorySharedEvents
    events={[{
      childName: ["pie", "bar"],
      target: "data",
      eventHandlers: {
        onMouseOver: () => {
          return [{
            childName: ["pie", "bar"],
            mutation: (props) => {
              return {
                style: Object.assign({}, props.style, {fill: "tomato"})
              };
            }
          }];
        },
        onMouseOut: () => {
          return [{
            childName: ["pie", "bar"],
            mutation: () => {
              return null;
            }
          }];
        }
      }
    }]}
  >
    <g transform={"translate(150, 50)"}>
      <VictoryBar name="bar"
        width={300}
        standalone={false}
        style={{
          data: { width: 20 },
          labels: {fontSize: 12}
        }}
        data={[
          {x: "Members", y: allData[0]?.length}, {x: "Tasks", y: allData[2]?.length}, {x: "Boards", y: allData[1]?.length}, {x: "Workspaces", y:allData[3]?.length}
        ]}
        labels={["Members", "Tasks", "Boards", "Workspaces"]}
        labelComponent={<VictoryLabel y={280}/>}
      />
    </g>
    <g transform={"translate(0, -75)"}>
      <VictoryPie name="pie"
        width={200}
        standalone={false}
        style={{ labels: {fontSize: 9, padding: 10}}}
        data={[
          {x: "Members", y: allData[0]?.length}, {x: "Tasks", y: allData[2]?.length}, {x: "Boards", y: allData[1]?.length},
           {x: "Workspaces", y:allData[3]?.length}
        ]}
      />
    </g>
  </VictorySharedEvents>
</svg> 
</div>
}

  {role === 'user' && 
<UserDashboard>Welcome to Dashboard</UserDashboard>

  }
  
    </div>
  );
};

export default AdminHomePage;
