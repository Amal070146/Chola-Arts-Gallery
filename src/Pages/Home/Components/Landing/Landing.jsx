import React from "react";
import styles from "./Landing.module.css";
import rightimg from "./assets/rightimg.svg";

const Landing = () => {
  return (
    <div className={styles.landingWrapper} id="HOME">
      <div className={styles.left}>
        <h1>CHOLA</h1>
        <h2>ART GALLERY</h2>
        <p>CHALAKUDY</p>
        <a href="#ABOUT">
          <button>
            <span className={styles.mScrollArrows+" "+styles.unu}></span>
            <span className={styles.mScrollArrows+" "+styles.doi}></span>
            <span className={styles.mScrollArrows+" "+styles.trei}></span>
          </button>
        </a>
      </div>
      <div className={styles.right}>
        <img src={rightimg} alt="" />
      </div>
    </div>
  );
};

export default Landing;
