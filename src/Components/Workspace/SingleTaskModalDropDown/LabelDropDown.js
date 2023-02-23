import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const LabelDropDown = ({ handleLabel }) => {
  const { currentTask } = useContext(AuthContext);
  // console.log(currentTask);
  return (
    <div
      tabIndex={0}
      className="dropdown-content p-2 pb-3 rounded-md w-64 bg-stone-300 divide-black text-black"
    >
      <p className="font-semibold space-x-3 text-center">Labels</p>

      <hr />
      <div className="mt-4">
        <button
          onClick={() => handleLabel("green")}
          disabled={currentTask?.Labels?.find((label) => label === "green")}
          className="btn-ghost border-green-300 p-1.5 mb-1 w-full bg-green-200 rounded-sm hover:bg-green-300/60"
          title="Green color"
        >
          <div className="bg-green-400 w-4 h-4 ml-2  rounded-full"></div>
        </button>

        <button
          onClick={() => handleLabel("yellow")}
          disabled={currentTask?.Labels?.find((label) => label === "yellow")}
          className="btn-ghost border-yellow-300 p-1.5 mb-1 w-full bg-yellow-100 rounded-sm hover:bg-yellow-100/60"
          title="Yellow color"
        >
          <div className="bg-yellow-400 w-4 h-4 ml-2  rounded-full"></div>
        </button>
        <button
          onClick={() => handleLabel("orange")}
          disabled={currentTask?.Labels?.find((label) => label === "orange")}
          className="btn-ghost border-orange-300 p-1.5 mb-1 w-full bg-orange-200 rounded-sm hover:bg-orange-200/75"
          title="Orange color"
        >
          <div className="bg-orange-400 w-4 h-4 ml-2  rounded-full"></div>
        </button>
        <button
          onClick={() => handleLabel("red")}
          disabled={currentTask?.Labels?.find((label) => label === "red")}
          className="btn-ghost border-red-300 p-1.5 mb-1 w-full bg-red-200 rounded-sm hover:bg-red-200/75"
          title="Red color"
        >
          <div className="bg-red-400 w-4 h-4 ml-2  rounded-full"></div>
        </button>
        <button
          onClick={() => handleLabel("purple")}
          disabled={currentTask?.Labels?.find((label) => label === "purple")}
          className="btn-ghost border-purple-300 p-1.5 mb-1 w-full bg-purple-200 rounded-sm hover:bg-purple-200/75"
          title="Purple color"
        >
          <div className="bg-purple-400 w-4 h-4 ml-2  rounded-full"></div>
        </button>
        <button
          onClick={() => handleLabel("cyan")}
          disabled={currentTask?.Labels?.find((label) => label === "cyan")}
          className="btn-ghost border-cyan-300 p-1.5 mb-1 w-full bg-cyan-200 rounded-sm hover:bg-cyan-200/75"
          title="Blue color"
        >
          <div className="bg-cyan-400 w-4 h-4 ml-2  rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default LabelDropDown;
