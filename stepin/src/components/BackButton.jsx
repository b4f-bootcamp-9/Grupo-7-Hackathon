import React from "react";
import styles from "../app/styles/BackButton.module.css";
import { useRouter } from 'next/navigation'; // Para navegação em páginas do Next.js

export const BackButton = ({ onClick, redirectTo }) => {
  const router = useRouter();

  const handleBack = () => {
    if (redirectTo) {
      router.push(redirectTo); // Redireciona para o URL especificado
    } else if (onClick) {
      onClick(); // Executa a função passada como `onClick`, se fornecida
    } else {
      router.back(); // Volta para a página anterior por padrão
    }
  };

  return (
    <button 
      className={styles.backButton} // Classe CSS para estilo
      onClick={handleBack} // Adiciona a lógica de redirecionamento
    >
      <span className={styles.icon}>&#x276E;</span> {/* Ícone da seta */}
      <span className={styles.text}>Voltar</span> {/* Texto do botão */}
    </button>
  );
};

export default BackButton;