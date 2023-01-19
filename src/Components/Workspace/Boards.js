import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import { toast } from "react-toastify";

const Boards = () => {
  const { user, currentWorkspace, logOut } = useContext(AuthContext);
  const [cards, setBoards] = useState([]);

  const reloadBoards = () => {
    if (!currentWorkspace) return;
    fetch(process.env.REACT_APP_SERVER_URL + `/workspace-boards/${currentWorkspace._id}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then(res => {
        setBoards(res);
      });
  }

  useEffect(reloadBoards, [currentWorkspace]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const data = { name, wid: currentWorkspace._id, _id: 'new' };

    fetch(`${process.env.REACT_APP_SERVER_URL}/create-update-workspace-board`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        toast.success("Successfully added the board.");
        form.reset();
        document.querySelector(".close_modal").click();
        reloadBoards();
      })
      .catch((error) => toast.error(error.message));
  };
  const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLsiiM_FzbrKVFZ9Bh-i2oVYtMlqknjHc3tUz8oKDhLAgjhUwPJTu5buAApydXjKLslQs&usqp=CAU";

  return (
    <div>
      <div className="flex justify-between mt-8 pr-5">
        <h1 className="text-xl font-medium px-5">Boards</h1>
        <label
          htmlFor="new-board"
          className="btn btn-primary btn-sm rounded-sm"
        > Create new board </label>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-5 ">
        {cards.map((card, i) => (
          <div className="card mt-6 bg-base-50 shadow-xl image-full">
            <img className="w-full h-32" src={image} alt="Shoes" />
            <div className="card-body">
              <h2 className="card-title">{card.name}</h2>
            </div>
          </div>
        ))}
      </div>
      <input type="checkbox" id="new-board" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            <div className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Board name</label>
                <input required type="text" name="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Board name" />
              </div>
            </div>
            <div className="space-x-4 mt-8">
              <button type="submit" className="w-full btn btn-primary rounded-md font-bold">Save</button>
            </div>
          </form><div className="modal-action">
            <label htmlFor="new-board" className="btn close_modal">Close</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boards;
