import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { AuthContext } from "../../Context/UserContext";
import ToDoCard from "./ToDoCard/ToDoCard";

const initialLists = [
  {
    ListName: "To Do",
    id: "1"
  },
  {
    ListName: "Doing",
    id: "2"
  },
  {
    ListName: "Done",
    id: "3"
  }
];

const BoardCards = () => {
  const { id } = useParams();
  const { user, reloadWorkspaces, currentWorkspace, setCurrentWorkspace, workspaces, logOut } = useContext(AuthContext);
  const setCurrent = (id) => { setCurrentWorkspace(workspaces.find((w) => w._id === id)) }

  useEffect(reloadWorkspaces, [user]);
  const [list, setLists] = useState(initialLists);
  const [board, setBoard] = useState(null);
  const [items, setItems] = useState(null);

  const reloadItems = () => {
    if (!currentWorkspace) return;
    setItems(null);
    fetch(process.env.REACT_APP_SERVER_URL + `/board/get_task_list/${id}`, {
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
        setItems(res);
        if (res.length > 0) {
          setCurrent(res[0].wid);
        }
      });
  }
  const reloadBoard = () => {
    if (!id) return;
    fetch(process.env.REACT_APP_SERVER_URL + `/board/${id}`, {
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
        setBoard(res);
      });
  }

  useEffect(reloadItems, [currentWorkspace]);
  useEffect(reloadBoard, []);

  return (
    <div className="my-12 px-12">
      <div>
        <div className='w-full mb-12'>
          <h3>{currentWorkspace?.name}</h3>
          <h2 className='text-2xl font-bold'>{board?.name}</h2>
        </div>
        <div>
          <div className="w-1/4 h-48 flex gap-1">
            {list.map((l, i) => (
              <ToDoCard key={l.id} current_list={l} items={items} current_board={id} reloadItems={reloadItems} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCards;
