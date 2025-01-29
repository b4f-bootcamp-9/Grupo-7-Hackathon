"use client"; 
import React from 'react';
import styles from "../app/styles/Pedidoespecial.module.css";

export const Pedidoespecial = ({ onClick, title }) => {
  return (
    <button 
      className={styles.buttonPedidoespecial} 
      onClick={onClick} 
      title={title}
    >
      {title}
    </button>
  );
};