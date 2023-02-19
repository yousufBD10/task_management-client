import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const EditeProfile = ({ setModal, setRefetch }) => {
  const { user, updateName } = useContext(AuthContext);

  const handleEdit = (e) => {
    setRefetch(false);
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const name = form.name.value;
    const workplace = form.workplace.value;
    const univerty = form.univerty.value;
    const address = form.address.value;
    const come = form.come.value;
    const relationship = form.relationship.value;
    const updateData = {
      name,
      workplace,
      univerty,
      email,
      address,
      come,
      relationship,
    };
    fetch(process.env.REACT_APP_SERVER_URL + `/update/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          setModal(null);
          setRefetch(true);
          const profile = {
            displayName: name,
          };
          updateName(profile)
            .then(() => {})
            .catch((error) => console.error(error));
        }
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle " />
      <div className="modal ">
        <form
          onSubmit={handleEdit}
          className="modal-box relative scrollbar-hide rounded-md"
        >
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm bg-stone-300 border-none text-stone-500 hover:bg-indigo-300 btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-3xl">Edit profile</h1>
          </div>
          <div className="divider"></div>
          <div>
            <div className="form-control w-full mb-5">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full "
              />
            </div>

            <div className="form-control w-full mb-5">
              <label className="label">
                <span className="label-text">Work place</span>
              </label>
              <input
                name="workplace"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full mb-5">
              <label className="label">
                <span className="label-text">College or Univerty</span>
              </label>
              <input
                name="univerty"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full mb-5">
              <label className="label">
                <span className="label-text">Your home address</span>
              </label>
              <input
                name="address"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full mb-5">
              <label className="label">
                <span className="label-text">Come frome</span>
              </label>
              <input
                name="come"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full mb-5">
              <label className="label">
                <span className="label-text">Relationship</span>
              </label>
              <input
                name="relationship"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn border-none bg-stone-300 hover:bg-indigo-300 text-black font-semibold w-full"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditeProfile;
