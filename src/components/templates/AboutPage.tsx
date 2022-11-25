import React from "react";

interface Props {
  first_image: string;
  second_content_block: string;
  second_image: string;
  third_content_block: string;
}

const AboutPage: React.FC<Props> = ({
  first_image,
  second_content_block,
  second_image,
  third_content_block,
}) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img className="img-fluid w-100 mb-4" src={first_image} alt="about image" />
            <p className="mb-5">{second_content_block}</p>
            <img className="img-fluid w-100 mb-4" src={second_image} alt="about image" />
            <p>{third_content_block}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
