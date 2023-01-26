import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Login/Login";
import SingUp from "../Components/SignUp/SignUp";
import UserProfile from "../Components/User/UserProfile";
import BoardCards from "../Components/Workspace/BoardCards";
import Boards from "../Components/Workspace/Boards";
import Members from "../Components/Workspace/Members";
import Settings from "../Components/Workspace/Settings";
import Main from "../Layout/Main";
import Workspace from "../Layout/Workspace";
import WorkspaceSingle from "../Layout/WorkspaceSingle";
import Error from "../Share/Error";
import PrivateRoute from "./PrivateRoute";
import UpdateUser from "../Components/User/UpdateUser"

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
        path: "/updateprofile",
        element: <UpdateUser/>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
  {
    path: "/workspace",
    element: <PrivateRoute><Workspace /></PrivateRoute>,
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
    ],
  },
  {
    path: "/workspace/single",
    element: <PrivateRoute><WorkspaceSingle /></PrivateRoute>,
    children: [
      {
        path: "/workspace/single",
        element: <BoardCards />,
      }
    ],
  },

]);

export default Router;
