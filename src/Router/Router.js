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
import Payment from "../Components/PricingPlans/Payment/Payment"
import Pricing from "../Components/PricingPlans/Pricing/Pricing";
import Checkout from "../Components/PricingPlans/Checkout/Checkout"
import AdminDashboard from "../Layout/AdminDashboard/AdminDashboard";
import User from "../Layout/AdminDashboard/User";
import Order from "../Components/PricingPlans/Order/Order";
import AdminHomePage from "../Layout/AdminDashboard/AdminHomePage";
import Privacy from "../Components/Footer/Privacy/Privacy";
import Terms from "../Components/Footer/Terms/Terms";
import UserWorkspace from "../Layout/AdminDashboard/UserWorkspace";
import UserBoard from "../Layout/AdminDashboard/UserBoard";


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
        element: <UpdateUser />,
      },
      {
        path: '/pricing',
        element: <Pricing></Pricing>
      },

      {
        path: '/pricingOptions/:id',
        element: <Checkout></Checkout>,
        loader: ({ params }) => fetch(process.env.REACT_APP_SERVER_URL + `/pricingOptions/${params.id}`)

      },
      {
        path: '/payment',
        element: <Payment></Payment>
      },
      {
        path: "*",
        element: <Error></Error>,
      },
      {
        path: "/order",
        element: <Order></Order>
      },
      {
        path: '/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(process.env.REACT_APP_SERVER_URL + `/bookings/${params.id}`)
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>
      },
      {
        path: "/terms",
        element: <Terms></Terms>
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
    path: "/workspace/board/:id",
    element: <PrivateRoute><WorkspaceSingle /></PrivateRoute>,
    children: [
      {
        path: "/workspace/board/:id",
        element: <BoardCards />,
      }
    ],
  },


  {
    path: "/dashboard",
    element: <PrivateRoute><AdminDashboard /></PrivateRoute>,
    children: [
      {
        path: "/dashboard/user",
        element: <User />,
      },
      {
        path: "/dashboard",
        element: <AdminHomePage />,
      },
      {
        path: "/dashboard/userworkspace",
        element: <UserWorkspace/>,
      },
      {
        path: "/dashboard/userboards/:id",
        element: <UserBoard/>,
        loader: ({params})=> fetch(process.env.REACT_APP_SERVER_URL +  `/userboard/${params.id}`)
      },


    ],
  },


]);

export default Router;
