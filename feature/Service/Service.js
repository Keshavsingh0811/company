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
                src="/webDevelopment.svg"
                alt="Why Choose Us"
                width="400"
                height="200"
                className="img-fluid custom-image"
              />
            </div>
            <div className="col-lg-7">
              <h2 className="section-title">Web development</h2>
              <p>
                At Keshav, we specialize in both static and dynamic web
                development services. Whether you're looking for a simple,
                informative website or a complex, interactive platform, our team
                ensures that the solution is tailored to your business
                requirements. From responsive layouts to advanced
                functionalities, we use modern technologies to create seamless
                and engaging web experiences. Partner with Keshav for websites
                that are not only visually appealing but also deliver optimal
                performance and user engagement.
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
                At Keshav, we specialize in creating user-centric UI/UX designs
                that are both visually engaging and intuitive to navigate. We
                conduct detailed user research and focus on enhancing usability
                through wireframes, prototypes, and final designs. Whether for
                websites or apps, our goal is to deliver digital experiences
                that improve user satisfaction and drive business success. Let
                Keshav transform your digital presence with innovative design
                solutions.
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
                src="/uiuxDesign.svg"
                alt="Why Choose Us"
                width="400"
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
                src="/softwareDevelopment.svg"
                alt="Why Choose Us"
                width="400"
                height="200"
                className="img-fluid custom-image"
              />
            </div>
            <div className="col-lg-7">
              <h2 className="section-title">Software development</h2>
              <p>
                Keshav offers comprehensive software development services for
                both web-based and Windows-based applications. Our team
                specializes in creating scalable, secure, and user-friendly
                software tailored to your business needs. Whether you need a
                robust web platform or a high-performance Windows application,
                we leverage cutting-edge technologies to ensure seamless
                functionality, enhanced performance, and a superior user
                experience. Partner with Keshav to bring your software solutions
                to life with precision and efficiency
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
