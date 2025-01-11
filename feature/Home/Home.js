import Image from "next/image";
import { useEffect } from "react";
import WhatWeDeliver from "./WhatWeDeliver";
import WhatWeBuilt from "./WhatWeBuilt";
import Header from "@/UI/Header/Header";
import FooterOne from "@/UI/Footer/FooterOne";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const redirectToAnotherPage = () => {
    router.push("/services");
  };

  const redirectToAbout = () => {
    router.push("/about");
  };
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="homepage-hero">
        <h1>Empowering Growth with Custom Solutions</h1>
        <p>
          At Keshav, we specialize in building innovative web and software
          solutions designed to empower businesses, enhance efficiency, and
          achieve sustainable growth.
        </p>
        <button className="navbar-button" onClick={redirectToAnotherPage}>
          Explore Our Expertise
        </button>
      </section>

      {/* Discover Keshav Section */}
      <section className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 choose-item">
              <h2 className="section-title">Discover Keshav</h2>
              <p>
                At Keshav, we are passionate about leveraging technology to
                create innovative solutions that empower businesses to thrive in
                a digital-first world.
              </p>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-end">
              <button className="navbar-button" onClick={redirectToAbout}>
                Discover More
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-7">
              <div className="features">
                <div className="row row-cols-1 row-cols-md-2 g-3">
                  <div className="col">
                    <div className="card feature-item">
                      <div className="card-body">
                        <h6 className="card-title">Who we are</h6>
                        <p className="card-text">
                          At Keshav, we are a team of passionate innovators
                          dedicated to creating exceptional software solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card feature-item">
                      <div className="card-body">
                        <h6 className="card-title">What we do</h6>
                        <p className="card-text">
                          We provide exceptional work and services, prioritizing
                          quality and excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card feature-item">
                      <div className="card-body">
                        <h6 className="card-title">How can we help?</h6>
                        <p className="card-text">
                          We turn ideas into reality with technical solutions
                          that scale your business, simplify operations, and
                          maximize profits.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card feature-item">
                      <div className="card-body">
                        <h6 className="card-title">Create success stories</h6>
                        <p className="card-text">
                          If you’re in business, we’ll help to take it to the
                          next level. If you’re from a tech background, let’s
                          connect and innovate together.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <Image
                src="/discover.jpg"
                alt="Why Choose Us"
                width={700}
                height={400}
                className="img-fluid custom-image"
              />
            </div>
          </div>
        </div>
      </section>

      <WhatWeDeliver />
      <WhatWeBuilt />
      <FooterOne />
    </div>
  );
}
