import React from "react";

import styles from "./Events.module.css";
import img1 from "./assets/1.svg";
import img2 from "./assets/2.svg";
import img3 from "./assets/3.svg";
import img4 from "./assets/4.svg";
import img5 from "./assets/5.svg";
import { IoIosArrowForward } from "react-icons/io";

const Events = () => {
  const data = [
    {
      img: img1,
      title: "ARANI MURAL SCULPTURE ART SHOW",
    },
    {
      img: img2,
      title: "INFINITE LIFE PHOTOGRAPHY EXPO",
    },
    {
      img: img3,
      title: "THE ROAD LESS TRAVELLED",
    },
    {
      img: img4,
      title: "CHOKK PAINTING CAMP",
    },
    {
      img: img5,
      title: "LOVE AND CARE",
    },
    {
      img: img1,
      title: "ARANI MURAL SCULPTURE ART SHOW",
    },
    {
      img: img2,
      title: "INFINITE LIFE PHOTOGRAPHY EXPO",
    },
  ];
  const contentRef = React.useRef(null);
  const scrollContentLeft = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Change 300 to your card width or desired scroll amount
    }
  };

  const scrollContentRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Change 300 to your card width or desired scroll amount
    }
  };
  const hello=()=>{
    console.log("hello")
  }
  return (
    <div className={styles.galleryWrapper} id="EVENTS">
      <div className={styles.header}>
        <div>
          <div className={styles.line}></div>
          <h1>Events</h1>
        </div>
        <div className={styles.NavigateButton}>
          <button onClick={scrollContentLeft} className={styles.button1}>
            <IoIosArrowForward style={{ transform: "rotate(180deg)" }} />
          </button>
          <button onClick={scrollContentRight} className={styles.button2}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className={styles.contentWrapper} ref={contentRef}>
        {data.map((src) => (
          <div className={styles.imgContainer}>
            <img src={src.img} loading="lazy" />
            <h2>{src.title}</h2>
            <div className={styles.line}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
