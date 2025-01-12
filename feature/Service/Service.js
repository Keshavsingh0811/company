import FooterOne from "@/UI/Footer/FooterOne";
import Header from "@/UI/Header/Header";
import Image from "next/image";
import React from "react";

const Service = (props) => {
  return (
    <div className="page-container">
      <Header />
      <div>
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">Our Services</h1>
        </section>

        <section className="section">
          <div className="row mx-3">
            <div className="col-lg-5">
              <img
                src="/web.jpg"
                alt="Why Choose Us"
                width="550"
                height="300"
                className="img-fluid custom-image"
              />
            </div>
            <div className="col-lg-7">
              <h2 className="section-title">Web development</h2>
              <p>
                At Keshav, we offer expertise in both static and dynamic web
                development. Whether you're seeking a straightforward,
                informational website or a sophisticated, interactive platform,
                our team ensures the solution is tailored to your specific
                business goals. Utilizing modern technologies, we create
                responsive designs and integrate advanced features to provide
                smooth, engaging web experiences. Choose Keshav for websites
                that are not only visually impressive but also optimized for
                peak performance and user interaction.
              </p>
              <div>
                <h3 className="card-title mb-3">
                  Tech-stack for web development:
                </h3>
                <ul className="d-flex flex-wrap gap-2">
                  <li>
                    <a href="/" className="btn btn-dark">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="btn btn-dark">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="btn btn-dark">
                      JavaScript
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio" className="btn btn-dark">
                      ReactJs
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio" className="btn btn-dark">
                      NextJs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section full-width-section-Service">
          <div className="row mx-3">
            <div className="col-lg-7">
              <h2 className="section-title">UI/UX design</h2>
              <p>
                At Keshav, we focus on crafting user-centered UI/UX designs that
                are visually appealing and easy to navigate. We perform in-depth
                user research and prioritize enhancing usability through
                wireframes, prototypes, and final designs. Whether for websites
                or apps, our aim is to deliver digital experiences that boost
                user satisfaction and contribute to business success. Let Keshav
                elevate your digital presence with creative and innovative
                design solutions.
              </p>
              <div>
                <h3 className="card-title mb-3">
                  Tech-stack for UI/UX design:
                </h3>
                <ul className="d-flex flex-wrap gap-2">
                  <li>
                    <a href="/" className="btn btn-dark">
                      Figma
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <img
                src="/UI.jpg"
                alt="Why Choose Us"
                width="530"
                height="200"
                className="img-fluid custom-image"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="row mx-3">
            <div className="col-lg-5">
              <img
                src="/S.jpg"
                alt="Why Choose Us"
                width="400"
                height="200"
                className="img-fluid custom-image"
              />
            </div>
            <div className="col-lg-7">
              <h2 className="section-title">Software development</h2>
              <p>
                Keshav provides end-to-end software development services for
                both web-based and Windows applications. Our team excels in
                building scalable, secure, and user-friendly software designed
                to meet your specific business needs. Whether you require a
                powerful web platform or a high-performance Windows application,
                we use the latest technologies to ensure smooth functionality,
                superior performance, and an exceptional user experience.
                Partner with Keshav to bring your software solutions to life
                with accuracy and efficiency.
              </p>
              <div>
                <h3 className="card-title mb-3">
                  Tech-stack for web development:
                </h3>
                <ul className="d-flex flex-wrap gap-2">
                  <li>
                    <a href="/" className="btn btn-dark">
                      ReactJs
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="btn btn-dark">
                      NextJs
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="btn btn-dark">
                      MySQL
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio" className="btn btn-dark">
                      MongoDB
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio" className="btn btn-dark">
                      NodeJs
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio" className="btn btn-dark">
                      C#
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio" className="btn btn-dark">
                      .Net Core
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container py-5">
            <section className="text-center full-width-section">
              <h2 className="mb-4">Leading Technologies We Use</h2>
              <div className="row mx-5">
                <div className="col-lg-4 mb-3 mt-3">
                  <div className="card h-100 shadow-sm border-0 hover-animate">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i class="fas fa-laptop fa-3x text-primary"></i>
                      </div>
                      <h3 className="card-title">Frontend Development</h3>
                      <p className="card-text">
                        <span class="highlight badge text-dark mx-2">
                          JavaScript
                        </span>
                        <span class="highlight badge text-dark mx-2">
                          ElectronJs
                        </span>
                      </p>
                      <p className="card-text">
                        <span class="highlight badge text-dark mx-2">
                          ReactJs
                        </span>
                        <span class="highlight badge text-dark mx-2">
                          NextJs
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3 mt-3">
                  <div className="card h-100 shadow-sm border-0 hover-animate">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i class="fas fa-server fa-3x text-primary"></i>
                      </div>
                      <h3 className="card-title">Backend Development</h3>
                      <p className="card-text">
                        <span class="highlight badge text-dark mx-2">
                          NodeJs
                        </span>
                        <span class="highlight badge text-dark mx-2">.NET</span>
                      </p>
                      <p className="card-text">
                        <span class="highlight badge text-dark mx-2">C#</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3 mt-3">
                  <div className="card h-100 shadow-sm border-0 hover-animate">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i class="fas fa-database fa-3x text-primary"></i>
                      </div>
                      <h3 className="card-title">Database</h3>
                      <p className="card-text">
                        <span class="highlight badge text-dark mx-2">
                          MySQL
                        </span>
                        <span class="highlight badge text-dark mx-2">
                          MongoDB
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <FooterOne />
      </div>
    </div>
  );
};

export default Service;
