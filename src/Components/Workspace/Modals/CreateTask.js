import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const CreateTask = ({ handleTaskSubmit, cardInfo, modalID }) => {
  const {theme} = useContext(AuthContext);
  return (
    <div className={theme?.bg}>
      <div id={modalID} className="modal ">
        <div className={theme?.modal}>
          <a
            href="#"
            className="btn btn-sm btn-circle absolute right-2 top-2 z-30 hover:rotate-90 transition-all ease-in close_modal"
          >
            ✕
          </a>
          <form onSubmit={(e) => handleTaskSubmit(e, cardInfo.id)}>
            <div className="mt-6 space-y-6">
              <div>
                <label
                  htmlFor="note"
                  className="text-sm  block mb-1 font-medium"
                >
                  {cardInfo.ListName}
                </label>
                <textarea
                  className={theme?.createTaskTextAria}
                  placeholder="Enter your Note"
                  name="note"
                ></textarea>
              </div>
            </div>
            <div className="space-x-4 mt-8">
              <input
                type="submit"
                className="w-full btn bg-gray-500 rounded-md font-bold"
                value="Save"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
