import React from "react";
import background from "../../assets/background.jpg";
import styles from "./Banner.module.css";
export default function Banner() {
  return (
    <div>
      <div className={styles.descricaoContainer}>
        <div className={styles.descricao}>
         
        <h1 className={styles.titulo}>PUB AS PANTERAS</h1>
       {/* <img src={background} alt="" className={styles.logo} /> */}



        </div>
      </div>
    </div>
  );
}
