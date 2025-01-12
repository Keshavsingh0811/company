import React from "react";

const WhatWeDeliver = (props) => {
  return (
    <div className="container py-5">
      <section className="text-center full-width-section">
        <h2 className="mb-4">What We Deliver</h2>
        <p>
          We offer specialized expertise in software development, web
          development, and design, emphasizing innovation and user-focused
          strategies to accelerate business growth and achieve success.
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
                  We create tailored, scalable software solutions that optimize
                  processes and address intricate business challenges.
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
                  Our captivating and intuitive designs help your brand shine
                  and connect with your audience effortlessly.
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
                  We build responsive, high-performance websites and web
                  applications customized to meet your business requirements.
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
                  We craft intuitive interfaces and smooth user experiences that
                  boost engagement and satisfaction.
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
