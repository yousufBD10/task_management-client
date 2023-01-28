import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import { useLocation } from 'react-router-dom';

const Members = () => {
  const { user, currentWorkspace, logOut } = useContext(AuthContext);
  const [members, setMembers] = useState([]);
  let location = useLocation();

  const reloadMembers = () => {
    if (!currentWorkspace) return;
    let data = [];
    for (let el of currentWorkspace.users) {
      data.push(el.uid);
    }

    fetch(process.env.REACT_APP_SERVER_URL + `/get-workspace-member`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then(res => {
        setMembers(res);
      });
  }

  useEffect(reloadMembers, [currentWorkspace, location]);


  return (
    <div>{currentWorkspace && <>
      <h1 className="text-xl font-medium px-5">Members</h1>
      <div className='flex flex-row px-5'>
        <div className='flex flex-col w-60 g-3'>
          <button className='btn btn-primary btn-sm rounded-sm mt-3 mb-3'>Workspace members</button>
          <button className='btn btn-primary btn-sm rounded-sm mb-3'>Guests</button>
          <button className='btn btn-primary btn-sm rounded-sm mb-3'>Pending</button>
        </div>
        <div>
          <h3 className="text-xl font-medium px-5 mt-2">Workspace members</h3>
          <h6 className='ml-5'>Workspace members can view and join all workspace visible <br /> boards and create new boards in the workspace. </h6>
        </div>
      </div>
      <div className='flex flex-row px-5'>
        <div className="form-control w-60 max-w-xs mt-3">
          <label className="label">
            <span className="label-text font-medium">Filter by</span>
          </label>
          <select className="select select-bordered rounded-sm select-sm">
            <option>Name</option>
            <option>Date</option>
          </select>
        </div>
        <div>
          {members.length > 0 &&
            members.map((member, i) =>
              <div className="flex flex-row card ml-5 mt-6 bg-base-50">
                <img className='w-12 h-12 rounded-xl' src={member.photoURL} alt="" />
                <div className='mr-5 w-56'>
                  <h2 className="card-title ml-2">{member.name}</h2>
                  <h2 className="card-id ml-2">{member._id}</h2>
                </div>
                <div className='ml-11'>
                  <button className='btn-primary px-3 m-2 rounded-md'>Remove</button>
                </div>

              </div>
            )
          }


        </div>
      </div>
    </>}
    </div>
  );
};

export default Members;