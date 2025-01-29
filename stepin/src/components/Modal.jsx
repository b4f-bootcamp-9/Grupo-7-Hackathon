"use client";
import { useState } from "react";
import styles from "../app/styles/Modal.module.css";


export default function Modal({ onClose }) {
    const [model, setModel] = useState("");
    const [brand, setBrand] = useState("");
    const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const normalizedModel = model.trim().toLowerCase();
    const normalizedBrand = brand.trim().toLowerCase();

    try{
        const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: normalizedModel, brand: normalizedBrand })
    });


    const data = await res.json();
    setMessage(data.message);
    setMessageSent(true); 


    setTimeout(() => {
      onClose(); // Fecha o modal automaticamente após 2 segundos
    }, 2000);
  } catch (error) {
    console.error("Erro ao enviar o pedido:", error);
    setMessage("Erro ao enviar o pedido. Tente novamente.");
  }

  setModel("");
  setBrand("");
 
  };

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>
          &times;
        </button>
        <div className={styles.modalHeader}>
          <h1>Faça o seu pedido</h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.textModal}>
        <input
            type="text"
            name="Nome"
            placeholder="Nome:"
            className={styles.inputField}
          />
          <input
            type="text"
            name="model"
            placeholder="Modelo:"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="text"
            name="brand"
            placeholder="Marca:"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="text"
            name="email"
            placeholder="E-mail:"
            className={styles.inputField}
          />
          {messageSent ? (
            <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>
          ) : (
            <p>Preencha o formulário e clique em enviar.</p>
          )}
          <div className={styles.button}>
            {!messageSent && (
              <button type="submit" className={styles.enviar}>
                Enviar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
