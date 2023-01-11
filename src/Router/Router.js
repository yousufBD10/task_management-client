import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";
import Main from "../Layout/Main";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Homepage />
            }
        ]
    },

    {
        path: '*',
        element: <div />
    }
]);

export default Router;