import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="sticky-header">
      <nav className="homepage-navbar">
        <div className="homepage-logo">
          <Image
            src="/Keshav-logo.svg"
            alt="Keshav Logo"
            width={140}
            height={140}
          />
        </div>
        <ul className="homepage-nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
        </ul>
        <a href="/contact">
          <button className="navbar-button">Let's Chat</button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
