import React from "react";
import { motion as m } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "../constants/animations";

const ServiceDetailCard = ({ name, img, description }) => {
  return (
    <m.div className="py-10 my-10" {...fadeInUp}>
      <h3 className="uppercase">{name}</h3>
      <div className="flex py-5 relative">
        <m.img
          className="h-48 w-48 object-cover object-center"
          src={img}
          alt={name}
          {...fadeInLeft}
        />
        <m.p className="description pl-14 text-justify" {...fadeInRight}>
          {description}
        </m.p>
      </div>
    </m.div>
  );
};

export default ServiceDetailCard;
