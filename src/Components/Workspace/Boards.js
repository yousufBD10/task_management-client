import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import NewBoard from './Modals/NewBoard';
import { BsPencilSquare } from "react-icons/bs";
import EditBoard from './Modals/EditBoard';

const Boards = () => {
  const { user, currentWorkspace, logOut } = useContext(AuthContext);
  const [cards, setBoards] = useState([]);
  const [_id, _setId] = useState("");

  const handleEdit =(id)=>{
   console.log(id);
    _setId(id)
 
   }

  const handleEdite =(event)=>{
   
    event.preventDefault();
    console.log(event,);
    const form = event.target;
    const name = form.name.value;
    const data = { name, _id: _id };
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
        toast.success("Successfully edit the board name.");
        form.reset();
        document.querySelector(".close_modal").click();
        reloadBoards();
      })
      .catch((error) => toast.error(error.message));
  }

  const reloadBoards = () => {
    if (!currentWorkspace) return;
    setBoards([]);
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
    console.log(event);
    const form = event.target;
    const name = form.name.value;
    const data = { name, wid: currentWorkspace._id, _id: event };

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
    <div>{currentWorkspace && <>
      <div className="flex justify-between mt-8 pr-5">
        <h1 className="text-xl font-medium px-5">Boards</h1>
        <a
          href="#new-board"
          className="btn btn-primary btn-sm rounded-sm"
        > Create new board </a>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-4 px-5 ">
        {cards.map((card, i) => (
         <div className=''>
          <a href="#edit-board" onClick={()=>handleEdit(card._id)} className='justify-end  flex  -mb-16 mr-4 cursor-pointer p-2 text-lg hover:text-gray-400  text-white'><BsPencilSquare ></BsPencilSquare></a>
          <Link to="/workspace/single" className="card mt-6 absulute -z-50  image-full">
            <img className="w-full h-28" src={image} alt="Shoes" />
            <div className="card-body">
           
              <h2 className="card-title">{card.name}</h2>
            </div>
          </Link>
          <EditBoard card={card} handleEdite={handleEdite} ></EditBoard>
          </div> 
        ))}
      </div>
      <NewBoard  handleSubmit={handleSubmit}></NewBoard>
    </>}
    </div>
  );
};

export default Boards;
