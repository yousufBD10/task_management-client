import { useContext } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { AuthContext } from "./Context/UserContext";
import Store from "./Redux/Store";
import Router from "./Router/Router";


function App() {
  const { theme } = useContext(AuthContext)
  console.log(theme);
  return (
    <div className="body  ">
      <Provider store={Store}>
        <RouterProvider router={Router} />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;


// className="body" data-theme={theme}
