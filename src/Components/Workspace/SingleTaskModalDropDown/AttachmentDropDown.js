import React from "react";

const AttachmentDropDown = () => {
  return (
    <div
      tabIndex={0}
      className="dropdown-content p-2 rounded-md w-64 bg-gray-300 divide-gray-800"
    >
      <p className="text-gray-900 font-semibold space-x-3 text-center">
        Attach
      </p>

      <hr />
      <form>
        <div className="my-2">
          <p className="text-gray-900 font-bold">Attach a link</p>
          <input
            type="file"
            name="file"
            className="input w-full rounded-sm text-md text-gray-900 focus:border-gray-900"
            required
          />
          <input type="file" name="file" required />
        </div>
        <div div className="my-2 form-control">
          <button
            type="submit"
            className="btn btn-ghost btn-sm rounded-md bg-gray-800 text-gray-400 my-3"
          >
            Attach
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttachmentDropDown;
