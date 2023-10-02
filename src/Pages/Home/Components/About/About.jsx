import React from "react";
import styles from "./About.module.css";
import img from "./img.svg";
import ball from "./ball.svg";
import jomon from "./jomon.svg";

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
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
            humanity. This is an exotic art gallery that roams the country with
            a focus on Kerala's own creations and culture, which is completely
            unexplored. An amazing opportunity to own a piece of art. Here, you
            can bid to get a chance to own an artist's work. Your name will be
            listed as the owner of such piece of art in the gallery list.
          </p>
        </div>
      </div>
      <div className={styles.wrapperCEO}>
        <div className={styles.TopContainer}>
          <img src={jomon} alt="" />

          <h1>THE CMD</h1>
        </div>
        <img className={styles.ballsImages} src={ball} alt="" />
        <div className={styles.BottomContainers}>
          <div>
            <h1>THE CMD</h1>
            <div className={styles.line}></div>
          </div>
          <p>
            Jomon Aluka Abraham began his artistic journey in 1998 as a student
            at the Prathibha School of Arts, part of the Ladies Club. During his
            three-year academic pursuit, he also worked as a commercial artist.
            Later, he transitioned to a role as a designer and subsequently
            founded an interior designing firm called 'Dream Line Designers' in
            Bengaluru. Under Jomon's guidance, Dream Line Designers has crafted
            designs for numerous resorts, parks, and universities, with projects
            spanning from Kerala to Kashmir. On a visit to Chalakkudy, Jomon was
            disheartened to see the dilapidated state of his alma mater. Moved
            by this sight, he approached the Ladies Club authorities with an
            ambitious proposal to transform the club into an art gallery.
            The Chola Art Gallery triumphed over these obstacles and officially opened its
            doors to artists and art enthusiasts on September 4, 2022.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
