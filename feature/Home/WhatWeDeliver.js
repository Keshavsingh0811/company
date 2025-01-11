import React from "react";

const WhatWeDeliver = (props) => {
  return (
    <div className="container py-5">
      <section className="text-center full-width-section">
        <h2 className="mb-4">What We Deliver</h2>
        <p>
          We provide expert solutions in software development, web development,
          and design, focusing on innovation and user-centric approaches to
          drive business growth and success.
        </p>
        <div className="row mx-5">
          <div className="col-lg-3 mb-3">
            <div className="card h-100 shadow-sm border-0 hover-animate">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-code fa-3x text-primary"></i>
                </div>
                <h3 className="card-title">Software Development</h3>
                <p className="card-text">
                  We deliver custom, scalable software solutions that streamline
                  processes and solve complex business challenges.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-3">
            <div className="card h-100 shadow-sm border-0 hover-animate">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-pencil-ruler fa-3x text-primary"></i>
                </div>
                <h3 className="card-title">Web Design</h3>
                <p className="card-text">
                  Our visually appealing and user-friendly designs ensure your
                  brand stands out and engages your audience effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-3">
            <div className="card h-100 shadow-sm border-0 hover-animate">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-laptop-code fa-3x text-primary"></i>
                </div>
                <h3 className="card-title">Web Development</h3>
                <p className="card-text">
                  We create responsive and high-performing websites and web
                  applications tailored to your business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-3">
            <div className="card h-100 shadow-sm border-0 hover-animate">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-palette fa-3x text-primary"></i>
                </div>
                <h3 className="card-title">UI/UX Design</h3>
                <p className="card-text">
                  We design intuitive interfaces and seamless user experiences
                  that drive engagement and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDeliver;
