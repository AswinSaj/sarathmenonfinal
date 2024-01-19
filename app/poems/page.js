// Poetry.js

import React from "react";
import { data } from "./data";
import styles from "./poetry.module.css";

const splitPoem = (poem) => {
  const paragraphs = React.Children.toArray(poem.props.children);
  const halfLength = Math.ceil(paragraphs.length / 2);
  const poemLeft = paragraphs.slice(0, halfLength);
  const poemRight = paragraphs.slice(halfLength);
  return { poemLeft, poemRight };
};

const Poetry = () => {
  return (
    <div className={styles.main}>
      {data.map((item) => (
        <div key={item.id}>
          <h1 className={styles.title}>{item.title}</h1>
          <div className={styles.poemContainer}>
            <div className={styles.center}>
              <img src={item.src} alt={item.title}></img>
            </div>
            <div className={styles.left}>{splitPoem(item.poem).poemLeft}</div>

            <div className={styles.right}>{splitPoem(item.poem).poemRight}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Poetry;
