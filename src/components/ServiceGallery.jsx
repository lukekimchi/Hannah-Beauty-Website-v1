// FIXME: image dimensions kinda whack
// FIXME: loading of image takes a while

import { React } from "react";
import {
  browsImages,
  lashImages,
  eyelinerImages,
  lipBlushImages,
  smpImages,
} from "../constants/images";
import { motion as m } from "framer-motion";
import { fadeInUp, fadeInDown } from "../constants/animations";
import ReactCompareImage from "react-compare-image";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const ServiceGallery = ({ service }) => {
  const serviceImageMapping = {
    brows: browsImages,
    lash_lift: lashImages,
    eyeliner: eyelinerImages,
    lip_blush: lipBlushImages,
    smp: smpImages,
  };

  const serviceImages = serviceImageMapping[service] || [];

  const isLashLift = service === "lash_lift";

  return (
    <m.div
      className="flex justify-center w-full bg-gray-100"
      {...fadeInUp(0.1)}
    >
      <m.div className="flex items-center w-5/6 py-24 ">
        <div className="flex flex-wrap justify-center w-full my-10">
          {serviceImages.map((image, index) => (
            <m.div className="m-4" key={image.id} {...fadeInDown(0.1 * index)}>
              {isLashLift ? (
                // Render a regular image when service is "lash_lift"
                <div
                  className="gallery-image"
                  style={{ backgroundImage: `url(${image.before})` }}
                  alt={`Img ${image.id}`}
                />
              ) : (
                // Render BeforeAfterSlider for other services
                <div className="w-[175px] h-[175px]">
                  <ReactCompareImage
                    sliderLineWidth={1}
                    sliderPositionPercentage={0.7}
                    hover={true}
                    handleSize={25}
                    leftImage={image.after}
                    rightImage={image.before}
                  />
                </div>
              )}
            </m.div>
          ))}
          <m.div className="w-full text-center mt-5 text-gray-500">
            <a
              href={
                service === "smp"
                  ? "https://www.instagram.com/hannah_beauty_smp/"
                  : "https://www.instagram.com/hannah_beauty_nz/"
              }
              target="blank"
            >
              <p className="clickable hover:font-semibold mx-10">
                {service === "smp" ? "@hannah_beauty_smp" : "@hannah_beauty_nz"}
              </p>
            </a>
          </m.div>
        </div>
      </m.div>
    </m.div>
  );
};

export default ServiceGallery;
