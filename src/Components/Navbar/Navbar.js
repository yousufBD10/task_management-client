import React, { useContext } from "react";
import { CgLogOut } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useRole from "../../hooks/useRole";
import bgNav from "../../images/bgNav.jpg";
import Loader from "../../Share/Loader";
import CreateWorkSpaceModal from "../CreateWorkSpaceModal/CreateWorkSpaceModal";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut, toggleTheme, isDark } = useContext(AuthContext);
  const [role, isRoleLoading] = useRole(user?.email);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  // eslint-disable-next-line no-unreachable
  if (isRoleLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="bg-gray-100 navbar shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="rounded-none text-black font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              {" "}
              <Link to="/workspace/boards">All Workspaces</Link>
            </li>
            <li>
              <a href="#WorkSpaceModal-1">Create Workspace</a>
            </li>
            {role && (
              <li className="text-black font-semibold">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div className=" w-64 lg:ml-12 p-2 ">
          <Link to="/">
            <img className=" " src="/logo.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="rounded-none text-black font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="text-black font-semibold">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="text-black font-semibold">
            {" "}
            <Link to="/workspace/boards">All Workspaces</Link>
          </li>
          <li className="text-black font-semibold">
            <a href="#WorkSpaceModal-1">Create Workspace</a>
          </li>
          {role && (
            <li className="text-black font-semibold">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="mr-5 cursor-pointer">
          {" "}
          {isDark ? (
            <img
              onClick={toggleTheme}
              className="w-6"
              src="https://cdn-icons-png.flaticon.com/512/831/831682.png"
              alt="#"
            />
          ) : (
            <img
              onClick={toggleTheme}
              className="w-6"
              src="https://icon-library.com/images/moon-icon-png/moon-icon-png-25.jpg"
              alt=""
            />
          )}
        </div>

        {user?.uid ? (
          <>
            <div className="dropdown dropdown-end flex flex-row">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="#"
                    src={
                      user?.photoURL != null
                        ? user?.photoURL
                        : `https://ui-avatars.com/api/?name=${user?.displayName}&color=7F9CF5&background=EBF4FF`
                    }
                  />
                </div>
              </label>
              <div
                tabIndex={1}
                className="menu text-black menu-compact dropdown-content mt-12 p-2 shadow-lg bg-base-100 rounded-sm w-60"
              >
                <h2 className=" text-gray-600 font-bold my-2">ACCOUNT</h2>
                <div className="flex items-center mb-5">
                  <div className="w-10 mr-1">
                    <img
                      alt="#"
                      className="rounded-full"
                      src={
                        user?.photoURL != null
                          ? user?.photoURL
                          : `https://ui-avatars.com/api/?name=${user?.displayName}&color=7F9CF5&background=EBF4FF`
                      }
                    />
                  </div>
                  <div className="ml-3">
                    <p className="mt-3 text-xs mb-0">{user?.displayName}</p>
                    <p className="mt-2 text-xs mb-0">{user?.email}</p>
                  </div>
                </div>
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <div className="divider"></div>
                <li>
                  <Link
                    className="gap-1 items-center text-center"
                    onClick={handleLogOut}
                  >
                    {" "}
                    <CgLogOut></CgLogOut>Logout
                  </Link>
                </li>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <button
                type="button"
                className="hover:bg-gray-100 rounded-md font-medium text-black  text-sm px-5 py-2.5 mr-2 mb-2 "
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button
                type="button"
                className="hover:bg-gray-100 focus-visible: rounded-md  font-medium text-black  text-sm px-5 py-2.5 mr-2 mb-2 "
              >
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
      {user && <CreateWorkSpaceModal></CreateWorkSpaceModal>}
    </div>
  );
};

export default Navbar;
