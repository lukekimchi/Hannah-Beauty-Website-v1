"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    review: string;
    name: string;
    rating: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }
    }
  };
  const StarRating = ({ rating }) => {
    const stars = Array.from({ length: rating }, (_, index) => index + 1);

    return (
      <div className="flex">
        {stars.map((star, index) => (
          <MdOutlineStarPurple500
            key={index}
            className="px-[0.5px] h-5 w-5 bg-gold"
          />
        ))}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <a
            href="https://www.google.com/search?q=hannah+beauty&rlz=1C5CHFA_enNZ1034NZ1034&oq=hannah+beauty&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQIxgnMg8IAhAuGEMYsQMYgAQYigUyCggDEAAYsQMYgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYQdIBCDI4NTNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x6d0d4734dbc57787:0xea07f0717ec710d1,1,,,,"
            target="blank"
            key={item.name}
          >
            <li
              className="shadow-xl w-[350px] max-w-full h-[400px] lg:h-[300px] relative rounded-none border flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] clickable"
              style={{
                background:
                  "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
              }}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <div className="relative z-20 mt-2 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="lg:text-sm text-lg leading-[1.6] text-gray-600 font-normal">
                      {item.name}
                    </span>
                    <div className="flex my-1">
                      <StarRating rating={item.rating} />
                    </div>
                  </span>
                </div>
                <span className="relative z-20 lg:text-sm text-lg leading-[1.6] text-gray-800 font-normal italic">
                  {item.review}
                </span>
              </blockquote>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};
