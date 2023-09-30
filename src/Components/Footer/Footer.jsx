import React from "react";
import styles from "./Footer.module.css";
import { LogoShortBlack } from "../../assets/svg.tsx";
const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.top}>
        <LogoShortBlack />
        <div>
          <a href="">TERMS AND CONDITIONS</a>
          <a href="">PRIVACY POLICY</a>
        </div>
      </div>
      <div>
        <p>
          Copyright © 2023 Chola art Gallery, inc. DESIGNED & DEVELOPED BY{" "}
          <a href="https://fundesign.vercel.app/" target="_blank">
            <b> FUN DESIGN</b>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
