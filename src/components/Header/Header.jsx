import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import headerlogo from "../assets/image/headerlogo.png";
import { Link } from 'react-scroll';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img
          src={headerlogo}
          alt="WellHealth Services Logo"
          className={styles.logo}
        />
      </div>
      <nav className={styles.navigation}>
        <a href="#home" className={styles.navLink}>
          Home
        </a>
        <Link to="/about-us" className={styles.navLink}>
          About Us
        </Link>
        <a href="#services" className={styles.navLink}>
          Services
        </a>
        <a href="#referral" className={styles.navLink}>
          Referral
        </a>
        <Link to="/" smooth={true} duration={500} className={styles.navButton}>
  Contact Us
</Link>

      </nav>
    </header>
  );
};

export default Header;
