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
                src="/three.jpg"
                alt="Why Choose Us"
                width="500"
                height="300"
                className="img-fluid custom-image"
              />
            </div>
            <div className="col-lg-7">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                At Keshav, we specialize in web development, web design, and
                UI/UX design. We build responsive, user-friendly websites and
                web applications that not only engage users but also provide
                seamless experiences across all devices. Our expert UI/UX design
                team focuses on creating intuitive interfaces that prioritize
                ease of use, ensuring your audience interacts effortlessly with
                your digital products. We also specialize in software
                development, including both web-based and Windows-based
                solutions. From custom software that addresses unique business
                challenges to scalable web applications, we deliver high-quality
                solutions tailored to meet your specific needs. Our focus is on
                creating software that drives efficiency, enhances productivity,
                and supports the growth of your business.
              </p>
              <div className="cards">
                <div className="card bg-info text-dark">
                  <h3 className="card-title">Our Vision</h3>
                  <p className="card-text">
                    Empowering businesses with innovative technology for
                    success.
                  </p>
                </div>
                <div className="card bg-info text-dark">
                  <h3 className="card-title">Our Mission</h3>
                  <p className="card-text">
                    Driving growth and unlocking opportunities through digital
                    solutions.
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
                At Keshav, we specialize in web development, web design, and
                UI/UX design. We build responsive, user-friendly websites and
                web applications that not only engage users but also provide
                seamless experiences across all devices. Our expert UI/UX design
                team focuses on creating intuitive interfaces that prioritize
                ease of use, ensuring your audience interacts effortlessly with
                your digital products. We also specialize in software
                development, including both web-based and Windows-based
                solutions. From custom software that addresses unique business
                challenges to scalable web applications, we deliver high-quality
                solutions tailored to meet your specific needs. Our focus is on
                creating software that drives efficiency, enhances productivity,
                and supports the growth of your business.
              </p>
            </div>
            <div className="col-lg-5">
              <img
                src="/three.jpg"
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
                Keshav delivers tailored, scalable solutions that drive growth
                and innovation. With a focus on user experience, design, and
                continuous support, we ensure every project aligns with your
                vision and exceeds expectations.
              </p>
              <Image
                src="/whyChooseUs-img.jpg"
                alt="Why Choose Us"
                width={700} // Increase width
                height={400} // Increase height
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
                      We create customized, scalable solutions to meet your
                      specific business needs.
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
                      Our approach focuses on driving growth and fostering
                      innovation through cutting-edge technology.
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
                      We prioritize seamless, intuitive user experiences that
                      engage and retain your audience.
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
                      From concept to deployment and beyond, we provide ongoing
                      support to ensure your success.
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
                      Our commitment to excellence ensures that every solution
                      is high-quality, dependable, and future-ready.
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
