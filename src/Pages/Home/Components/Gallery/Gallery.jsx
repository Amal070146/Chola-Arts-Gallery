import styles from "./Gallery.module.css";
import React, { useState, useEffect } from "react";
import data from "../data.json";

const Gallery = () => {
  const imageSets = [
    [
      "https://th.bing.com/th/id/OIP.r10V5bespET6Fe5AQ1ak4gHaEd?pid=ImgDet&rs=1",
      "https://th.bing.com/th/id/OIP.p5zC9uLm5ByGSy8gYI0McAHaE8?pid=ImgDet&rs=1",
      "https://images.squarespace-cdn.com/content/v1/5c710438b914490d5769a64f/b4fb2b4f-5f95-41a1-9416-d156d0ae273f/Most+Famous+Astrologer+in+the+World.jpg",
    ],
    [
      "https://th.bing.com/th/id/OIP.r10V5bespET6Fe5AQ1ak4gHaEd?pid=ImgDet&rs=1",
      "https://th.bing.com/th/id/OIP.p5zC9uLm5ByGSy8gYI0McAHaE8?pid=ImgDet&rs=1",
      "https://images.squarespace-cdn.com/content/v1/5c710438b914490d5769a64f/b4fb2b4f-5f95-41a1-9416-d156d0ae273f/Most+Famous+Astrologer+in+the+World.jpg",
    ],
    [
      "https://th.bing.com/th/id/OIP.r10V5bespET6Fe5AQ1ak4gHaEd?pid=ImgDet&rs=1",
      "https://th.bing.com/th/id/OIP.p5zC9uLm5ByGSy8gYI0McAHaE8?pid=ImgDet&rs=1",
      "https://images.squarespace-cdn.com/content/v1/5c710438b914490d5769a64f/b4fb2b4f-5f95-41a1-9416-d156d0ae273f/Most+Famous+Astrologer+in+the+World.jpg",
    ],
    [
      "https://th.bing.com/th/id/OIP.p5zC9uLm5ByGSy8gYI0McAHaE8?pid=ImgDet&rs=1",
      "https://th.bing.com/th/id/OIP.r10V5bespET6Fe5AQ1ak4gHaEd?pid=ImgDet&rs=1",

      "https://images.squarespace-cdn.com/content/v1/5c710438b914490d5769a64f/b4fb2b4f-5f95-41a1-9416-d156d0ae273f/Most+Famous+Astrologer+in+the+World.jpg",
    ],
    [
      "https://th.bing.com/th/id/OIP.r10V5bespET6Fe5AQ1ak4gHaEd?pid=ImgDet&rs=1",
      "https://th.bing.com/th/id/OIP.p5zC9uLm5ByGSy8gYI0McAHaE8?pid=ImgDet&rs=1",
      "https://images.squarespace-cdn.com/content/v1/5c710438b914490d5769a64f/b4fb2b4f-5f95-41a1-9416-d156d0ae273f/Most+Famous+Astrologer+in+the+World.jpg",
    ],
    [
      "https://th.bing.com/th/id/OIP.p5zC9uLm5ByGSy8gYI0McAHaE8?pid=ImgDet&rs=1",
      "https://th.bing.com/th/id/OIP.r10V5bespET6Fe5AQ1ak4gHaEd?pid=ImgDet&rs=1",

      "https://images.squarespace-cdn.com/content/v1/5c710438b914490d5769a64f/b4fb2b4f-5f95-41a1-9416-d156d0ae273f/Most+Famous+Astrologer+in+the+World.jpg",
    ],
  ];
  const [currentIndices, setCurrentIndices] = useState(Array(6).fill(0));

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
            className={styles.container + " " + `styles.container${i + 1}`}
          >
            <img src={imageSet[currentIndices[i]]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
