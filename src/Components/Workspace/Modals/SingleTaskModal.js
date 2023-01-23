import React from "react";
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

const SingleTaskModal = () => {
  return (
    <div>
      <div id="new-board-modal" className="modal">
        <div className="modal-box rounded-sm max-w-screen-md mx-2">
          <a
            href="#"
            className="btn btn-ghost btn-sm absolute right-2 top-2"
          >
            ✕
          </a>

          <div className="grid grid-cols-4 -mr-4">
            <div className="px-6 dark:text-gray-500 col-span-4 md:col-span-3">
              <form className="grid grid-cols-1 gap-3 mt-10">
                {/* ------------title input section---------- */}
                <input
                  name="name"
                  type="text"
                  placeholder="Untitled"
                  className="input input-bordered w-full rounded-sm text-3xl font-semibold"
                  required
                />

                {/* ------------Text Area section------------- */}

                <textarea
                  id="bio"
                  placeholder=""
                  className="input input-bordered p-4 w-full rounded-sm outline-border h-24"
                ></textarea>
                <br />
              </form>

              {/*-------------comments/Activity section----------- */}

              <div className="text-gray-600">
                <div className="flex justify-between ">
                  <h3 className="text-md font-semibold">Activity</h3>

                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="flex btn-ghost btn-sm text-gray-600  items-center p-2 space-x-3 rounded-sm shadow-sm"
                  >
                    <p>Show Details</p>
                  </Link>
                </div>
                <div>
                  {/* -----------Comment text area---------- */}

                  <form className="flex flex-col py-6 space-y-4 md:py-0 ng-untouched ng-pristine ng-valid">
                    <label className="block">
                      <textarea
                        id="bio"
                        placeholder=""
                        className="input input-bordered p-4 w-full rounded-sm outline-border"
                      ></textarea>
                    </label>
                    <div className="flex flex-wrap">
                      {/* ----- comment submit button------ */}
                      <button
                        onClick={""}
                        type="submit"
                        className="btn btn-active btn-ghost btn-sm rounded-md"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
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

                    <p className="text-grey mt-6">Suggested</p>
                    <li className="shadow-sm">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className="flex btn-ghost btn-sm  items-center p-2 space-x-3 rounded-sm shadow-sm"
                      >
                        <FiUser></FiUser>
                        <span>Join</span>
                      </Link>
                    </li>
                    <p className="pt-6">Add to card</p>
                    <li className="shadow-md">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-sm btn-ghost btn-sm"
                      >
                        <FiUser></FiUser>
                        <span className="text-grey">Members</span>
                      </Link>
                    </li>
                    <li className="shadow-md">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-sm btn-ghost btn-sm"
                      >
                        <FiTag></FiTag>
                        <span>Labels</span>
                      </Link>
                    </li>
                    <li className="shadow-md">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-sm btn-ghost btn-sm"
                      >
                        <FiCheckSquare></FiCheckSquare>
                        <span>Checklist</span>
                      </Link>
                    </li>
                    <li className="shadow-md">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-sm btn-ghost btn-sm"
                      >
                        <FiClock></FiClock>
                        <span>Dates</span>
                      </Link>
                    </li>
                    <li className="shadow-md">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-sm btn-ghost btn-sm"
                      >
                        <FiPaperclip></FiPaperclip>
                        <span>Attachment</span>
                      </Link>
                    </li>
                    <li className="shadow-md">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-sm btn-ghost btn-sm"
                      >
                        <FiBook></FiBook>
                        <span>Cover</span>
                      </Link>
                    </li>

                    {/*----------- Action Section ----------- */}

                    <p className="text-grey pt-6">Actions</p>
                    <li className="shadow-md">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-sm btn-ghost btn-sm"
                      >
                        <FiArrowRight></FiArrowRight>
                        <span>Move</span>
                      </Link>
                    </li>
                    <li className="shadow-md">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-sm btn-ghost btn-sm"
                      >
                        <FiCopy></FiCopy>
                        <span>Copy</span>
                      </Link>
                    </li>
                    <li className="shadow-md">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-sm btn-ghost btn-sm"
                      >
                        <TbTemplate></TbTemplate>
                        <span>Make Template</span>
                      </Link>
                    </li>
                    <li className="shadow-md">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-sm btn-ghost btn-sm"
                      >
                        <FiArchive></FiArchive>
                        <span>Archive</span>
                      </Link>
                    </li>
                    <li className="shadow-md">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-sm btn-ghost btn-sm"
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
