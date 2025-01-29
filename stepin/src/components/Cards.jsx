import React from "react";
import Image from "next/image";
import styles from "../../src/app/styles/Cards.module.css";

const Cards = ({
  imageSrc,
  title,
  descricao,
  stars,
  reviews,
  location,
  price,
}) => {
  return (
    <div className={styles.cardcontainer} href="/Cards">
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.priceRow}>
            <span className={styles.icon}>💰</span>
            <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
