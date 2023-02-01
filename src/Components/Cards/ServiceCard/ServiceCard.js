import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ image, title, text }) => {
  return (
    <div className="h-auto md:h-[500px] flex overflow-hidden shadow">
      <article className="flex flex-col rounded-lg border border-gray-100 p-2 shadow-sm transition hover:shadow-lg sm:p-6">
        <span className="inline-block rounded p-2  text-white">
          <img src={image} className="h-52 object-cover mx-auto" alt="ima" />
        </span>

        <div className="mt-auto">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            {text}
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
