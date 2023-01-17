import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";
import useDocumentTitle from "../../Share/useDocumentTitle";
import GitHubSignIn from "../GitHubSignIn/GitHubSignIn";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import TwitterSignIn from "../TwitterSignIn/TwitterSignIn";

const SingUp = () => {
  useDocumentTitle("Signup");
  const { user, createUser, updateName, verifyEmail } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState();

  const handleSignUp = (e) => {
    e.preventDefault();
    setPasswordError('');
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setPasswordError("Password should be at least 6 character");
      return;
    }

    // ----create user---
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();

        //--- update profile name-----
        updateName(name)
          .then(() => {
            //----- verify user email -----
            verifyEmail()
              .then(() => {
                toast.success("Successfully created your account");
              })
              .catch((error) => {
                toast.error(error.message);
              });
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => toast.error(error.message));
  };

  return (<div className="h-screen flex justify-center items-center">
    <div className="w-full max-w-md p-8 space-y-1 rounded-xl bg-glass shadow-lg shadow-shade/100 m-2 backdrop-invert-1">
      <h1 className="dark:text-gray-600 text-2xl font-bold text-center">
        Sign Up
      </h1>
      <form onSubmit={handleSignUp}
        novalidate=""
        action=""
        className="space-y-3 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">
            Full name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="input input-bordered w-full px-4 py-3 rounded-md dark:border-gray-200 bg-greyish text-white"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full px-4 py-3 rounded-md dark:border-gray-200 bg-greyish text-white"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full px-4 py-3 rounded-md dark:border-gray-700 dark:text-white focus:dark:border-violet-400 bg-greyish"
            required
          />
          <p className="text-red">{passwordError}</p>
          <div className="flex justify-end text-xs dark:text-gray-900">
            <Link rel="noopener noreferrer" to="/login">
              Already have an account, Login
            </Link>
          </div>
        </div>
        <button type="submit" className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-buttomish">
          Sign in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm dark:text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <GoogleSignIn></GoogleSignIn>
        <TwitterSignIn></TwitterSignIn>
        <GitHubSignIn></GitHubSignIn>
      </div>
    </div>
  </div>
  );
};

export default SingUp;
