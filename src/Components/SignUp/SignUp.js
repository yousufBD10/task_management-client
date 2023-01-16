import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";

const SingUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { createUser, updateName ,sinInGoogle} = useContext(AuthContext);

  const handleSingUp = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,password,email);
    createUser(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("Users Successfully created!");
      const userInfo = {
        displayName: name,
      };
      updateName(userInfo)
        .then(() => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    });
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignin = () => {
    sinInGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
       
       
        
        const currentUser = {
          email: user.email
      }

      console.log(currentUser);
      

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div
      className="h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-1 rounded-xl bg-glass shadow-lg shadow-shade/100 m-2 backdrop-invert-1">
        <h1 className="dark:text-gray-600 text-2xl font-bold text-center">
          Sign Up
        </h1>
        <form onSubmit={handleSingUp}
          novalidate=""
          action=""
          className="space-y-3 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label  className="block dark:text-gray-600">
              Full name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="input input-bordered w-full px-4 py-3 rounded-md dark:border-gray-200 bg-greyish text-white"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label  className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="input input-bordered w-full px-4 py-3 rounded-md dark:border-gray-200 bg-greyish text-white"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label  className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="input input-bordered w-full px-4 py-3 rounded-md dark:border-gray-700 dark:text-white focus:dark:border-violet-400 bg-greyish"
            />
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
          <button  onClick={handleGoogleSignin} 
            aria-label="Log in with Google"
            className="p-3 rounded-full w-12 h-12 bg-glass shadow-lg shadow-shade/100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
