import Router from "./Router/Router";
import { RouterProvider } from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "./Context/UserContext";


function App() {
  const {theme} = useContext(AuthContext)
  console.log(theme);
  return (
    <div data-theme={theme} >
      <RouterProvider router={Router} />
      <ToastContainer />
    </div>
  );
}

export default App;
