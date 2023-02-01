import React from "react";

const MoveDropDown = () => {
  return (
    <div
      tabIndex={0}
      className="dropdown-content p-2 rounded-md w-64 bg-gray-300 divide-gray-800"
    >
      <p className="text-gray-900 font-semibold space-x-3 text-center">
        Move Card
      </p>

      <hr />
      <form action="">
        <div className="my-2">
          <p className="text-gray-900 font-bold">Present Destination</p>
          <input
            name="name"
            type="text"
            className="input w-full rounded-sm text-md text-gray-900 focus:border-gray-900"
            required
          />
        </div>
        <div>
          <p className="text-gray-900 font-bold">Change work position</p>
          <select name="" id="" className="w-full text-gray-900">
            <option value="#">(none)</option>
            <option value="to_do">To do</option>
            <option value="to_do">Doing</option>
            <option value="to_do">Done</option>
          </select>
          <button
            onClick={""}
            type="submit"
            className="btn btn-ghost btn-sm rounded-md bg-gray-800 text-gray-400 my-3"
          >
            Move
          </button>
        </div>
      </form>
    </div>
  );
};

export default MoveDropDown;
