"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Timeline.module.css";
const Timeline = () => {
  const [year, setYear] = useState("2015");
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const achievements = document.querySelectorAll(".achievementRef");
    const options = {
      threshold: 0.9,
    };
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setYear(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);

    achievements.forEach((section) => observer.observe(section));
  }, []);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".achievementRef:not(:first-child)", {
        opacity: 0,
        scale: 0.5,
        x: "100%",
      });
      const animation = gsap.to(".achievementRef:not(:first-child)", {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1,
        stagger: 1,
      });
      ScrollTrigger.create({
        trigger: ".timelineRef",
        start: "top top",
        end: "bottom bottom",
        pin: ".yearsRef",
        markers: false,
        animation: animation,
        scrub: true,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className={styles.title}>
        <h1>ABOUT</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.description}>
          <p>
            <span>Sarath Menon</span>, a professional filmmaker, screenwriter,
            cinematographer and photographer, is an alumnus of The London Film
            School, after completing his undergraduate as a Chemical Engineer
            from the prestigious BITS Pilani. An Internationally acclaimed
            artist and visual storyteller, his creations hold meaning beyond the
            blink of an eye.
          </p>
          <p>
            Brimming with poetic afterthought, Sarath tells stories through
            visuals and words. His aesthetic compositions and unique lighting
            makes his visual creations deep and insightful. He captures emotions
            and conveys them profoundly, leaving you with a tear drop or a smile
            on your face when he signs off.
          </p>
        </div>
        <div className={`timelineRef ${styles.timeline}`}>
          <div className={`yearsRef ${styles.years}`}>
            <div
              className={`${styles.year} ${
                year === "2015" ? styles.active : ""
              }`}
            >
              2015
            </div>
            <div
              className={`${styles.year} ${
                year === "2016" ? styles.active : ""
              }`}
            >
              2016
            </div>
            <div
              className={`${styles.year} ${
                year === "2017" ? styles.active : ""
              }`}
            >
              2017
            </div>
            <div
              className={`${styles.year} ${
                year === "2018" ? styles.active : ""
              }`}
            >
              2018
            </div>
            <div
              className={`${styles.year} ${
                year === "2019" ? styles.active : ""
              }`}
            >
              2019
            </div>
            <div
              className={`${styles.year} ${
                year === "2020" ? styles.active : ""
              }`}
            >
              2020
            </div>
            <div
              className={`${styles.year} ${
                year === "2021" ? styles.active : ""
              }`}
            >
              2021
            </div>
            <div
              className={`${styles.year} ${
                year === "2023" ? styles.active : ""
              }`}
            >
              2023
            </div>
          </div>
          <div className={styles.achievements}>
            <div className={`achievementRef ${styles.achievement}`} id="2015">
              Debut Film as Writer-Director
            </div>
            <div className={`achievementRef ${styles.achievement}`} id="2016">
              Kerala state award winner for Rajakumaran
            </div>
            <div className={`achievementRef ${styles.achievement}`} id="2017">
              Joined London Film School
            </div>
            <div className={`achievementRef ${styles.achievement}`} id="2018">
              Awarded Best Cinematographer at Pilas en Corto International Film
              Festival, Spain
            </div>
            <div className={`achievementRef ${styles.achievement}`} id="2019">
              Graduated MA in Filmmaking
            </div>
            <div className={`achievementRef ${styles.achievement}`} id="2020">
              Started working in Indian Film and advertising Industry
            </div>
            <div className={`achievementRef ${styles.achievement}`} id="2021">
              Started working with Rajiv Menon
            </div>
            <div className={`achievementRef ${styles.achievement}`} id="2023">
              Independent
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
