import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import styles from "./VideosMobile.module.css";
import VideoMobile from "./VideoMobile";
import { descriptions } from "./data";

const DRAG_BUFFER = 60;
const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};
const VideosMobile = () => {
  const [index, setIndex] = useState(0);
  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && index < 2) {
      setIndex((i) => i + 1);
    } else if (x >= DRAG_BUFFER && index > 0) {
      setIndex((i) => i - 1);
    }
  };
  return (
    <>
      <div id="films" className={styles.films}>
        <div className={styles.title}>
          <h1>FILMOGRAPHY</h1>
        </div>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX }}
          animate={{ translateX: `-${index * 100}%` }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className={styles.carouselWrapper}
        >
          {descriptions.map((description) => (
            <VideoMobile key={description.title} {...description} />
          ))}
        </motion.div>
        <Dots imgIndex={index} setImgIndex={setIndex} />
      </div>
    </>
  );
};

export default VideosMobile;
const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className={styles.dotscontainer}>
      {[0, 0, 0].map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`${styles.dot} ${
              idx === imgIndex ? styles.active : styles.inactive
            }`}
          />
        );
      })}
    </div>
  );
};
