import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Login/Login";
import SingUp from "../Components/SignUp/SignUp";
import Main from "../Layout/Main";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/register",
        element: <SingUp></SingUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },

  {
    path: "*",
    element: <div />,
  },
]);

export default Router;
