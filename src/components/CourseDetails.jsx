import React from "react";
import CourseDetailCard from "./CourseDetailCard";

export default function CourseDetails({ course }) {
  return (
    <div className="border-b border-gray-500 pb-10">
      <CourseDetailCard course={course} />
    </div>
  );
}

// TODO: Refactor ServiceFaq to an all-purpose FAQ component
