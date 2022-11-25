import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import CourseCard, { CourseInterface } from "../../components/elements/CourseCard";
import PageTitle from "../../components/elements/PageTitle";

interface Props {
  courses_page: {
    title: string;
    first_content_block: string;
  };
  courses: CourseInterface[];
}

const CoursesOverview: NextPage<Props> = ({ courses_page, courses }) => {
  return (
    <div>
      <Head>
        <title>Courses Overview</title>
      </Head>

      <PageTitle title={courses_page.title} content={courses_page.first_content_block} />

      <section className="section">
        <div className="container">
          <div className="row">
            {courses.map(c => (
              <CourseCard course={c} key={c.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://serverside-backend-project04.herokuapp.com//courses_page");
  const courses_page = await res.json();

  const resCourses = await fetch("https://serverside-backend-project04.herokuapp.com//courses");
  const courses = await resCourses.json();

  return {
    props: {
      courses_page,
      courses,
    },
  };
};

export default CoursesOverview;
