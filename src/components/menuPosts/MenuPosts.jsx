import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/travel.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
          Roaming the World: Unforgettable Adventures and Wanderlust Tales
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Mike</span>
            <span className={styles.date}> - 15.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/culture.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
          Embracing Diversity: Navigating the Mosaic of World Cultures
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Arya Stark</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/food.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
          Culinary Chronicles: Exploring Global Flavors and Food Adventures
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Abhishek</span>
            <span className={styles.date}> - 12.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/fashion.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
          The Ever-Evolving World of Fashion: Trends, Styles, and Beyond
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jane Doe</span>
            <span className={styles.date}> - 15.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;