import React, { useContext, useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { AuthContext } from "../../../Context/UserContext";
import { toast } from "react-toastify";

const thisMonth = new Date();

const DateDropDown = () => {
  const { boardItems, currentTask, user, logOut, currentWorkspace } =
    useContext(AuthContext);
  //------- Received selected date range from DayPicker calendar-----
  const [selectedDate, setSelectedDate] = useState();

  const handleDateSubmit = () => {
    const dateData = {
      wid: currentTask.wid,
      boardId: currentTask.boradId,
      taskId: currentTask._id,
      taskName: currentTask.note,
      taskCreated: currentTask.created,
      StartDate: selectedDate?.from && format(selectedDate.from, "PP"),
      Deadline: selectedDate?.to && format(selectedDate.to, "PP"),
      username: user.displayName,
    };
    console.log(dateData);
    fetch(`${process.env.REACT_APP_SERVER_URL}/create-deadline`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(dateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Work duration updated");
        // form.reset();
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div
      tabIndex={2}
      className="dropdown-content p-2 rounded-md bg-gray-100 divide-gray-800"
    >
      <p className="text-gray-900 font-semibold space-x-3 text-center">Dates</p>

      <hr />
      {/*------- Calendar ---------- */}
      <div className="my-2">
        <DayPicker
          mode="range"
          selected={selectedDate}
          onSelect={setSelectedDate}
          defaultMonth={thisMonth}
        />
      </div>
      <form action="" onSubmit={""}>
        <div>
          <div>
            <p className="text-gray-500">
              Start date:{" "}
              {selectedDate?.from && format(selectedDate.from, "Pp")}
            </p>
          </div>
          <div>
            <p className="text-gray-500">
              Due date: {selectedDate?.to && format(selectedDate.to, "PP")}
            </p>
          </div>
        </div>
        <div className="my-4">
          <p className="text-gray-900 font-bold mb-2">Set due date reminder</p>
          <select name="" id="" className="w-full text-gray-900">
            <option value="#">(none)</option>
            <option value="#">At time of due date</option>
            <option value="#">5 mins before</option>
            <option value="#">10 mins before</option>
            <option value="#">15 mins before</option>
            <option value="#">1 hour before</option>
            <option value="#">2 hours before</option>
            <option value="#">1 day before</option>
            <option value="#">2 days before</option>
          </select>
          <div className="my-4">
            <button
              onClick={handleDateSubmit}
              type="submit"
              className="btn btn-ghost btn-sm rounded-md bg-gray-800 text-gray-400"
            >
              Save
            </button>
            <button
              type="submit"
              className="btn btn-ghost btn-sm font-normal bg-gray-300 rounded-md text-gray-700 ml-3"
            >
              Remove
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DateDropDown;
