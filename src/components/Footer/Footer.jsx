import React from "react";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.colunas}>
          <p>EMPRESA</p>
          <a href="">Equipe</a>
          <a href="">Sobre Nós</a>
        </div>
        <div className={styles.colunas}>
          <p>REDES SOCIAIS</p>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
        </div>
        <div className={styles.colunas}>
          <span className={styles.copy}>
            <p>© Todos os Direitos Reservados - Pub As Panteras</p>
          </span>
        </div>
      </div>
    </footer>
  );
}
