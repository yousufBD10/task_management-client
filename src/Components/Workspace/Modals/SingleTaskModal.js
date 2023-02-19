import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import {
  FiArrowRight,
  FiBook,
  FiCheckSquare,
  FiClock,
  FiPaperclip,
  FiShare2,
  FiTag,
  FiTrash,
  FiUser,
} from "react-icons/fi";
import { BsCalendar4Range } from "react-icons/bs";
import { GrTextAlignFull } from "react-icons/gr";
import { RxActivityLog } from "react-icons/rx";
import { MdOutlineHideImage } from "react-icons/md";
import MembersDropDown from "../SingleTaskModalDropDown/MembersDropDown";
import DateDropDown from "../SingleTaskModalDropDown/DateDropDown";
import AttachmentDropDown from "../SingleTaskModalDropDown/AttachmentDropDown";
import MoveDropDown from "../SingleTaskModalDropDown/MoveDropDown";
import ShareDropDown from "../SingleTaskModalDropDown/ShareDropDown";
import { AuthContext } from "../../../Context/UserContext";
import useMembersOfCurrentWorkspace from "../../../hooks/useMembersOfCurrentWorkspace";
import LabelDropDown from "../SingleTaskModalDropDown/LabelDropDown";
import CoverDropDown from "../CoverDropDown";

