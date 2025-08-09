import CourseDetailCard from "./CourseDetailCard";

export default function CourseDetails({ course }) {
  return (
    <div className="pb-10">
      <CourseDetailCard course={course} />
    </div>
  );
}

// TODO: Refactor ServiceFaq to an all-purpose FAQ component
