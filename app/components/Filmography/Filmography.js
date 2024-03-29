import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Filmography.module.css";
import { descriptions } from "../VideoMobile/data";

const Filmography = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className={styles.section} id="films">
      <div className={styles.bgVideo}>
        <video src="Videos/bg_video.mp4" autoPlay muted loop playsInline />
        <div className={styles.mainWrapper}>
          <div className={styles.titleFilm}>FILMOGRAPHY</div>
          <div className={styles.activeVideo}>
            <iframe
              id="videoIframe"
              width="100%"
              height="100%"
              src={descriptions[index].link}
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Description {...descriptions[index]} />
          <div className={styles.thumbnails}>
            {descriptions.map((description, index) => (
              <div
                key={index}
                className={styles.thumbnailWrapper}
                onClick={() => {
                  setIndex(index);
                }}
              >
                <Image
                  src={description.thumbnail}
                  alt={description.title}
                  className={styles.thumbnail}
                  width={500}
                  height={500}
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filmography;

const Description = ({ title, description, cast }) => {
  return (
    <div className={styles.descriptionWrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.cast}>{cast}</div>
    </div>
  );
};
