import styles from "./Gallery.module.css";
import React, { useState, useEffect } from "react";
import data from "../data.json";
import img1 from "./assets/1.svg";
import img2 from "./assets/2.svg";
import img3 from "./assets/3.svg";
import img4 from "./assets/4.svg";
import img5 from "./assets/5.svg";
import img6 from "./assets/6.svg";
import img7 from "./assets/7.svg";
import img8 from "./assets/8.svg";
import img9 from "./assets/9.svg";
import img10 from "./assets/10.svg";
import img11 from "./assets/11.svg";
import img12 from "./assets/12.svg";
import img13 from "./assets/13.svg";
import img14 from "./assets/14.svg";
import img15 from "./assets/15.svg";
import img16 from "./assets/16.svg";

const Gallery = () => {
  const imageSets = [
    [img1, img5, img9, img13],
    [img2, img6, img10, img14],
    [img3, img7, img11, img15],
    [img4, img8, img12, img16],
  ];
  const [currentIndices, setCurrentIndices] = useState(Array(4).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices((prevIndices) =>
        prevIndices.map((index, i) => (index + 1) % imageSets[i].length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.galleryWrapper} id="GALLERY">
      <div className={styles.header}>
        {" "}
        <div className={styles.line}></div>
        <h1>Gallery</h1>
      </div>

      <div className={styles.contentWrapper}>
        {imageSets.map((imageSet, i) => (
          <div
            key={i}
            className={`${styles.container} ${styles[`container${i}`]}`}
          >
            <img src={imageSet[currentIndices[i]]} alt="Gallery Image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
