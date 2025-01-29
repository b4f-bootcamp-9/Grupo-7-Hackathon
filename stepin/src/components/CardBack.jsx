import React from "react";
import styles from "../app/styles/CardBack.module.css";
import {Sabermais } from "./Sabermais";
import { useRouter } from "next/navigation";

const CardBack = ({ nomeEmpresa, stars, reviews, localidade, descricao, imageSrc }) => {

  const router = useRouter();
  return (
    <div className={styles.card}>
      {/* Imagem */}
      <div className={styles.imageContainer}>
        <img 
          src={imageSrc || "/Images/cardback.png"} 
          alt={nomeEmpresa || "Imagem do fornecedor"} 
          className={styles.image} 
        />
      </div>

{/* Conteúdo do card */}
<div className={styles.content}>
        <h2 className={styles.title}>{nomeEmpresa}</h2>
        {/* <div className={styles.infoRow}> */}
          {/* Estrelas e avaliações */}
          <div className={styles.starsContainer}>
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={index < stars ? styles.starFilled : styles.starEmpty}>
                ★
              </span>
            ))}
              <span className={`${styles.reviewsText} ${styles.hiddenText}`}> {/* Esconde o numero da logica das estrelas */}
               {stars}
              </span>
          </div>
        </div>
        <div className={styles.infoRow}>
        <span className={styles.infoText}>
        <strong>Localidade:</strong> {localidade}
        </span>
        <span className={styles.infoText}>
        <strong>Descrição:</strong> {descricao}
          </span>
        

        {/* Botão posicionado no canto inferior direito */}
        <div className={styles.buttonContainer}>
          <Sabermais title={"Saber Mais"} onClick={() =>
                  router.push(
                    "/announcement"
                  )} />
        </div>
      </div>
    </div>
  );
};

export default CardBack;

