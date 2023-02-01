import React from "react";

const EditBoard = ({ handleEdite, card }) => {
    return (
        <div id={`edit-board-${card._id}`} className="modal ">
            <div className="modal-box">
                <a href="#" className="btn btn-sm btn-circle absolute right-2 top-2 z-30 hover:rotate-90 transition-all ease-in close_modal">✕</a>
                <form onSubmit={handleEdite}>
                    <div className="mt-6 space-y-6">
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Board name</label>
                            <input defaultValue={card.name} required type="text" name="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
                        </div>
                    </div>
                    <div className="space-x-4 mt-8">
                        <button type="submit" className="w-full btn btn-primary rounded-md font-bold">Save</button>
                    </div>
                </form>
            </div>
          </div>
          <div className="space-x-4 mt-8">
            <button
              type="submit"
              className="w-full btn btn-primary rounded-md font-bold"
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
