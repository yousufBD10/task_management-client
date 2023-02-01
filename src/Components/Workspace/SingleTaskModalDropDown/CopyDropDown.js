import React from "react";

const CopyDropDown = () => {
  return (
    <div
      tabIndex={0}
      className="dropdown-content p-2 rounded-md w-64 bg-gray-300 divide-gray-800"
    >
      <p className="text-gray-900 font-semibold space-x-3 text-center">
        Copy Card
      </p>

      <hr />
      <form action="">
        <div className="my-2">
          <p className="text-gray-900 font-bold">Title</p>
          <input
            name="name"
            type="text"
            className="input w-full rounded-sm text-md text-gray-900 focus:border-gray-900"
            required
          />
        </div>
        <div>
          <p className="text-gray-900 font-bold">Copy to board...</p>
          <select name="" id="" className="w-full text-gray-900">
            <option value="#">(none)</option>
            <option value="">Make dynamic board</option>
          </select>
        </div>
        <div>
          <p className="text-gray-900 font-bold">List...</p>
          <select name="" id="" className="w-full text-gray-900">
            <option value="">Make dynamic board</option>
          </select>
        </div>
        <button
          onClick={""}
          type="submit"
          className="btn btn-ghost btn-sm rounded-md bg-gray-800 text-gray-400 my-3"
        >
          Create card
        </button>
      </form>
    </div>
  );
};

export default CopyDropDown;
