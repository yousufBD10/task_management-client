import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const NewBoard = ({ handleSubmit }) => {
  const {theme} = useContext(AuthContext);
  return (
    <div id="new-board" className="modal">
      <div className={theme?.modal}>
        <a
          href="#"
          className="btn btn-sm btn-circle absolute right-2 top-2 z-30 hover:bg-indigo-300 bg-stone-300 text-stone-500 border-none transition-all ease-in close_modal"
        >
          ✕
        </a>
        <form onSubmit={handleSubmit}>
          <div className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="text-xl block mb-1 font-medium"
              >
                Board name
              </label>
              <input
                required
                type="text"
                name="name"
                className={theme?.editeWorkspaceInput}
                placeholder="Enter Board name"
              />
            </div>
          </div>
          <div className="space-x-4 mt-8">
            <button
              type="submit"
              className="w-full btn border-none bg-gry-500 hover:bg-gray-400  font-semibold rounded-md "
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBoard;
