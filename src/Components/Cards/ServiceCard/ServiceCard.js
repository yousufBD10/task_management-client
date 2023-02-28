import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import "./ServiceCard.css";

const ServiceCard = ({ image, title, text }) => {
  const {theme} = useContext(AuthContext);
  return (

    <div className={theme?.serviceCard}>
      <article className="flex flex-col rounded-lg border border-gray-100 p-2 shadow-sm transition hover:shadow-lg sm:p-6">
        <span className="inline-block rounded p-2">
          <img src={image} className="lg:h-36 object-cover mx-auto" alt="image" />
        </span>

        <div className="mt-auto">
          <h3 className="mt-0.5 text-lg font-medium ">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed  line-clamp-3">
            {text.slice(0,150)}...
          </p>
          <p>
          <Link to={'/'} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium ">
          Read More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg></Link></p>
          
        </div>
      </article>


      
    </div>
   
  );
};

export default ServiceCard;
