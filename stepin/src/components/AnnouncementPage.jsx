"use client";
import React from "react";
import styles from "../app/styles/Announcement.module.css"; // Importação correta do CSS Module
import { Pedidoespecial } from "./Pedidoespecial";

export default function AnnoucementPage() {
  return (
    <div className={styles.container}>
      {/* Seção de Informações */}
      <div className={styles.infoSection}>
        <h2>Informações</h2>
        <p>Bla bla bla</p>

        {/* Tamanhos Disponíveis */}
        <h3>Tamanhos Disponíveis</h3>
        <Pedidoespecial 
      className={styles.buttonPedidoespecial} 
      title={"Tamanho 37"}
    />
    <Pedidoespecial 
      className={styles.buttonPedidoespecial} 
      title={"Tamanho 38"}
    />
    <Pedidoespecial 
      className={styles.buttonPedidoespecial} 
      title={"Tamanho 39"}
    />
    <Pedidoespecial 
      className={styles.buttonPedidoespecial} 
      title={"Tamanho 40"}
    />
    <Pedidoespecial 
      className={styles.buttonPedidoespecial} 
      title={"Tamanho 41"}
    />
    </div>

      {/* Seção de Imagem */}
      <div className={styles.imageSection}>
      <div className={styles.imageBox}>
    {/* Aqui você adiciona sua imagem */}
    <img 
      src="/images/tenis1.png"  // Substitua pelo caminho correto da sua imagem
      alt="Tenis"    // Sempre coloque um alt para acessibilidade
      className={styles.image}     // Se desejar estilizar a imagem com CSS
    />
  </div>
        <Pedidoespecial 
      className={styles.buttonPedidoespecial} 
      title={"Compre Ja"}
    />
      </div>
    </div>
  );
}