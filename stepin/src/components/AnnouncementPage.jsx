"use client";
import React from "react";
import styles from "../app/styles/Announcement.module.css"; // Importação correta do CSS Module
import { Pedidoespecial } from "./Pedidoespecial";

export default function AnnoucementPage() {
  return (
    <div className={styles.container}>
      {/* Seção de Informações */}
      <div className={styles.infoSection}>
        <h2>Informações sobre o produto:</h2>
        <p>Sapato Puma Future Rider Play On</p>
        <p>Categoria: Sapatos Lazer</p>
        <p>Masculino</p>
        <p>Valor: 90€</p><br>
        </br>
        {/* Tamanhos Disponíveis */}
        <h3>Tamanhos Disponíveis:</h3>
        <div className={styles.tamanhoContainer}>
        <Pedidoespecial 
        className={styles.buttonPedidoespecial} title={"37"} />
        <Pedidoespecial 
        className={styles.buttonPedidoespecial} title={"38"} />
        <Pedidoespecial 
        className={styles.buttonPedidoespecial} title={"39"} />
        <Pedidoespecial 
        className={styles.buttonPedidoespecial} title={"40"} />
        <Pedidoespecial 
        className={styles.buttonPedidoespecial} title={"41"} />
</div>
</div>

      {/* Seção de Imagem */}
      <div className={styles.imageSection}>
      <div className={styles.imageBox}>
    {/* Aqui você adiciona sua imagem */}
    <img 
      src="/images/tenis1.png"  // Substitua pelo caminho correto da sua imagem
      alt="Sapato Puma Future Rider Play On"    // Sempre coloque um alt para acessibilidade
      width={"500px"}
      className={styles.image}     // Se desejar estilizar a imagem com CSS
    />
  </div>
  <div>
    <Pedidoespecial 
    className={styles.compra} 
    title={"Compre já"} 
  />
    </div>
  </div>
</div>
  );
}