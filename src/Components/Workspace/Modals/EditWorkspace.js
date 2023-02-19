import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";
import { toast } from "react-toastify";

const EditWorkspace = () => {
  const { user, currentWorkspace, reloadWorkspaces, logOut } =
    useContext(AuthContext);

  const handleEdit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const data = { name, _id: currentWorkspace._id };
    fetch(`${process.env.REACT_APP_SERVER_URL}/create-update-workspace`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully edited the workspace name.");
        form.reset();
        document.querySelector(".close_modal").click();
        currentWorkspace.name = name;
        reloadWorkspaces();
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div id={`edit-workspace`} className="modal">
      <div className="modal-box rounded-md">
        <a
          href="#"
          className="btn btn-sm btn-circle absolute right-2 top-2 z-30 hover:bg-indigo-300 bg-stone-300 text-stone-500 border-none transition-all ease-in close_modal"
        >
          ✕
        </a>
        <form onSubmit={handleEdit}>
          <div className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Workspace name
              </label>
              <input
                defaultValue={currentWorkspace?.name}
                required
                type="text"
                name="name"
                className="bg-gray-100 border border-stone-300 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              />
            </div>
          </div>
          <div className="space-x-4 mt-8">
            <button
              type="submit"
              className="w-full btn border-none bg-stone-300 hover:bg-indigo-300 text-black font-bold rounded-md font-bold"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditWorkspace;
