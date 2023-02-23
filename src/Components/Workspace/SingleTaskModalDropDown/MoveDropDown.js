import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const MoveDropDown = ({ MoveTask }) => {
  const { initialBoardLists } = useContext(AuthContext);
  return (
    <div
      tabIndex={0}
      className="dropdown-content p-2 rounded-md w-64 bg-stone-300 divide-gray-800 text-black"
    >
      <p className="font-semibold space-x-3 text-center">Move Card</p>

      <hr />
      <form>
        <div>
          <p className="font-semibold my-2">Change work position</p>
          <select onChange={MoveTask} className="w-full text-gray-900">
            <option value="#">(none)</option>
            {initialBoardLists &&
              initialBoardLists.map((el) => {
                return (
                  <option value={el.id} key={el.id}>
                    {el.ListName}
                  </option>
                );
              })}
          </select>
          <button
            type="submit"
            className="btn btn-ghost mt-3 btn-sm rounded-md bg-stone-400 text-black hover:bg-indigo-300 w-full"
          >
            {" "}
            Move{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MoveDropDown;
