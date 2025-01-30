import React from "react";
import styles from "../app/styles/CardBack.module.css";
// import {Sabermais } from "./Sabermais";
import { useRouter } from "next/navigation";

const CardBack = ({ model, brand, imageSrc, onClick }) => {
  const router = useRouter();
  return (
    <div className={styles.card} onClick={onClick}>
      {/* Imagem */}
      <div className={styles.imageContainer}>
        <img
          src={"./images/" + imageSrc || "/Images/cardback.png"}
          alt={brand || "Imagem do fornecedor"}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.starsContainer}></div>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoText}>
          <strong>Marca:</strong> {brand}
        </span>
        <span className={styles.infoText}>
          <strong>Modelo:</strong> {model}
        </span>
        {/* Botão posicionado no canto inferior direito */}
        <div className={styles.buttonContainer}>
        </div>
      </div>
    </div>
  );
};

export default CardBack;
