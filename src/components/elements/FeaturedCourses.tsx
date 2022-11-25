import Link from "next/link";
import React from "react";
import CourseCard, { CourseInterface } from "./CourseCard";

interface Props {
  featured_courses: CourseInterface[];
}

const FeaturedCourses: React.FC<Props> = ({ featured_courses }) => {
  return (
    <section className="section-sm">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center section-title justify-content-between">
              <h2 className="mb-0 text-nowrap mr-3">Featured Courses</h2>
              <div className="border-top w-100 border-primary d-none d-sm-block"></div>
              <div>
                <Link href="/courses">
                  <a className="btn btn-sm btn-primary-outline ml-sm-3 d-none d-sm-block">
                    see all
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- course list --> */}
        <div className="row justify-content-center">
          {featured_courses.map(c => (
            <CourseCard course={c} key={c.id} />
          ))}
        </div>
        {/* <!-- mobile see all button --> */}
        <div className="row">
          <div className="col-12 text-center">
            <Link href="/courses">
              <a className="btn btn-sm btn-primary-outline d-sm-none d-inline-block">see all</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
