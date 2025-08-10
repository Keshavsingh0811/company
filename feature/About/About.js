import Footer from "@/UI/Footer/Footer";
import FooterOne from "@/UI/Footer/FooterOne";
import Header from "@/UI/Header/Header";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="page-container">
      <Header />
      <div>
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">About Us</h1>
        </section>

        {/* Who We Are Section */}
        <section className="section">
          <div className="row mx-3">
            <div className="col-lg-5">
              <img
                src="/OIP1.jpg"
                alt="Why Choose Us"
                width="550"
                height="500"
                className="img-fluid custom-image"
              />
            </div>
            <div className="col-lg-7">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                At Infyniq, we specialize in web development, web design, and
                UI/UX design. We create responsive, user-centric websites and
                web applications that captivate users and deliver smooth
                experiences across all devices. Our skilled UI/UX design team
                crafts intuitive interfaces that emphasize simplicity and
                usability, ensuring seamless interactions with your digital
                products. Additionally, we offer software development services,
                including both web-based and Windows-based solutions. Whether
                it's custom software to address specific business needs or
                scalable web applications, we provide high-quality solutions
                tailored to your requirements. Our goal is to develop software
                that enhances efficiency, boosts productivity, and supports your
                business growth.
              </p>
              <div className="cards">
                <div className="card bg-info text-dark">
                  <h3 className="card-title">Our Vision</h3>
                  <p className="card-text">
                    Driving business success through innovative technology
                    solutions.
                  </p>
                </div>
                <div className="card bg-info text-dark">
                  <h3 className="card-title">Our Mission</h3>
                  <p className="card-text">
                    Fostering growth and creating opportunities with
                    transformative digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="section">
          <div className="row mx-3">
            <div className="col-lg-7">
              <h2 className="section-title">What we do</h2>
              <p>
                At Infyniq, we specialize in web development, web design, and
                UI/UX design. We craft responsive, user-friendly websites and
                web applications that captivate users and deliver smooth,
                consistent experiences across all devices. Our expert UI/UX
                design team is dedicated to building intuitive interfaces that
                prioritize simplicity and ease of use, ensuring seamless
                interactions with your digital products. Additionally, we offer
                software development services, including both web-based and
                Windows-based solutions. From custom software designed to solve
                unique business challenges to scalable web applications, we
                provide high-quality solutions tailored to your specific needs.
                Our aim is to create software that drives operational
                efficiency, boosts productivity, and fuels business growth.
              </p>
            </div>
            <div className="col-lg-5">
              <img
                src="/c.jpg"
                alt="Why Choose Us"
                width="500"
                height="300"
                className="img-fluid custom-image"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section">
          <div className="row mx-3">
            <div className="col-lg-7 choose-item">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                Infyniq offers customized, scalable solutions that foster growth
                and innovation. With a strong emphasis on user experience,
                design excellence, and ongoing support, we ensure every project
                aligns with your vision and goes beyond expectations.
              </p>
              <Image
                src="/D.jpg"
                alt="Why Choose Us"
                width={750} 
                height={450} 
                className="img-fluid custom-image"
              />
            </div>
            <div className="col-lg-5">
              <div className="features">
                <div
                  className="card feature-item"
                  style={{ padding: "0.1rem", fontSize: "0.9rem" }}
                >
                  <div className="card-body">
                    <h6 className="card-title">Tailored solutions</h6>
                    <p className="card-text">
                      We design bespoke, scalable solutions that are perfectly
                      aligned with your unique business requirements.
                    </p>
                  </div>
                </div>
                <div
                  className="card feature-item"
                  style={{ padding: "0.1rem", fontSize: "0.9rem" }}
                >
                  <div className="card-body">
                    <h6 className="card-title">Innovation driven</h6>
                    <p className="card-text">
                      We focus on accelerating growth and fostering innovation
                      by leveraging cutting-edge technology.
                    </p>
                  </div>
                </div>
                <div
                  className="card feature-item"
                  style={{ padding: "0.1rem", fontSize: "0.9rem" }}
                >
                  <div className="card-body">
                    <h6 className="card-title">User centric design</h6>
                    <p className="card-text">
                      We prioritize creating seamless and intuitive user
                      experiences that captivate and retain your audience.
                    </p>
                  </div>
                </div>
                <div
                  className="card feature-item"
                  style={{ padding: "0.1rem", fontSize: "0.9rem" }}
                >
                  <div className="card-body">
                    <h6 className="card-title">End to end support</h6>
                    <p className="card-text">
                      From initial concept to deployment and beyond, we offer
                      continuous support to ensure your success at every stage.
                    </p>
                  </div>
                </div>
                <div
                  className="card feature-item"
                  style={{ padding: "0.1rem", fontSize: "0.9rem" }}
                >
                  <div className="card-body">
                    <h6 className="card-title">Quality Assured</h6>
                    <p className="card-text">
                      We are dedicated to excellence, ensuring that every
                      solution is of the highest quality, reliable, and prepared
                      for the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterOne />
      </div>
    </div>
  );
};

export default About;
