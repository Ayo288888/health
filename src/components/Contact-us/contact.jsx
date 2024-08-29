import React from "react";
import "../Contact-us/contact.css"; // We will create this CSS file
import telephone from "../assets/image/telephone.png";
import email from "../assets/image/email.png";
import maps from "../assets/image/maps.png";
function ServicesPage() {
  return (
    <div className="services-page">
      <section id="expert-guidance" className="expert-guidance">
        <h2>Contact Us</h2>
        <div className="guidance-grid">
          <div className="guidance-card">
            <img src={email} alt="Guidance Icon" />
            <h3>Our Email</h3>
            <p>Email: wellhealthservices@gmail.com</p>
          </div>
          <div className="guidance-card">
            <img src={telephone} alt="Guidance Icon" />
            <h3>Call Us</h3>
            <p>(555) 123-4567</p>
          </div>
          <div className="guidance-card">
            <img src={maps} alt="Guidance Icon" />
            <h3>Our Location </h3>
            <p>Address: 123 Main Street, Anytown, USA</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Wellhealth</h3>
            <p>
              Address: 123 Main Street, Anytown, USA
              <br />
              Phone: (555) 123-4567
              <br />
              Email: wellhealthservices@gmail.com
              <br />
              Website:{" "}
              <a href="http://www.wellhealthservices.com">
                www.wellhealthservices.com
              </a>
            </p>
          </div>
          <div className="footer-nav">
            <h3>Navigate</h3>
            <nav>
              <a href="/">Home</a>
              <a href="/about-us">About Us</a>
              <a href="services">Services</a>
              <a href="referral">Referrals</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 NexTrix. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ServicesPage;
