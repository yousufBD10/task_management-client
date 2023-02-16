import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const MoveDropDown = ({ MoveTask }) => {
  const { initialBoardLists } = useContext(AuthContext);
  return (
    <div
      tabIndex={0}
      className="dropdown-content p-2 rounded-md w-64 bg-gray-300 divide-gray-800"
    >
      <p className="text-gray-900 font-semibold space-x-3 text-center">
        Move Card
      </p>

      <hr />
      <form>
        <div>
          <p className="text-gray-900 font-bold">Change work position</p>
          <select onChange={MoveTask} className="w-full text-gray-900">
            <option value="#">(none)</option>
            {initialBoardLists && initialBoardLists.map((el) => { return <option value={el.id}>{el.ListName}</option> })}
          </select>
          <button
            type="submit"
            className="btn btn-ghost btn-sm rounded-md bg-gray-800 text-gray-400 my-3"
          >  Move </button>
        </div>
      </form>
    </div>
  );
};

export default MoveDropDown;
