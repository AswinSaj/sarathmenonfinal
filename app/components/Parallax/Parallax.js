"use client";
import React, { useRef } from "react";
import styles from "./Parallax.module.css";
import { images } from "./Gallery";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useWindowSize } from "rooks";
import Link from "next/link";
const Parallax = () => {
  const { innerHeight: height } = useWindowSize();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  return (
    <>
      <div className={styles.title}>
        <h1>PHOTOGRAPHY</h1>
      </div>
      <Link href={"/photography"}>
        <section ref={container} className={styles.gallery}>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y} />
          <Column images={[images[9], images[10], images[11]]} y={y2} />
        </section>
      </Link>
    </>
  );
};

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src, index) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <Image src={src} fill alt="image" priority sizes="(100vw, 100vh)" />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Parallax;
