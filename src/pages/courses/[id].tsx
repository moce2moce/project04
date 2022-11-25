import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { CourseInterface } from "../../components/elements/CourseCard";
import PageTitle from "../../components/elements/PageTitle";
import RelatedCourses from "../../components/elements/RelatedCourses";
import CourseDetailPage from "../../components/templates/CourseDetailPage";

interface Props {
  course: CourseInterface;
  related_courses: CourseInterface[];
}

const CourseDetail: NextPage<Props> = ({ course, related_courses }) => {
  return (
    <div>
      <Head>
        <title>{course.title}</title>
      </Head>

      <PageTitle title={course.title} content={course.excerpt} />

      <CourseDetailPage
        course_detail={{
          image: course.image,
          category: course.category,
          content: course.content,
          fee: course.fee,
          duration: course.duration,
        }}
      />

      <RelatedCourses related_courses={related_courses} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:5001/courses");
  const courses: CourseInterface[] = await res.json();

  const paths = courses.map(c => ({
    params: {
      id: c.id,
    },
  }));

  return {
    paths, // paths: paths
    fallback: false,
    // every other route which will fall out of the map above will result in a 404 page
    // /courses/123 -> 404
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contain the "id"
  if (params) {
    const res = await fetch(`http://localhost:5001/courses/${params.id}`);
    const course = await res.json();

    const resCourses = await fetch(`http://localhost:5001/courses`);
    const courses: CourseInterface[] = await resCourses.json();

    // courses?_start=random&_limit=3
    // courses length 9 - we always want to show the next 3 items, so we limit the number to 7
    // math.random goes to + 1 number so we get one number plus

    const randomNo = Math.floor(Math.random() * (courses.length - 3));
    const resRelated = await fetch(`http://localhost:5001/courses?_start=${randomNo}&_limit=3`);
    const related_courses = await resRelated.json();

    return {
      props: {
        course,
        related_courses,
      },
    };
  }

  // if there are no params -> return empty props
  return { props: {} };
};

export default CourseDetail;
