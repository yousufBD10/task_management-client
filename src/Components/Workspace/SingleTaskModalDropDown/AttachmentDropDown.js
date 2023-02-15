import React from "react";
import { Link } from "react-router-dom";

const AttachmentDropDown = ({ handleAttachment }) => {
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target.form;
    const attachData = {
      attach: form.file.value,
    };
    handleAttachment(attachData);
  };
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
        <div>
          <p className="text-gray-900 font-bold mt-4">Attach a link</p>
          <input
            type="text"
            name="file"
            className="input w-full rounded-sm text-md text-gray-900 focus:border-gray-900"
            required
          />
        </div>
        <div div className="my-2 form-control">
          <button
            onClick={handleForm}
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
