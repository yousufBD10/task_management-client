import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";
import GitHubSignIn from "../GitHubSignIn/GitHubSignIn";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import TwitterSignIn from "../TwitterSignIn/TwitterSignIn";

const Login = () => {
  const { signIn, resetPassword } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");

  const handleLogIn = (event) => {
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully login");
        form.reset();
      })
      .catch((error) => toast.error(error.message));
  };

  const handlePasswordReset = () => {
    resetPassword(userEmail)
      .then(() => {
        toast.success("Please check your email, reset your password");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-hero bg-no-repeat">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-glass shadow-lg shadow-shade/100 m-2 backdrop-invert-1">
        <h1 className="text-black text-2xl font-bold text-center">Login</h1>

        <form
          action=""
          onSubmit={handleLogIn}
          className="space-y-3 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="input input-bordered w-full px-4 py-3 rounded-md dark:border-gray-200 bg-greyish"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="input input-bordered w-full px-4 py-3 rounded-md dark:border-gray-700  focus:dark:border-violet-400 bg-greyish"
            />
            <div className="flex justify-end text-xs dark:text-gray-900">
              <Link rel="noopener noreferrer" onClick={handlePasswordReset}>
                Forgot Password?
              </Link>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-buttomish">
            Login
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
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Don't have an account?
          <Link
            rel="noopener noreferrer"
            to="/register"
            className="underline
          dark:text-gray-100"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
