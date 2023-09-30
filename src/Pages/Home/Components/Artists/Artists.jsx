import React, { useState } from "react";
import data from "../data.json";
import Marquee from "react-fast-marquee";
import styles from "./Artists.module.css";

const Artists = () => {
  const [marqueeSpeed, setMarqueeSpeed] = useState(40);

  const marqParams = {
    autoFill: true,
    pauseOnHover: true,
    // speed: marqueeSpeed,
  };

  const handleMouseEnter = () => {
    setMarqueeSpeed(10);
  };

  const handleMouseLeave = () => {
    setMarqueeSpeed(40);
  };
  console.log(marqueeSpeed);
  return (
    <div className={styles.gallery}>
      <div className={styles.header}>
        <h1>Artists</h1>
        <div className={styles.line}></div>
      </div>

      <div
        className={styles.row}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Marquee speed={40} {...marqParams} style={{ width: "100vw" }}>
          {data.gallery.row1.map((src) => (
            <div className={styles.imgContainer}>
              <a href=""></a>
              <img src={src.image} loading="lazy" />
              <h2>{src.name}</h2>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Artists;
