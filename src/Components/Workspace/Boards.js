import React, { useContext } from "react";
import DocModal from "../NewBoard/NewBoardModal";
import { AuthContext } from '../../Context/UserContext';

const Boards = () => {
  const { user, currentWorkspace } = useContext(AuthContext);
  const cards = [
    {
      image:
        "https://cdn.pixabay.com/photo/2017/06/11/02/05/wheat-2391348__340.jpg",
      title: "WorkSpace",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/grass-flowers-during-sunset-shadow-260nw-1433901557.jpg",
      title: "WorkSpace",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLsiiM_FzbrKVFZ9Bh-i2oVYtMlqknjHc3tUz8oKDhLAgjhUwPJTu5buAApydXjKLslQs&usqp=CAU",
      title: "WorkSpace",
    },
  ];
  return (
    <div>
      <div className="flex justify-between mt-8 pr-5">
        <h1 className="text-xl font-medium px-5">Boards</h1>
        <label
          htmlFor="new-board-modal"
          className="btn btn-primary btn-sm rounded-sm"
        > Create new board </label>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-5 ">
        {cards.map((card, i) => (
          <div className="card mt-6 bg-base-50 shadow-xl image-full">
            <img className="w-full h-32" src={card.image} alt="Shoes" />
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <DocModal></DocModal>
    </div>
  );
};

export default Boards;
