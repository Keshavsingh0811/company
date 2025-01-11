import React from "react";

const WhatWeBuilt = () => {
  return (
    <div>
      <section className="what-we-built">
        <h2>What We’ve Built</h2>
        <div className="projects">
          <div className="project-card">
            <a href="/portfolio">
              <div className="project-image-container">
                <img src="/one.jpg" alt="Sanitas Healthcare" />
              </div>
            </a>
          </div>
          <div className="project-card">
            <a href="/portfolio">
              <div className="project-image-container">
                <img src="/two.jpg" alt="Pionear" />
              </div>
            </a>
          </div>
          <div className="project-card">
            <a href="/portfolio">
              <div className="project-image-container">
                <img src="/three.jpg" alt="Expint" />
              </div>
            </a>
          </div>
        </div>
        <div className="explore-more-container">
          <a href="/portfolio">
            <button className="btn btn-warning">Explore More</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhatWeBuilt;
