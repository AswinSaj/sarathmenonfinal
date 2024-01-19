import React from "react";
import styles from "./poetry.module.css";
import Link from "next/link";
const Poetry = () => {
  return (
    <>
      <div className={styles.title}>
        <h1>POETRY</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.contentWrapper}>
          <div className={styles.image}></div>
          <div className={styles.poem}>
            <p>&quot;The air you breathe</p>
            <p>And the curve of your smile</p>
            <p>The fall of your hair</p>
            <p>And the blush on your cheeks</p>
            <p>The lines on your nose</p>
            <p>And the chill on your spine...&quot;</p>
          </div>
        </div>
        <Link href="/poems" className={styles.link}>
          <span className={styles.viewmore}> View More</span>
          <span className={styles.arrow}>&rarr;</span>
        </Link>
      </div>
    </>
  );
};

export default Poetry;
