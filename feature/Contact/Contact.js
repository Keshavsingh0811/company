import Header from "@/UI/Header/Header";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle form submission on button click
  const handleSubmit = async () => {
    debugger;
    try {
      const response = await fetch("https://localhost:44321/api/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        // Show success alert
        Swal.fire({
          title: "Success!",
          text: data.message,
          icon: "success",
          confirmButtonText: "OK",
        });

        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear the form
      } else {
        const errorData = await response.json();

        // Show error alert
        Swal.fire({
          title: "Error!",
          text: errorData.message || "Something went wrong!",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Unable to submit the form. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

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
                  href="tel:+7005455056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-con me-4 d-flex align-items-center"
                >
                  <i className="fas fa-phone-alt social-icon-con me-2"></i>
                  (+91) 7005455056
                </a>

                {/* Email Link */}
                <a
                  href="mailto:Infyniq.itsolutions@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-con d-flex align-items-center"
                >
                  <i className="fas fa-envelope social-icon-con me-2"></i>
                  Infyniq.itsolutions@gmail.com
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
                  href="mailto:info@Infyniq.com"
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
                <div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                      value={formData.phone}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="btn btn-warning w-100"
                    onClick={handleSubmit}
                  >
                    Send Message
                  </button>
                </div>
                {successMessage && (
                  <div className="alert alert-success mt-3">
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="alert alert-danger mt-3">{errorMessage}</div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
