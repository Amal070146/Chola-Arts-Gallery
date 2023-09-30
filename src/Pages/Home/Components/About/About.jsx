import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.wrapper} id="ABOUT">
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
            Despite facing numerous objections and legal challenges, the Chola
            Art Gallery triumphed over these obstacles and officially opened its
            doors to artists and art enthusiasts on September 4, 2022.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
