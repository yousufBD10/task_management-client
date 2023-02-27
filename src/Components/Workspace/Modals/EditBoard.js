import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const EditBoard = ({ handleEdite, card }) => {
  const {theme} = useContext(AuthContext);
  return (
    <div id={`edit-board-${card._id}`} className='modal '>
      <div className={theme?.modal}>
        <a
          href="#"
          className="btn btn-sm btn-circle absolute right-2 top-2 z-30 hover:bg-indigo-300 bg-gray-400 text-slate-200 border-none transition-all ease-in close_modal"
        >
          ✕
        </a>
        <form onSubmit={handleEdite}>
          <div className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="text-sm  block mb-1 font-medium"
              >
                Board name
              </label>
              <input
                defaultValue={card.name}
                required
                type="text"
                name="name"
                className={theme?.boardEditeModal}
              />
            </div>
          </div>
          <div className="space-x-4 mt-8">
            <button
              type="submit"
              className="w-full btn border-none bg-gray-500 hover:bg-gray-400 font-semibold "
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBoard;
