import React from "react";
import styles from "./Contact.module.css";
import imgs from "./assets/locationIcon.svg";
import { PhoneLogo, EmailLogo } from "../../../../assets/svg.tsx";
const Contact = () => {
  return (
    <div className={styles.wrapper}>
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
          <a href="">
            <EmailLogo />
            <p>artgallerychola@gmail.com</p>
          </a>
          <a href="">
            <PhoneLogo />
            <p>99006 54533</p>
          </a>
        </div>
        <div className={styles.ceo}>
          <h1>JOMON ALUKKA ABRAHAM</h1>
          <a href="">
            <EmailLogo />
            <p>jomoartist@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
