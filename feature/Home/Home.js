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
        <h1>Driving Growth with Tailored Solutions</h1>
        <p>
          At Infyniq, we focus on crafting cutting-edge web and software
          solutions that empower businesses, boost efficiency, and foster
          sustainable success.
        </p>
        <button className="btn btn-warning" onClick={redirectToAnotherPage}>
          Explore Our Expertise
        </button>
      </section>

      {/* Discover Infyniq Section */}
      <section className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 choose-item">
              <h2 className="section-title">Discover Infyniq</h2>
              <p>
                At Infyniq, we are dedicated to harnessing technology to develop
                innovative solutions that enable businesses to excel in today’s
                digital-driven world.
              </p>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-end">
              <button className="btn btn-warning" onClick={redirectToAbout}>
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
                          At Infyniq, we are a team of committed innovators
                          focused on delivering outstanding software solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card feature-item">
                      <div className="card-body">
                        <h6 className="card-title">What we do</h6>
                        <p className="card-text">
                          We deliver outstanding work and services, with a
                          strong emphasis on quality and excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card feature-item">
                      <div className="card-body">
                        <h6 className="card-title">How can we help?</h6>
                        <p className="card-text">
                          We bring ideas to life with technical solutions that
                          grow your business, streamline operations, and
                          optimize profitability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-3">
                    <div className="card feature-item">
                      <div className="card-body">
                        <h6 className="card-title">Create success stories</h6>
                        <p className="card-text">
                          If you’re a business owner, we’ll help you elevate it
                          to new heights. If you’re from a tech background,
                          let’s collaborate and create innovative solutions
                          together.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <Image
                src="/discover1.jpg"
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
