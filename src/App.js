import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { AuthContext } from "./Context/UserContext";
import Router from "./Router/Router";


function App() {
  const {theme} = useContext(AuthContext)
  console.log(theme);
  return (
    <div className="body  ">
         <RouterProvider router={Router} />
      <ToastContainer />
    </div>
  );
}

export default App;


// className="body" data-theme={theme}