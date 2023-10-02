import React from "react";
import styles from "./Contact.module.css";
import imgs from "./assets/locationIcon.svg";
import { PhoneLogo, EmailLogo } from "../../../../assets/svg.tsx";
const Contact = () => {
  return (
    <div className={styles.wrapper} id="contact">
      <div className={styles.left}></div>
      <div className={styles.center}></div>
      <div className={styles.right}>
        <div className={styles.location}>
          <img src={imgs} alt="" />
          <p>
            CLUB 56, PALACE ROAD <br />
            CHALAKUDY - 680307 <br />
            KERALA, INDIA
          </p>
        </div>
        <div className={styles.emailphone}>
          <a href="mailto:artgallerychola@gmail.com">
            <EmailLogo />
            <p>artgallerychola@gmail.com</p>
          </a>
          <a href="tel:+919900654533">
            <PhoneLogo />
            <p>99006 54533</p>
          </a>
        </div>
        <div className={styles.ceo}>
          <h1>JOMON ALUKKA ABRAHAM</h1>
          <a href="mailto:jomoartist@gmail.com">
            <EmailLogo />
            <p>jomoartist@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
