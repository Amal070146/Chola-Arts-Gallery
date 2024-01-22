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
import img17 from "./assets/17.jpg";
import img18 from "./assets/18.jpg";
import img19 from "./assets/19.jpg";
import img20 from "./assets/20.jpg";
import img21 from "./assets/21.jpg";
import img22 from "./assets/22.jpg";
import img23 from "./assets/23.jpg";
import img24 from "./assets/24.jpg";
import img25 from "./assets/25.jpg";
import img26 from "./assets/26.jpg";
import img27 from "./assets/27.jpg";
import img28 from "./assets/28.jpg";
import img29 from "./assets/29.jpg";
import img30 from "./assets/30.jpg";
import img31 from "./assets/31.jpg";
import img32 from "./assets/32.jpg";
import img33 from "./assets/33.jpg";



const Gallery = () => {
  const imageSets = [
    [img1, img5, img9, img13, img17, img21, img25, img29, img33],
    [img2, img6, img10, img14, img18, img22, img26, img30],
    [img3, img7, img11, img15, img19, img23, img27, img31],
    [img4, img8, img12, img16, img20, img24, img28, img32],
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
