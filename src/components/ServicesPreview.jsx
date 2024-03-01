import React from "react";
import { servicesData } from "../constants/services";
import ServicePreviewCard from "./ServicePreviewCard";

const ServicesPreview = () => {
  return (
    <section>
      <div className="flex justify-center px-5">
        <div className="w-5/6 bg-primary px-2">
            {servicesData.map((previewCard) => (
                <ServicePreviewCard key={previewCard.id} name={previewCard.name} img={previewCard.img} preview={previewCard.preview} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
