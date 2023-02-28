import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";
import CreateTask from "../Modals/CreateTask";
import { toast } from "react-toastify";

const ToDoCard = ({ current_board, current_list, reloadItems }) => {
  const { currentWorkspace, setCurrentTask, boardItems, theme, user } =
    useContext(AuthContext);

  /* ----------------- Collect data After Submit Task on modal Start ----------------- */
  const handleTaskSubmit = (event, cardID) => {
    event.preventDefault();
    const form = event.target;
    const userId = user?.uid;
    const note = form.note.value;
    const taskData = {
      _id: "new",
      wid: currentWorkspace._id,
      boradId: current_board,
      cardID: cardID,
      note: note,
      userId,
    };

    fetch(`${process.env.REACT_APP_SERVER_URL}/create-update-task`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added the task.");
        form.reset();
        document.querySelector(".close_modal").click();
        reloadItems();
      })
      .catch((error) => toast.error(error.message));
  };
  /* ----------------- Collect data After Submit Task on modal End ----------------- */

  return (
    <div>
      <div className="box-border  ">
        <div className={theme?.ToDo}>
          <div className="flex justify-between items-start gap-2">
            <h4 className="w-10/12 font-semibold text-justify p-2 hover:cursor-pointer">
              {current_list.ListName}
            </h4>
          </div>
          <div className="py-1">
            {/*  ---------------------- map and distribute card data Start ----------------------  */}
            {boardItems &&
              boardItems.map((item, i) => (
                <>
                  {item.cardID === current_list.id && (
                    <div className={theme?.TaskCard}>
                      <div
                        key={item._id}
                        className="hover:cursor-pointer  p-2 my-1 relative"
                      >
                        {/* ------show cover image ------- */}
                        {item?.cover && (
                          <img
                            src={item?.cover}
                            alt="Shoes"
                            className="w-full mb-2"
                          />
                        )}
                        {/*---------- show label ------- */}

                        <div className="flex flex-wrap items-center m-1">
                          {item?.Labels?.map((label, i) => {
                            return (
                              <div className="flex items-center mr-2 my-1">
                                <div
                                  key={i}
                                  className={`flex items-center w-12 h-2 bg-${label}-400 rounded-full relative hover:bg:black/60`}
                                ></div>
                              </div>
                            );
                          })}
                        </div>

                        <a
                          className="block"
                          href="#new-board-modal1"
                          onClick={() => setCurrentTask(item)}
                        >
                          {item.note}
                        </a>
                      </div>
                    </div>
                  )}
                </>
              ))}
            {/*  ---------------------- map and distribute card data End ----------------------  */}
          </div>
          <div className="py-1">
            <div className="flex justify-between items-center gap-1">
              {/* -------------------- To Show CreateTask Modal trigger Start -------------------- */}
              <a
                href={`#_${current_list.id}_`}
                className="w-full btn border-none bg-gray-400 hover:bg-indigo-300  font-semibold rounded-sm"
              >
                Add a Card
              </a>
              {/* -------------------- To Show CreateTask Modal trigger End -------------------- */}
            </div>
            {/* -------------------- To Show CreateTask Modal body Start -------------------- */}
            <CreateTask
              modalID={"_" + current_list.id + "_"}
              handleTaskSubmit={handleTaskSubmit}
              cardInfo={current_list}
            ></CreateTask>
            {/* -------------------- To Show CreateTask Modal body End -------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;
