import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="footer">
        <div className="container-fluid">
          <div className="row mt-3">
            {/* Logo Section */}
            <div className="col-lg-4">
              <div className="footer-logo mt-4">
                <a
                  href="https://your-company-website.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="company-logo"
                    src="/Keshav-logo.svg"
                    alt="Company Logo"
                    width={140}
                    height={140}
                  />
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="col-lg-4">
              <div className="footer-links-column">
                <h4 className="footer-heading">Quick Links</h4>
                <ul className="footer-links">
                  <li>
                    <a href="/home" className="footer-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="footer-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="footer-link">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio" className="footer-link">
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="col-lg-4">
              <div className="footer-social-links-column">
                <h4 className="footer-heading">Connect with Us</h4>
                <div className="footer-social-links">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="fab fa-facebook-f social-icon"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="fab fa-instagram social-icon"></i>
                  </a>
                  <a
                    href="mailto:info@Keshav.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="fas fa-envelope social-icon"></i>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="fab fa-linkedin social-icon"></i>
                  </a>
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="fab fa-whatsapp social-icon"></i>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="fab fa-youtube social-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <p className="footer-bottom-text">
              &copy; 2024 Keshav IT Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
