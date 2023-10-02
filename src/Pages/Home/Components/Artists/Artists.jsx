import React, { useState } from "react";
import data from "../data.json";
import Marquee from "react-fast-marquee";
import styles from "./Artists.module.css";

import img1 from "./assets/1.svg";
import img6 from './assets/2.svg'
import img2 from "./assets/3.svg";
import img7 from './assets/4.svg'
import img3 from "./assets/5.svg";
import img4 from "./assets/6.svg";
import img5 from "./assets/7.svg";
import img8 from './assets/8.svg'

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
  const datas = [
    {
      name: "MURALI NAGAPUZHA",
      image: img1,
    },
    {
      name: "SAJITHA R SANHKER",
      image: img2,
    },
    {
      name: "ARUNA ALANCHERY",
      image: img6,
    },
    {
      name: "SHAJI APPUKUTTAN",
      image: img3,
    },
    {
      name: "SHINOJ CHORAN",
      image: img7,
    },
    {
      name: "PRAMOD KURAMPALA",
      image: img4,
    },
    {
      name: "LEENA RAJ R",
      image: img5,
    },
    {
      name: "BINDHI RAJAGOPAL",
      image: img8,
    },
  ];
  return (
    <div className={styles.gallery} id="ARTISTS">
      <div className={styles.header}>
        <h1>Artists</h1>
        <div className={styles.line}></div>
      </div>

      <div
        className={styles.row}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Marquee speed={50} {...marqParams} style={{ width: "100vw" }}>
          {datas.map((src) => (
            <div className={styles.imgContainer}>
              <a ></a>
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
