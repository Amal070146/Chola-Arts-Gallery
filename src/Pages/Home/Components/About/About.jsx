import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <h1>About</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. 
      </p>
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.r10V5bespET6Fe5AQ1ak4gHaEd?pid=ImgDet&rs=1"
          alt=""
        />
        <div>
          <h1>Jomon Alukka Abrham</h1>
          <h3>CEO-Chola Art Gallery</h3>
          <p>
            Jomon Aluka Abraham started his artistic career as a student in
            Prathibha School of Arts (Ladies Club) in 1996. Amidst his three
            years of academics he also worked as a commercial artist. Later he
            continued his profession as a designer and became the founded of an
            interior designing company named 'Dream Line Designers' in
            Bengaluru. Jomon's designing company has designed many resorts,
            parks, and universities which are pervading from Kerala to Kashmir.
            On one occasion Jomon came to Chalakkudy, he saw the miserable
            condition of the institution he attended and became disappointed.
            Soon he met the Ladies Club authority and expressed a desire to
            convert the club into an art gallery by taking over the institution.
            Although there were many objections and legal hurdles, Chola Art
            Gallery which has overcome all odds and is open for artists and art
            lovers from 4th September 2022.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
