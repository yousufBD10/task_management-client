import React from "react";

const AttachmentDropDown = ({ handleAttachment }) => {
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target.form;
    const attachData = {
      attach: form.file.value,
    };
    handleAttachment(attachData);
    form.reset();
  };
  return (
    <div
      tabIndex={0}
      className="dropdown-content p-2 rounded-md w-64 bg-stone-200 divide-gray-800"
    >
      <p className="text-black font-semibold space-x-3 text-center">Attach</p>

      <hr />

      <form>
        <div>
          <p className="text-gray-900 font-semibold mt-4">Attach a link</p>
          <input
            type="text"
            name="file"
            className="input w-full rounded-sm text-md text-black focus:border-gray-900"
            required
          />
        </div>
        <div className="mt-3 form-control">
          <button
            onClick={handleForm}
            type="submit"
            className="btn btn-ghost btn-sm rounded-md bg-stone-400 text-black  hover:bg-indigo-300"
          >
            Attach
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttachmentDropDown;
