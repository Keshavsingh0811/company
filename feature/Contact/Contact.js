import Header from "@/UI/Header/Header";
import React from "react";

const Contact = () => {
  return (
    <div className="page-container">
      <Header />
      <div>
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">About Us</h1>
        </section>

        {/* Get in Touch Section */}
        <section className="section">
          <div className="row mx-3">
            {/* Left Section */}
            <div className="col-lg-7 mt-5">
              <h2 className="section-title">Get in Touch</h2>
              <p>
                Have a project in mind, questions about our services, or need
                assistance? Feel free to reach out to us. Our team is here to
                collaborate, support, and respond to you as quickly as possible!
              </p>
              <div className="contact-details">
                {/* Phone Link */}
                <a
                  href="tel:+918128548795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-con me-4 d-flex align-items-center"
                >
                  <i className="fas fa-phone-alt social-icon-con me-2"></i>
                  (+91) 8128548795
                </a>

                {/* Email Link */}
                <a
                  href="mailto:Keshav.itsolutions@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-con d-flex align-items-center"
                >
                  <i className="fas fa-envelope social-icon-con me-2"></i>
                  Keshav.itsolutions@gmail.com
                </a>
              </div>
              <hr></hr>
              {/* Social Media Section */}
              <h4>Social Media</h4>
              <p>Follow us on social media for updates and insights.</p>
              <div className="footer-social-links-con d-flex">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-con me-2"
                >
                  <i className="fab fa-facebook-f social-icon-con"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-con me-2"
                >
                  <i className="fab fa-instagram social-icon-con"></i>
                </a>
                <a
                  href="mailto:info@Keshav.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-con me-2"
                >
                  <i className="fas fa-envelope social-icon-con"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-con me-2"
                >
                  <i className="fab fa-linkedin social-icon-con"></i>
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-con me-2"
                >
                  <i className="fab fa-whatsapp social-icon-con"></i>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-con"
                >
                  <i className="fab fa-youtube social-icon-con"></i>
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-lg-5">
              <div className="contact-card">
                <form>
                  <div className="row mb-3">
                    <div className="col-6">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="navbar-button w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
