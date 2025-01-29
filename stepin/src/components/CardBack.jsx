import React from "react";
import styles from "../app/styles/CardBack.module.css";
// import {Sabermais } from "./Sabermais";
import { useRouter } from "next/navigation";

const CardBack = ({ model, brand, quantity_sold, imageSrc }) => {

  const router = useRouter();
  return (
    <div className={styles.card}>
      {/* Imagem */}
      <div className={styles.imageContainer}>
        <img 
          src={imageSrc || "/Images/cardback.png"} 
          alt={brand || "Imagem do fornecedor"} 
          className={styles.image} 
        />
      </div>

{/* Conteúdo do card */}
<div className={styles.content}>
        {/* <h2 className={styles.title}>{brand}</h2> */}
        {/* <div className={styles.infoRow}> */}
          {/* Estrelas e avaliações */}
          <div className={styles.starsContainer}>
            {/* {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={index < stars ? styles.starFilled : styles.starEmpty}>
                ★
              </span>
            ))}
              <span className={`${styles.reviewsText} ${styles.hiddenText}`}> 
               {stars}
              </span> */}
          </div>
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
          {/* <Sabermais title={"Saber Mais"} onClick={() =>
                  router.push(
                    "/announcement"
                  )} /> */}
        </div>
      </div>
    </div>
  );
};

export default CardBack;

