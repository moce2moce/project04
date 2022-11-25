import React from "react";
import CourseCard, { CourseInterface } from "./CourseCard";

interface Props {
  related_courses: CourseInterface[];
}

const RelatedCourses: React.FC<Props> = ({ related_courses }) => {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Related Courses</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {related_courses.map(c => (
            <CourseCard course={c} key={c.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCourses;
