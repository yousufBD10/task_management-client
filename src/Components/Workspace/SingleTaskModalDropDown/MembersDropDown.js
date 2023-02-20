import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";
import useMembersOfCurrentWorkspace from "../../../hooks/useMembersOfCurrentWorkspace";

const MembersDropDown = ({ assignORremoveMember }) => {
  const { currentWorkspace, logOut } = useContext(AuthContext);

  const [members] = useMembersOfCurrentWorkspace(currentWorkspace, logOut);

  return (
    <div>
      <ul
        tabIndex={0}
        className="dropdown-content p-2 rounded-md w-72 bg-stone-200 divide-black text-black"
      >
        <p className="font-semibold space-x-3 text-center pb-1">Members</p>
        <hr />
        {members &&
          members.map((member) => {
            return (
              <li
                key={member._id}
                className="flex btn btn-ghost items-center justify-center btn-sm  my-1 rounded-md bg-stone-400 border-none shadow-md hover:bg-indigo-300"
              >
                <button onClick={() => assignORremoveMember(member._id)}>
                  {member.name}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MembersDropDown;
