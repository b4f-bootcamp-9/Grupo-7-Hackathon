import React from "react";
import styles from "../app/styles/BackButton.module.css";
import { useRouter } from 'next/navigation'; 

export const BackButton = ({ onClick, redirectTo }) => {
  const router = useRouter();

  const handleBack = () => {
    if (redirectTo) {
      router.push(redirectTo); 
    } else if (onClick) {
      onClick(); 
    } else {
      router.back(); 
    }
  };

  return (
    <button className={styles.backButton}
      onClick={handleBack} 
    >
      <span className={styles.icon}>&#x276E;</span> 
      <span className={styles.text}>Voltar</span> 
    </button>
  );
};

export default BackButton;