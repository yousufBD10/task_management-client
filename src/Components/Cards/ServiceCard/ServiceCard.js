import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";
import "./ServiceCard.css";

const ServiceCard = ({ image, title, text }) => {
  const {theme} = useContext(AuthContext);
  return (
    <div className={theme?.serviceCard}>
      <article className="flex flex-col rounded-lg border border-gray-100 p-2 shadow-sm transition hover:shadow-lg sm:p-6">
        <span className="inline-block rounded p-2  text-white">
          <img src={image} className="lg:h-36 object-cover mx-auto" alt="ima" />
        </span>

        <div className="mt-auto">
          <h3 className="mt-0.5 text-lg font-medium ">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed  line-clamp-3">
            {text.slice(0,150)}...
          </p>
          {/* <Link to={''} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                        Find out more
                        <span aria-hidden="true" className="block transition group-hover:translate-x-0.5">
                            →
                        </span>
                    </Link> */}
        </div>
      </article>
    </div>
  );
};

export default ServiceCard;
