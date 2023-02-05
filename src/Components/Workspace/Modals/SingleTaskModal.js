import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  FiArchive,
  FiArrowRight,
  FiBook,
  FiCheckSquare,
  FiClock,
  FiCopy,
  FiPaperclip,
  FiShare2,
  FiTag,
  FiUser,
} from "react-icons/fi";
import { TbTemplate } from "react-icons/tb";
import MembersDropDown from "../SingleTaskModalDropDown/MembersDropDown";
import ChecklistDropDown from "../SingleTaskModalDropDown/ChecklistDropDown";
import DateDropDown from "../SingleTaskModalDropDown/DateDropDown";
import MoveDropDown from "../SingleTaskModalDropDown/MoveDropDown";
import CopyDropDown from "../SingleTaskModalDropDown/CopyDropDown";
import { AuthContext } from "../../../Context/UserContext";
import useMembersOfCurrentWorkspace from "../../../hooks/useMembersOfCurrentWorkspace";

const SingleTaskModal = () => {
  const buttonStyle = "dropdown dropdown-left flex items-center p-2 space-x-3 rounded-md btn-ghost bg-gray-800 btn-sm text-gray-400";
  const { boardItems, currentTask, user, logOut, currentWorkspace } = useContext(AuthContext);
  const [members] = useMembersOfCurrentWorkspace(currentWorkspace, logOut);
  let timer;
  const [comments, setComments] = useState([]);
  const [assignedUsers, setAssignedUsers] = useState(currentTask?.users);

  const SendToServer = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/create-update-task`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(currentTask),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully saved to server.");
      })
      .catch((error) => toast.error(error.message));
  };

  const assignORremoveMember = (uid) => {
    for (let i = 0; i < boardItems.length; i++) {
      if (boardItems[i]._id == currentTask._id) {
        if (!boardItems[i].users) {
          boardItems[i].users = [];
          boardItems[i].users.push(uid);
        } else {
          if (boardItems[i].users.find((el) => { return el === uid })) {
            boardItems[i].users = boardItems[i].users.filter((el) => { return el != uid })
          } else {
            boardItems[i].users.push(uid);
          }
        }
        currentTask.users = boardItems[i].users;
        setAssignedUsers(boardItems[i].users);
        SendToServer();
        break;
      }
    }
  }

  const updateCurrentTaskInfo = (e) => {
    e.preventDefault();
    clearTimeout(timer);
    const form = e.target.form;
    const note = form.note.value;
    const description = form.description.value;
    timer = setTimeout(() => {
      for (let i = 0; i < boardItems.length; i++) {
        if (boardItems[i]._id == currentTask._id) {
          currentTask.note = boardItems[i].note = note;
          currentTask.description = boardItems[i].description = description;
          SendToServer();
          break;
        }
      }
    }, 1000);
  }

  const reloadComments = () => {
    if (!currentTask) return;
    setAssignedUsers(currentTask?.users);
    setComments([]);
    fetch(process.env.REACT_APP_SERVER_URL + `/comments/${currentTask._id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((res) => {
        setComments(res);
      });
  };

  useEffect(reloadComments, [currentTask]);

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.text.value;
    const commentData = {
      _id: "new",
      wid: currentTask.wid,
      boradId: currentTask.boradId,
      taskId: currentTask._id,
      text: text,
      username: user.displayName,
      photo: user.photoURL,
    };

    fetch(`${process.env.REACT_APP_SERVER_URL}/create-update-comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added the comment.");
        reloadComments();
        form.reset();
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div>
      <div id="new-board-modal" className="modal">
        <div className="modal-box rounded-md bg-gray-50 max-w-screen-md mx-2">
          <a href="#" className="btn btn-ghost btn-sm absolute right-2 top-2">
            ✕
          </a>

          <div className="grid grid-cols-4 -mr-4">
            <div className="px-6 dark:text-gray-500 col-span-4 md:col-span-3">
              {assignedUsers && assignedUsers.length > 0 ? assignedUsers.map((el) => {
                return <div className="avatar">
                  <div className="w-10 h-10 rounded-full">
                    <img src={members.find((u) => { return u._id == el })?.photoURL} />
                  </div>
                </div>
              }) : ''}
              <form className="grid grid-cols-1 gap-3 mt-10" onKeyUp={updateCurrentTaskInfo}>
                {/* ------------title input section---------- */}
                <input
                  name="note"
                  type="text"
                  defaultValue={currentTask?.note}
                  className="input input-bordered w-full rounded-sm text-3xl font-semibold"
                  required
                />

                {/* ------------Text Area section------------- */}

                <textarea
                  name="description"
                  placeholder="Description"
                  defaultValue={currentTask?.description}
                  className="input input-bordered p-4 w-full rounded-sm outline-border h-28"
                ></textarea>
              </form>
              <br />

              {/*-------------comments/Activity section----------- */}

              <div className="text-gray-600 mt-8">
                <div className="flex justify-between ">
                  <h3 className="text-md font-semibold">Activity</h3>
                </div>
                <div>
                  {/* -----------Comment text area---------- */}

                  <form onSubmit={handleCommentSubmit} className="flex flex-col py-6 space-y-4 md:py-0 ng-untouched ng-pristine ng-valid">
                    <label className="block">
                      <textarea
                        name="text"
                        placeholder="Write a comment..."
                        rows={6}
                        className="input input-bordered p-2 mt-2 w-full rounded-sm outline-border"
                      ></textarea>
                    </label>
                    <div className="flex flex-wrap">
                      {/* ----- comment submit button------ */}
                      <button
                        type="submit"
                        className="btn btn-ghost btn-sm rounded-md bg-gray-800 text-gray-400"
                      >
                        Save
                      </button>
                    </div>
                  </form>

                  {comments && comments.map((c) => {
                    return <div key={c._id} className="chat chat-start mt-5">
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                          <img src={c.photo} />
                        </div>
                      </div>
                      <div className="chat-header ml-1">
                        {c.username}
                      </div>
                      <div className="chat-bubble w-full">{c.text}</div>
                    </div>
                  })}

                </div>
              </div>
            </div>

            {/* ============== Sidebar Area ============= */}

            <div className="col-span-1">
              <div className="h-full space-y-2 w-full  dark:text-gray-700">
                {/* <div className="md:flex items-center space-x-4"></div> */}
                <div className="divide-y divide-gray-700">
                  <ul className="pt-2 pb-4 space-y-1 text-sm text-grey">
                    {/* ------ Suggested section----- */}
                    <p className="pt-6">Add to card</p>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        tabIndex={0}
                        className={buttonStyle}
                      >
                        <FiUser></FiUser>
                        <span className="text-grey">Assign Members</span>
                        <MembersDropDown assignORremoveMember={assignORremoveMember}></MembersDropDown>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        tabIndex={0}
                        className={buttonStyle}
                      >
                        <FiCheckSquare></FiCheckSquare>
                        <span>Checklist</span>
                        <ChecklistDropDown></ChecklistDropDown>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        tabIndex={0}
                        className={buttonStyle}
                      >
                        <FiClock></FiClock>
                        <span>Deadline</span>
                        <DateDropDown></DateDropDown>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className={buttonStyle}
                      >
                        <FiPaperclip></FiPaperclip>
                        <span>Attachment</span>
                      </Link>
                    </li>

                    {/*----------- Action Section ----------- */}

                    <p className="text-grey pt-6">Actions</p>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        tabIndex={0}
                        className={buttonStyle}
                      >
                        <FiArrowRight></FiArrowRight>
                        <span>Move</span>
                        <MoveDropDown></MoveDropDown>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        tabIndex={0}
                        className={buttonStyle}
                      >
                        <FiCopy></FiCopy>
                        <span>Copy</span>
                        <CopyDropDown></CopyDropDown>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className={buttonStyle}
                      >
                        <FiArchive></FiArchive>
                        <span>Archive</span>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className={buttonStyle}
                      >
                        <FiShare2></FiShare2>
                        <span>Share</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTaskModal;
