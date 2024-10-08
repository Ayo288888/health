/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d23105af363f47310eb654212bcf563114133341b4fb75cfec31a65c3dede682?placeholderIfAbsent=true&apiKey=75e58fe109c84e3a8de6261b5c432f09"
        alt="Background image of a supportive community"
        className={styles.heroBackground}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>WELLHEALTH SERVICES LLC</h1>
        <h2 className={styles.heroSubtitle}>Housing Stabilization Services</h2>
        <a href="referral" className={styles.joinButton}>
          Join
        </a>
      </div>
    </section>
  );
};

export default Hero;
