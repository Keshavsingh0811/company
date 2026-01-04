import FooterOne from "@/UI/Footer/FooterOne";
import Header from "@/UI/Header/Header";
import React from "react";

const Portfolio = (props) => {
  return (
    <div className="page-container">
      <Header />
      <div>
        <section className="hero-section text-center py-5">
          <h1 className="hero-title">Our Portfolio</h1>
        </section>

        <div className="container">
          <div className="row mt-5">
            {/* First Card */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card">
                <img
                  src="/port.png"
                  alt="Green Building"
                  className="img-fluid"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">GMP SGBC</h5>
                  <p className="card-text">
                    The accelerated push for sustainability necessitates
                    deepening of the core knowledge and expertise of green
                    building professionals. Environmental Sustainability Design
                    (ESD) consultants, Architects, Engineers, Contractors,
                    Project Managers, Facilities Managers and other built
                    environment professionals directly contribute to the quality
                    of our places and spaces and by extension, to Singapore's
                    national climate goals.
                  </p>
                  <a
                    href="https://gmp.sgbc.online/"
                    className="btn btn-warning"
                  >
                    Visit site
                  </a>
                </div>
              </div>
            </div>

            {/* Second Card */}
            {/* <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card">
                <img
                  src="/two.jpg"
                  alt="Pionear"
                  className="img-fluid"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Pionear</h5>
                  <p className="card-text">
                    Pionear Pumps is an Indian company specializing in the
                    production of industrial pumps, including centrifugal,
                    self-priming, mud, and mono-block pumps.
                  </p>
                  <a href="https://example.com" className="btn btn-warning">
                    Visit site
                  </a>
                </div>
              </div>
            </div> */}

            {/* Third Card */}
            {/* <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card">
                <img
                  src="/three.jpg"
                  alt="Expint"
                  className="img-fluid"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Expint</h5>
                  <p className="card-text">
                    Expint Smart Products Private Limited is an Indian company
                    specializing in AI/ML solutions, offering award-winning IT
                    services for startups, SMEs, and enterprises.
                  </p>
                  <a href="https://example.com" className="btn btn-warning">
                    Visit site
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <FooterOne />
      </div>
    </div>
  );
};

export default Portfolio;
