import React from "react";
import ServiceDetailCard from "./ServiceDetailCard";
import PriceTable from "./PriceTable";
import ServiceGallery from "./ServiceGallery";
import ServiceFaq from "./ServiceFaq";

const ServicesDetail = ({ service }) => {
  return (
    <div>
      <ServiceDetailCard
        name={service.name.replace("_", " ")}
        img={service.img}
        description={service.description}
      />
      <PriceTable
        className="my-10"
        priceData={service.prices}
        isSMP={service.name === "smp"}
      />
      <ServiceGallery service={service.name} />
      <ServiceFaq service={service.name} />
    </div>
  );
};

export default ServicesDetail;
