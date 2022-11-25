import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import PageTitle from "../components/elements/PageTitle";
import Teachers, { TeacherInterface } from "../components/elements/Teachers";
import AboutPage from "../components/templates/AboutPage";

interface Props {
  about_page: {
    title: string;
    first_content_block: string;
    first_image: string;
    second_content_block: string;
    second_image: string;
    third_content_block: string;
  };
  teachers: TeacherInterface[];
}

const About: NextPage<Props> = ({ about_page, teachers }) => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <PageTitle title={about_page.title} content={about_page.first_content_block} />

      <AboutPage
        first_image={about_page.first_image}
        second_content_block={about_page.second_content_block}
        second_image={about_page.second_image}
        third_content_block={about_page.third_content_block}
      />

      <Teachers teachers={teachers} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const resAbout = await fetch("https://serverside-backend-project04.herokuapp.com/about_page");
  const about_page = await resAbout.json();

  const resTeachers = await fetch("https://serverside-backend-project04.herokuapp.com/teachers");
  const teachers = await resTeachers.json();

  return {
    props: {
      about_page,
      teachers,
    },
  };
};

export default About;
