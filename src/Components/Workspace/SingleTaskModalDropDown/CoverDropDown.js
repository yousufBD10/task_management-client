import React from "react";
import { toast } from "react-toastify";

const CoverDropDown = ({ handleUploadCover }) => {
  const imgbbKey = process.env.REACT_APP_imgbb_key;

  const handleCover = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.files[0];

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          handleUploadCover(imgData.data.url);
          form.files[0].reset();
        } else {
          toast.error(imgData.message);
        }
      });
  };

  return (
    <div
      className="dropdown-content p-2  rounded-md w-72 bg-stone-200 divide-gray-800"
      tabIndex={7}
    >
      <p className="text-black font-semibold space-x-3 text-center">Cover</p>
      <hr />
      <form
        onClick={(e) => e.stopPropagation()}
        className="w-full space-y-1 dark:text-black"
      >
        <label for="files" className="block text-sm font-medium mt-2">
          Upload your form
        </label>

        <div className="flex">
          <input
            type="file"
            name="image"
            onChange={handleCover}
            value=""
            id="files"
            className="pl-2 py-8 mb-2 border-2 border-dashed rounded-md  text-sm dark:border-gray-700 dark:text-gray-700 dark:bg-stone-300"
          />
        </div>
        <button
          onClick={""}
          type="submit"
          className="btn btn-ghost mb-4 btn-sm rounded-md bg-stone-400 text-black hover:bg-indigo-300 w-full"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CoverDropDown;
