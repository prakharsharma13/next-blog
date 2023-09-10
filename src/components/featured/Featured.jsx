import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Prakhar Sharma here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Simple ways to inspire your inner innovator</h1>
          <p className={styles.postDesc}>
          Inspiring your inner innovator is a journey that doesn't require complexity; it thrives on simplicity. One of the most fundamental aspects is to nurture your curiosity. Embrace the innate desire to ask questions about the world around you, triggering a sense of wonder that leads to innovative thinking. Cultivating a thirst for knowledge is another pivotal step. Be open to continuous learning through reading, online courses, workshops, or engaging in enlightening conversations with people from diverse backgrounds. The more knowledge you accumulate, the more dots you have to connect, which can spark novel ideas.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;