import React from "react";
import "./Referral-Page.css"; // We will create this CSS file
import location from "../assets/image/location.png";
function ServicesPage() {
  return (
    <div className="services-page">
      <section id="statistics" className="statistics"></section>
      <div className="Referral-Page">
        <section id="statistics" className="statistics">
          <h2>Referral</h2>
          <p>Here is the Referral form below.</p>
          {/* Button positioned below the text */}
          <a
            href="/Wellheatlh-Referral-Form.pdf"
            className="navButton"
            download="Wellhealth-Referral-Form.pdf"
          >
            Click to download form
          </a>
        </section>
      </div>

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
