import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="header-main sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Logo Section */}
          <a className="navbar-brand" href="/">
            <Image
              src="/infyniq-it-solutions.svg"
              alt="Infyniq Logo"
              width={140}
              height={40}
            />
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-1">
                {" "}
                <a className="nav-link text-white" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link text-white" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link text-white" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link text-white" href="/portfolio">
                  Portfolio
                </a>
              </li>
            </ul>

            {/* Call-to-Action Button */}
            <a href="/contact" className="btn btn-warning ms-lg-3">
              Let's Chat
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
