import React from "react";
import styles from "../app/styles/Footer.module.css";
// import styles from "./s; // Importa o arquivo CSS
import Link from "next/link"; // Para links internos e externos
import Image from "next/image"; // Para o logo e ícones

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* Coluna 1 */}
      <div className={styles.column1}>
        {/* Esquerda */}
        <Link href="/informacoes">Contactar</Link>
        <Link href="/condicoes-legais">Condições Legais</Link>
        <Link href="/aviso-privacidade">Aviso de Privacidade</Link>
        <Link href="/aviso-privacidade">Quem Somos</Link>
      </div>
      <div className={styles.column2}>
        <p className={styles.footerText}>
          2025 StepIn. Todos os direitos reservados.
        </p>
      </div>
      <div className={styles.column3}>
        <p>Siga-nos em</p>
        <div className={styles.socialIcons}>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/pinterest.svg" alt="Pinterest" width="32" height="32" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.svg" alt="Facebook" width="32" height="32" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/x.svg" alt="X (Twitter)" width="32" height="32" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
      </div>
      </div>
    </div>
  );
};

export default Footer;
