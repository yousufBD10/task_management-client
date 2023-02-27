import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/UserContext";

const InviteMember = () => {
  const { user,theme, currentWorkspace } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const data = { email, wid: currentWorkspace._id };

    fetch(`${process.env.REACT_APP_SERVER_URL}/invite-workspace-member`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.info(data.message);
        form.reset();
        document.querySelector(".close_modal").click();
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div id="invite-member" className="modal">
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
                Invite member
              </label>
              <input
                required
                type="email"
                name="email"
                className={theme?.editeWorkspaceInput}
                placeholder="Enter user email"
              />
            </div>
          </div>
          <div className="space-x-4 mt-8">
            <button
              type="submit"
              className="w-full btn border-none bg-gray-500 hover:bg-gray-400  font-semibold rounded-md "
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InviteMember;
