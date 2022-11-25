import React from "react";

export interface TestimonialInterface {
  id: string;
  first_name: string;
  last_name: string;
  message: string;
  avatar: string;
}

interface Props {
  testimonials: TestimonialInterface[];
  title: string;
  content: string;
}

const Testimonials: React.FC<Props> = ({ testimonials, title, content }) => {
  return (
    <section className="section" id="section-testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 col-md-12">
            <div className="section-heading testimonial-heading">
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 col-md-12">
            <div className="row">
              {/* testimonials-card */}
              {testimonials.map(t => (
                <div className="col-lg-6" key={t.id}>
                  <div className="test-inner ">
                    <div className="test-author-thumb d-flex">
                      <img src={t.avatar} alt="Testimonial author" className="img-fluid" />
                      <div className="test-author-info">
                        <h4>
                          {t.first_name} {t.last_name}
                        </h4>
                      </div>
                    </div>
                    {t.message}
                    <i className="fa fa-quote-right"></i>
                  </div>
                </div>
              ))}
              {/* !! */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
