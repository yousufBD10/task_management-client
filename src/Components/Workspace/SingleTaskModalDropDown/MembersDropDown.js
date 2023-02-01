import React from "react";

const MembersDropDown = () => {
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

        <li className="flex btn btn-ghost items-center justify-center btn-sm  my-1 rounded-md bg-gray-900 text-gray-400 shadow-md">
          <button>Item 1</button>
        </li>
        <li className="flex btn btn-ghost items-center justify-center btn-sm  my-1 rounded-md bg-gray-900 text-gray-400">
          <button>Item 2</button>
        </li>
        <li className="flex btn btn-ghost items-center justify-center btn-sm  my-1 rounded-md bg-gray-900 text-gray-400">
          <button>Item 2</button>
        </li>
        <li className="flex btn btn-ghost items-center justify-center btn-sm  my-1 rounded-md bg-gray-900 text-gray-400">
          <button>Item 2</button>
        </li>
      </ul>
    </div>
  );
};

export default MembersDropDown;
