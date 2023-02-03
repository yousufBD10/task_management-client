import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";
import useMembersOfCurrentWorkspace from "../../../hooks/useMembersOfCurrentWorkspace";

const MembersDropDown = () => {
  const { currentWorkspace, logOut } = useContext(AuthContext);

  const [members] = useMembersOfCurrentWorkspace(currentWorkspace, logOut);
  return (
    <div>
      <ul
        tabIndex={0}
        className="dropdown-content p-2 rounded-md w-72 bg-gray-300 divide-gray-800"
      >
        <p className="text-gray-900 font-semibold space-x-3 text-center pb-1">
          Members
        </p>
        <hr />
        {members && members.map((member) => {
          return <li key={member._id} className="flex btn btn-ghost items-center justify-center btn-sm  my-1 rounded-md bg-gray-900 text-gray-400 shadow-md">
            <button>{member.name}</button>
          </li>
        })}
      </ul>
    </div>
  );
};

export default MembersDropDown;
