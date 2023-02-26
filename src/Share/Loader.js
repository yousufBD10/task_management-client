import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";

const Loader = () => {
  return (
    <div >
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-800 "></div>
      </div>
    </div>
  );
};

export default Loader;
