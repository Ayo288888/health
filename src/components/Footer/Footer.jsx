/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a511af0969ab7aeb81d0469bb50a02fceeec0678ede56879bf2a6e0316956b66?placeholderIfAbsent=true&apiKey=75e58fe109c84e3a8de6261b5c432f09"
            alt="WellHealth Services Logo"
            className={styles.footerLogo}
          />
        </div>
        <div className={styles.contactInfo}>
          <h3 className={styles.footerTitle}>Wellhealth</h3>
          <p className={styles.footerText}>
            Address: 827 Glen Terrace, Newport, Minnesota 55055
            <br />
            Phone: 952 200 3854
            <br />
            Email: Info@wellhealthservices.org
          </p>
        </div>
        <nav className={styles.footerNav}>
          <h3 className={styles.footerTitle}>Navigate</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="services">Services</a>
            </li>
            <li>
              <a href="/referrals">Referrals</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.copyright}>
        <p>Copyright 2024 Net-Trix All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
