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
      <div>
        {/* The button to open modal */}

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-4" className="modal-toggle " />
        <div className="modal ">
          <form onSubmit={handleEdit} className="modal-box relative bg-form">
            <label
              htmlFor="my-modal-4"
              className="btn btn-sm btn-circle absolute font-extrabold   right-2 top-2"
            >
              ✕
            </label>
            <div className="flex items-center gap-3 mb-6">
              <h1 className="text-3xl text-black font-bold">Edit Profile</h1>
            </div>
            <div className="divider"></div>
            <div>
              <div className="form-control w-full mb-5">
                <label className="label">
                  <span className="label-text text-xl font-bold text-black">
                    Your Name
                  </span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered bg-gray-300 text-black font-semibold w-full "
                />
              </div>

              <div className="form-control w-full mb-5">
                <label className="label">
                  <span className="label-text text-xl font-bold text-black">
                    Work place
                  </span>
                </label>
                <input
                  name="workplace"
                  type="text"
                  placeholder=" work place"
                  className="input input-bordered w-full bg-gray-300 text-black font-semibold "
                />
              </div>
              <div className="form-control w-full mb-5">
                <label className="label">
                  <span className="label-text text-xl font-bold text-black">
                    College or University
                  </span>
                </label>
                <input
                  name="univerty"
                  type="text"
                  placeholder="College or university"
                  className="input input-bordered w-full bg-gray-300 text-black font-semibold  "
                />
              </div>
              <div className="form-control w-full mb-5">
                <label className="label">
                  <span className="label-text text-xl font-bold text-black">
                    Your Home Address
                  </span>
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder="Your home address"
                  className="input input-bordered w-full bg-gray-300 text-black font-semibold "
                />
              </div>
              <div className="form-control w-full mb-5">
                <label className="label">
                  <span className="label-text text-xl font-bold text-black">
                    Come From
                  </span>
                </label>
                <input
                  name="come"
                  type="text"
                  placeholder="Come from"
                  className="input input-bordered w-full bg-gray-300 text-black font-semibold "
                />
              </div>
              <div className="form-control w-full mb-5">
                <label className="label">
                  <span className="label-text text-xl font-bold text-black">
                    Relationship
                  </span>
                </label>
                <input
                  name="relationship"
                  type="text"
                  placeholder="Relationship"
                  className="input input-bordered w-full bg-gray-300 text-black font-semibold  "
                />
              </div>
            </div>
            <button type="submit" className="btn btn-info  font-bold w-full">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditeProfile;
