import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import PageTitle from "../components/elements/PageTitle";
import ContactPage, { ContactInterface } from "../components/templates/ContactPage";

interface Props {
  contact_page: ContactInterface;
}

const Contact: NextPage<Props> = ({ contact_page }) => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>

      <PageTitle title={contact_page.title} content={contact_page.first_content_block} />

      <ContactPage contact_page={contact_page} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://serverside-backend-project04.herokuapp.com//contact_page");
  const contact_page = await res.json();

  return {
    props: {
      contact_page,
    },
  };
};

export default Contact;
