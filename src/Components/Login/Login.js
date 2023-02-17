import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";
import GitHubSignIn from "../GitHubSignIn/GitHubSignIn";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";

import useDocumentTitle from "../../Share/useDocumentTitle";

const Login = () => {
  useDocumentTitle("Login");
  const { signIn, resetPassword, jwtANDUser } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [userError, setUserError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // ----- Login function----------
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        jwtANDUser(user, false);
        toast.success("Successfully login");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };
  // --------------- Password reset function----------
  const handleOnBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };
  const handlePasswordReset = () => {
    if (!userEmail) {
      setUserError("Please fill the email field for the create new password");
      return;
    } else {
      resetPassword(userEmail);
      setUserEmail("")
        .then(() => {
          toast.success("Please check your email, reset your password");
        })
        .catch((error) => toast.error(error.message));
    }
  };

  return (
    <div className="grid items-center  lg:grid-cols-2 px-8 bg-white ">
      <div className="flex items-center justify-center hidden md:block">
        <img
          className="lg:w-[670px] mx-auto lg:mr-12"
          src="/assets/banner/login-2.png"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full lg:pl-10 max-w-md p-8 space-y-3 rounded-md  opacity-90 shadow-shade/100 m-2 backdrop-invert-1">
          <h1 className="text-gray-500 text-2xl font-bold text-center">
            Login
          </h1>

          <form
            action=""
            onSubmit={handleLogIn}
            className="space-y-3 ng-untouched ng-pristine ng-valid"
          >
            {/* ---- Email Input--------- */}
            <div className="space-y-1 text-sm">
              <label for="username" className="block dark:text-gray-700">
                Email
              </label>
              <input
                onBlur={handleOnBlur}
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="input input-bordered  w-full px-4 py-3 rounded-md border-b-4 border-purple-200"
              />
              <p>
                <small className="text-red-500">{userError}</small>
              </p>
            </div>

            {/* ------------------Password input------------- */}

            <div className="space-y-1 text-sm">
              <label for="password" className="block dark:text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="input input-bordered w-full px-4 py-3 rounded-md  border-b-4 border-purple-200"
              />

              {/* -------- Forget Password----------- */}

              <div className="flex justify-end text-xs dark:text-gray-400">
                <Link rel="noopener noreferrer" onClick={handlePasswordReset}>
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* --------Login Button-------- */}

            <button className="btn btn-primary border-none block w-full p-3 text-center rounded-m dark:text-gray-100 bg-gradient-to-r from-purple-500 to-indigo-500">
              Login
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <GoogleSignIn></GoogleSignIn>
            <GitHubSignIn></GitHubSignIn>
          </div>
          <p className="text-xs text-center sm:px-6 dark:text-gray-700">
            Don't have an account?
            <Link
              rel="noopener noreferrer"
              to="/register"
              className="underline
        dark:text-gray-800 font-semibold"
            >
              {""} Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
