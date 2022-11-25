import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import AboutBlock from "../components/elements/AboutBlock";
import { CourseInterface } from "../components/elements/CourseCard";
import FeaturedCourses from "../components/elements/FeaturedCourses";
import HeroSection from "../components/elements/HeroSection";
import Testimonials, { TestimonialInterface } from "../components/elements/Testimonials";

interface Props {
  homepage: {
    title: string;
    content: string;
    testimonials_title: string;
    testimonials_content: string;
  };
  about_block: {
    title: string;
    first_content_block: string;
    first_image: string;
  };
  featured_courses: CourseInterface[];
  testimonials: TestimonialInterface[];
}

const Home: NextPage<Props> = ({ homepage, about_block, featured_courses, testimonials }) => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <HeroSection title={homepage.title} content={homepage.content} />

      <AboutBlock
        title={about_block.title}
        first_content_block={about_block.first_content_block}
        first_image={about_block.first_image}
      />

      <FeaturedCourses featured_courses={featured_courses} />

      <Testimonials
        title={homepage.testimonials_title}
        content={homepage.testimonials_content}
        testimonials={testimonials}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://serverside-backend-project04.herokuapp.com/homepage");
  const homepage = await res.json();

  const resAbout = await fetch("https://serverside-backend-project04.herokuapp.com/about_page");
  const about_block = await resAbout.json();

  // get the first 3 courses
  const resCourses = await fetch("https://serverside-backend-project04.herokuapp.com/courses?_start=1&_limit=3");
  const featured_courses = await resCourses.json();

  const resTestimonials = await fetch("https://serverside-backend-project04.herokuapp.com/testimonials");
  const testimonials = await resTestimonials.json();

  return {
    props: {
      homepage,
      about_block,
      featured_courses,
      testimonials,
    },
  };
};

export default Home;
