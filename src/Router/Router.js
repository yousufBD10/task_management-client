import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Login/Login";
import SingUp from "../Components/SignUp/SignUp";
import UserProfile from "../Components/User/UserProfile";
import Boards from "../Components/Workspace/Boards";
import CreateWordspace from "../Components/Workspace/CreateWordspace";
import Members from "../Components/Workspace/Members";
import Settings from "../Components/Workspace/Settings";
import Workspace from "../Components/Workspace/Workspace";
import App from "../Layout/App";
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
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/workspace",
        element: <Workspace/>,
        children: [
          {
            path: "/workspace/boards",
            element: <Boards />,
          },
          {
            path: "/workspace/settings",
            element: <Settings />,
          },
          {
            path: "/workspace/members",
            element: <Members />,
          },
          {
            path: "/workspace/create",
            element: <CreateWordspace />,
          },
        ],
      },
    
      {
        path: "*",
        element: <div />,
      },
    ],
  },
  
]);

export default Router;