const SingleTaskModal = () => {
  const buttonStyle =
    "dropdown dropdown-bottom md:dropdown-left flex items-center mb-1 mr-1 p-2 space-x-3 rounded-md btn-ghost bg-stone-300 btn-sm text-stone-800 hover:bg-indigo-300 w-44 md:w-none";
  const {
    boardItems,
    setBoardItems,
    currentTask,
    user,
    logOut,
    currentWorkspace,
  } = useContext(AuthContext);

  const [selectedDate, setSelectedDate] = useState();
  const [members] = useMembersOfCurrentWorkspace(currentWorkspace, logOut);
  let timer,
    is_loading_comment = false;
  const [comments, setComments] = useState([]);
  const [assignedUsers, setAssignedUsers] = useState([]);

  // -------- Task info & description post to DB ---------

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

  //-------------- Member assign & remove --------------

  const assignORremoveMember = (uid) => {
    let boardItemsCopy = [...boardItems];
    for (let i = 0; i < boardItemsCopy.length; i++) {
      if (boardItemsCopy[i]._id == currentTask._id) {
        if (!boardItemsCopy[i].users) {
          boardItemsCopy[i].users = [];
          boardItemsCopy[i].users.push(uid);
        } else {
          if (
            typeof boardItemsCopy[i].users.find((el) => {
              return el === uid;
            }) == "string"
          ) {
            boardItemsCopy[i].users = boardItemsCopy[i].users.filter((el) => {
              return el != uid;
            });
          } else {
            boardItemsCopy[i].users.push(uid);
          }
        }
        setAssignedUsers(boardItemsCopy[i].users);
        currentTask.users = boardItemsCopy[i].users;
        setBoardItems(boardItemsCopy);
        SendToServer();
        break;
      }
    }
  };

  // ----------- Task title or info & description update----------

  const updateCurrentTaskInfo = (e) => {
    e.preventDefault();
    clearTimeout(timer);
    const form = e.target.form;
    const note = form.note.value;
    const description = form.description.value;
    timer = setTimeout(() => {
      let boardItemsCopy = [...boardItems];
      for (let i = 0; i < boardItemsCopy.length; i++) {
        if (boardItemsCopy[i]._id == currentTask._id) {
          currentTask.note = boardItemsCopy[i].note = note;
          currentTask.description = boardItemsCopy[i].description = description;
          setBoardItems(boardItemsCopy);
          SendToServer();
          break;
        }
      }
    }, 1000);
  };

  // ------------- Reload comments ---------------

  const reloadComments = () => {
    if (!currentTask || is_loading_comment) return;
    is_loading_comment = true;
    fetch(process.env.REACT_APP_SERVER_URL + `/comments/${currentTask._id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          is_loading_comment = false;
          return logOut();
        }
        return res.json();
      })
      .then((res) => {
        is_loading_comment = false;
        setComments(res);
      });
  };

  useEffect(reloadComments, [currentTask]);
  useEffect(() => {
    setAssignedUsers(currentTask?.users);
  }, [currentTask]);

  // -------------- Handle submit comments -----------

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

  // ------------ Handle Adding Deadline ------------

  const handleDateSubmit = () => {
    clearTimeout(timer);
    const StartDate = selectedDate?.from && format(selectedDate.from, "PP");
    const Deadline = selectedDate?.to && format(selectedDate.to, "PP");
    timer = setTimeout(() => {
      let boardItemsCopy = [...boardItems];
      for (let i = 0; i < boardItems.length; i++) {
        if (boardItems[i]._id == currentTask._id) {
          boardItemsCopy.StartDate = boardItemsCopy[i].StartDate = StartDate;
          boardItemsCopy.Deadline = boardItemsCopy[i].Deadline = Deadline;
          setBoardItems(boardItemsCopy);
          SendToServer();
          break;
        }
      }
    }, 1000);
  };

  //---------- move task to another board----------

  const MoveTask = (e) => {
    clearTimeout(timer);
    const id = e.target.value;
    timer = setTimeout(() => {
      let boardItemsCopy = [...boardItems];
      for (let i = 0; i < boardItems.length; i++) {
        if (boardItems[i]._id == currentTask._id) {
          currentTask.cardID = boardItemsCopy[i].cardID = id;
          setBoardItems(boardItemsCopy);
          SendToServer();
          break;
        }
      }
    }, 1000);
  };
  // ------------ Handle Remove Deadline ------------

  const handleRemoveDate = () => {
    clearTimeout(timer);
    const StartDate = "";
    const Deadline = "";
    timer = setTimeout(() => {
      let boardItemsCopy = [...boardItems];
      for (let i = 0; i < boardItems.length; i++) {
        if (boardItems[i]._id == currentTask._id) {
          currentTask.StartDate = boardItemsCopy[i].StartDate = StartDate;
          currentTask.Deadline = boardItemsCopy[i].Deadline = Deadline;
          setBoardItems(boardItemsCopy);
          SendToServer();
          break;
        }
      }
    }, 1000);
  };

  // ------------ Handle file Attachment -----------

  const handleAttachment = (attachData) => {
    let boardItemsCopy = [...boardItems];
    for (let i = 0; i < boardItemsCopy.length; i++) {
      if (boardItemsCopy[i]._id == currentTask._id) {
        if (!boardItemsCopy[i].attachment) {
          boardItemsCopy[i].attachment = [];
          boardItemsCopy[i].attachment.push(attachData.attach);
        } else {
          boardItemsCopy[i].attachment.push(attachData.attach);
        }
        setBoardItems(boardItemsCopy);
        SendToServer();
        break;
      }
    }
  };
  // ------------ Remove Attachment -----------
  const removeAttachment = (data) => {
    const findAttachment = currentTask.attachment.filter(
      (attach) => attach !== data
    );
    timer = setTimeout(() => {
      let boardItemsCopy = [...boardItems];
      for (let i = 0; i < boardItems.length; i++) {
        if (boardItems[i]._id == currentTask._id) {
          currentTask.attachment = boardItemsCopy[i].attachment =
            findAttachment;
          setBoardItems(boardItemsCopy);
          SendToServer();
          break;
        }
      }
    }, 1000);
  };

  // -------------- Label component ------------

  const handleLabel = (color) => {
    let boardItemsCopy = [...boardItems];
    for (let i = 0; i < boardItemsCopy.length; i++) {
      if (boardItemsCopy[i]._id == currentTask._id) {
        if (!boardItemsCopy[i].Labels) {
          boardItemsCopy[i].Labels = [];
          boardItemsCopy[i].Labels.push(color);
        } else {
          boardItemsCopy[i].Labels.push(color);
        }
        setBoardItems(boardItemsCopy);
        SendToServer();
        break;
      }
    }
  };
  // ------- remove label ---------
  const removeLabel = (label) => {
    clearTimeout(timer);
    const findLabels = currentTask.Labels.filter((lab) => lab !== label);
    timer = setTimeout(() => {
      let boardItemsCopy = [...boardItems];
      for (let i = 0; i < boardItems.length; i++) {
        if (boardItems[i]._id == currentTask._id) {
          currentTask.Labels = boardItemsCopy[i].Labels = findLabels;
          setBoardItems(boardItemsCopy);
          SendToServer();
          break;
        }
      }
    }, 1000);
  };

  // -------------- cover upload ------------

  const handleUploadCover = (coverImage) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      let boardItemsCopy = [...boardItems];
      for (let i = 0; i < boardItems.length; i++) {
        if (boardItems[i]._id == currentTask._id) {
          boardItemsCopy.cover = boardItemsCopy[i].cover = coverImage;
          // setBoardItems(boardItemsCopy);
          SendToServer();
          break;
        }
      }
    }, 1000);
  };
  // ----------------- Remove Cover ----------
  const removeCover = () => {
    clearTimeout(timer);
    const cover = "";
    timer = setTimeout(() => {
      let boardItemsCopy = [...boardItems];
      for (let i = 0; i < boardItems.length; i++) {
        if (boardItems[i]._id == currentTask._id) {
          currentTask.cover = boardItemsCopy[i].cover = cover;

          setBoardItems(boardItemsCopy);
          SendToServer();
          break;
        }
      }
    }, 1000);
  };
  return (
    <div>
      <div id="new-board-modal" className="modal">
        <div className="modal-box card rounded-md touch-auto max-w-screen-md scrollbar-hide">
          {/* ------ Dynamically cover load ------ */}

          {currentTask?.cover && (
            <div className="bg-stone-300 -m-6 flex justify-center relative">
              <img src={currentTask?.cover} alt="Shoes" className="w-52" />
              <button
                onClick={removeCover}
                className="btn-ghost h-8 flex justify-center items-center p-2 text-gray-400 text-2xl font-bold absolute bottom-2 right-2 border rounded-md bg-stone-200 hover:bg-black/30"
                title="Remove cover"
              >
                <MdOutlineHideImage></MdOutlineHideImage>
              </button>
            </div>
          )}

          {/* --------- Modal close button ---------- */}

          <a href="#g" className="btn btn-ghost btn-sm absolute right-2 top-2">
            ✕
          </a>

          <div className="md:grid md:grid-cols-4 -mr-4">
            <div className="pl-2 pr-6 dark:text-gray-500 col-span-4 md:col-span-3">
              <form
                className="grid grid-cols-1 gap-3 mt-10"
                onKeyUp={updateCurrentTaskInfo}
              >
                {/* ------------title input section---------- */}

                <input
                  name="note"
                  type="text"
                  defaultValue={currentTask?.note}
                  className="input input-bordered w-full rounded-md text-3xl font-semibold"
                  required
                />
                {assignedUsers && assignedUsers.length > 0 && (
                  <small className="font-semibold mt-4">Members</small>
                )}
                <div className="flex items-center">
                  {assignedUsers && assignedUsers.length > 0
                    ? assignedUsers.map((el) => {
                        return (
                          <div className="avatar">
                            <div className="w-10 h-10 rounded-full">
                              <img
                                alt="#"
                                src={
                                  members.find((u) => {
                                    return u._id == el;
                                  })?.photoURL
                                }
                              />
                            </div>
                          </div>
                        );
                      })
                    : ""}
                </div>
                {currentTask?.StartDate && (
                  <div className="flex mt-4 font-semibold">
                    <span className="pr-2">
                      <BsCalendar4Range></BsCalendar4Range>{" "}
                    </span>
                    <small className="">
                      {currentTask.StartDate} ~{" "}
                      {!currentTask?.Deadline ? (
                        <span className="text-gray-900">--</span>
                      ) : (
                        currentTask?.Deadline
                      )}
                    </small>
                  </div>
                )}

                {/* --------- Dynamic Labels ---------- */}

                {currentTask?.Labels?.length > 0 && (
                  <>
                    <div className="flex items-center mt-4">
                      <FiTag></FiTag>
                      <p className="ml-2 font-semibold">Labels</p>
                    </div>
                    <div className="flex items-center mb-6">
                      {currentTask?.Labels?.map((label, i) => {
                        return (
                          <div className="flex items-center mr-2 ">
                            <div
                              key={label.i}
                              className={`flex items-center w-12 h-2 bg-${label}-400 rounded-full relative hover:bg:black/60`}
                            >
                              <button
                                onClick={() => removeLabel(label)}
                                className="flex items-center hover:text-gray-100 font-semibold justify-center w-12 h-6 text-md opacity-10 hover:opacity-100 absolute bg-black/60 rounded-sm"
                                title="remove label"
                              >
                                <FiTrash></FiTrash>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}

                {/* ------------Text Area section------------- */}

                <GrTextAlignFull></GrTextAlignFull>
                <textarea
                  name="description"
                  placeholder="Description"
                  defaultValue={currentTask?.description}
                  className="input input-bordered p-4 w-full rounded-md outline-border h-28"
                ></textarea>
              </form>
              <br />

              {/* ------------- Attachment section------- */}

              {currentTask?.attachment?.length > 0 && (
                <div className="flex items-center mt-8 mb-2">
                  <FiPaperclip></FiPaperclip>
                  <p className="text-md font-semibold pl-2">Attachment</p>
                </div>
              )}
              {currentTask?.attachment?.length > 0 &&
                currentTask.attachment.map((attach, i) => {
                  return (
                    <div
                      key={attach.i}
                      className=" flex justify-between items-center border border-gray-400 rounded-md p-3 mb-4 bg-stone-300 text-gray-900"
                    >
                      <p className="w-2/3"> {attach}</p>
                      <button
                        title="Remove"
                        onClick={() => removeAttachment(attach)}
                        className="text-gray-900"
                      >
                        <FiTrash></FiTrash>
                      </button>
                    </div>
                  );
                })}

              {/*-------------comments/Activity section----------- */}

              <div className="text-gray-600 mt-8">
                <div className="flex items-center ">
                  <RxActivityLog></RxActivityLog>
                  <h3 className="text-md font-semibold pl-2">Activity</h3>
                </div>
                <div>
                  {/* -----------Comment text area---------- */}

                  <form
                    onSubmit={handleCommentSubmit}
                    className="flex flex-col py-6 space-y-4 md:py-0 ng-untouched ng-pristine ng-valid"
                  >
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
                        className="btn btn-ghost btn-sm rounded-md bg-stone-300 text-stone-800 hover:bg-indigo-300"
                      >
                        Save
                      </button>
                    </div>
                  </form>

                  {comments &&
                    comments.map((c) => {
                      return (
                        <div key={c._id} className="chat chat-start mt-5">
                          <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                              <img alt="user" src={c.photo} />
                            </div>
                          </div>
                          <div className="chat-header ml-1">{c.username}</div>
                          <div className="chat-bubble w-full">{c.text}</div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            {/* ============== Sidebar Area ============= */}

            <div className="col-span-1">
              <div className="h-full space-y-2 w-full  dark:text-gray-700">
                <div className="divide-y divide-gray-700">
                  <ul className="pt-2 pb-4 space-y-1 text-sm text-grey">
                    {/* ------ Suggested section----- */}
                    <p className="pt-6">Add to card</p>
                    <div className="flex flex-wrap md:flex-col">
                      <li className="">
                        <Link
                          rel="noopener noreferrer"
                          tabIndex={0}
                          className={buttonStyle}
                        >
                          <FiUser></FiUser>
                          <span className="text-grey">Assign Members</span>
                          <MembersDropDown
                            assignORremoveMember={assignORremoveMember}
                          ></MembersDropDown>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          rel="noopener noreferrer"
                          tabIndex={0}
                          href="#"
                          className={buttonStyle}
                        >
                          <FiTag></FiTag>
                          <span>Labels</span>
                          <LabelDropDown
                            handleLabel={handleLabel}
                          ></LabelDropDown>
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
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          rel="noopener noreferrer"
                          href="#"
                          tabIndex={2}
                          className={buttonStyle}
                        >
                          <FiClock></FiClock>
                          <span>Deadline</span>
                          <DateDropDown
                            handleDateSubmit={handleDateSubmit}
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                            handleRemoveDate={handleRemoveDate}
                          ></DateDropDown>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          tabIndex={0}
                          rel="noopener noreferrer"
                          href="#"
                          className={buttonStyle}
                        >
                          <FiPaperclip></FiPaperclip>
                          <span>Attachment</span>
                          <AttachmentDropDown
                            handleAttachment={handleAttachment}
                          ></AttachmentDropDown>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          rel="noopener noreferrer"
                          type="file"
                          href="#"
                          tabIndex={7}
                          className={buttonStyle}
                        >
                          <FiBook></FiBook>
                          <span>Cover</span>
                          <CoverDropDown
                            handleUploadCover={handleUploadCover}
                          ></CoverDropDown>
                        </Link>
                      </li>
                    </div>

                    {/*----------- Action Section ----------- */}

                    <p className="text-grey pt-6">Actions</p>
                    <div className="flex flex-wrap md:flex-col">
                      <li className="">
                        <Link
                          rel="noopener noreferrer"
                          href="#"
                          tabIndex={0}
                          className={buttonStyle}
                        >
                          <FiArrowRight></FiArrowRight>
                          <span>Move</span>
                          <MoveDropDown MoveTask={MoveTask}></MoveDropDown>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          tabIndex={5}
                          rel="noopener noreferrer"
                          href="#"
                          className={buttonStyle}
                        >
                          <FiShare2></FiShare2>
                          <span>Share</span>
                          <ShareDropDown></ShareDropDown>
                        </Link>
                      </li>
                    </div>
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
