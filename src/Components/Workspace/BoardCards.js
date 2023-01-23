import React, { useContext, useState } from "react";
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
  const { user, currentWorkspace, logOut } = useContext(AuthContext);
  const [list, setLists] = useState(initialLists);
  return (
    <div>
      <div>
        <h3>{currentWorkspace?.name}</h3>
        <div>
          <div className="w-1/4 h-48 border flex gap-1">
            {list.map((l, i) => (
              <ToDoCard key={l.id} list={l} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCards;
