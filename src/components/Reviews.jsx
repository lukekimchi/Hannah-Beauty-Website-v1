import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { googleReviewData } from "../constants/reviews";

const Reviews = () => {
  return (
    <div className="flex justify-center my-40 overflow-x-hidden">
      <div className="h-full flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={googleReviewData}
          direction="right"
          speed="slow"
          pauseOnHover={false}
        />
      </div>
    </div>
  );
};

export default Reviews;
