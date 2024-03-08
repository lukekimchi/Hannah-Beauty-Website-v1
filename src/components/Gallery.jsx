import React from "react";
import { galleryImages } from "../constants/gallery";
import { motion as m } from "framer-motion";

const Gallery = () => {
  return (
    <div className="flex justify-center w-full bg-secondary">
      <div className="flex md:flex-col items-center w-5/6 py-24">
        <div className="flex flex-wrap justify-center w-full my-10">
          {galleryImages.map((image, index) => (
            <m.div
              className="m-4"
              key={image.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            >
              <a
                href="https://www.instagram.com/hannah_beauty_nz/"
                target="blank"
              >
                <img
                  loading="eager"
                  className="home-image clickable"
                  src={image.src}
                  alt={`Img ${image.id}`}
                />
              </a>
            </m.div>
          ))}
        </div>
        <div>
          <a href="https://www.instagram.com/hannah_beauty_nz/" target="blank">
            <p className="text-xl lg:text-lg my-[-10px] lg:my-[-2px] clickable hover:font-semibold mx-10">
              @hannah_beauty_nz
            </p>
          </a>
          <a href="https://www.instagram.com/hannah_beauty_smp/" target="blank">
            <p className="lg:text-lg lg:my-[-2px] text-xl my-3 clickable hover:font-semibold mx-10">
              @hannah_beauty_smp
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

// TODO: automatic updates
// https://community.zapier.com/show-tell-5/how-to-update-embedded-images-like-on-a-website-using-a-zap-14339
