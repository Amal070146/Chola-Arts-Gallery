import React from "react";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.leftContainer}>
        <div className={styles.leftTop}></div>
        <div className={styles.leftBottom}></div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.rightleft}>
          <div className={styles.imgs}>
            <img
              src="https://imgs.search.brave.com/9eUzXQJ8t240xx3FtnDTYjgXnUf2LcLm9xqVrMbZ9Rc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U0L2E2/L2JmL2U0YTZiZjI3/MzBlMTMzZjgyODFm/YWRkY2Y2ODFjYTY4/LmpwZw"
              alt=""
            />
          </div>
          <div></div>
        </div>
        <div className={styles.rightright}>
          <div className={styles.set1}></div>
          <div className={styles.set2}></div>
          <div className={styles.set3}></div>
        </div>
      </div>
      <div className={styles.round}>
        <div></div>
      </div>
    </div>
  );
};

export default Landing;
