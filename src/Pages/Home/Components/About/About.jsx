import React from "react";
import styles from "./About.module.css";
import img from "./img.svg";
import ball from './ball.svg'

const About = () => {
  return (
    <div className={styles.wrapper} id="ABOUT">
      <div className={styles.TopContainer}>
        <h1>ABOUT</h1>
        <img src={img} alt="" />
      </div>
      <img className={styles.ballsImage} src={ball} alt="" />
      <div className={styles.BottomContainer}>
        <div>
          <div className={styles.line}></div>
          <h1>ABOUT</h1>
        </div>
        <p>
          Chola Art Gallery located in Chalakudy, Thrissur have 1000+ works of
          arts which excites your mind. Art serves the nation by welcoming all
          people to explore and experience art, creativity, and our shared
          humanity. This is an exotic art gallery that roams the country with a
          focus on Kerala's own creations and culture, which is completely
          unexplored. An amazing opportunity to own a piece of art. Here, you
          can bid to get a chance to own an artist's work. Your name will be
          listed as the owner of such piece of art in the gallery list.
        </p>
      </div>
    </div>
  );
};

export default About;
