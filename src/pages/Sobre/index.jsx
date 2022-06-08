import React from 'react'
import styles from "./Sobre.module.css";

import petisco5 from "../../assets/petisco5.png";
import petisco6 from "../../assets/petisco6.png";
import petisco7 from "../../assets/petisco7.png";
import petisco8 from "../../assets/petisco8.png";


export default function Sobre() {
  return (
    <div className={styles.container}> <h1>SOBRE O PUB </h1> <br />

        <div className={styles.petiscos}>
              
              <div className={styles.petisco}>
                <h2>AMENDOIM CRU</h2> <br />
                <img src={petisco5}  alt=""  /><br />
                <br /><h2>R$ 13,00</h2>
              </div> 
              <div className={styles.petisco}>
                <h2>AMENDOIM CROCANTE</h2><br />
                <img src={petisco6}  alt=""  /><br />
                <br /><h2>R$ 16,00</h2>
              </div> 
              <div className={styles.petisco}>
                <h2>TORRESMO</h2>
                <img src={petisco7} className={styles.petisco} alt=""  />
                <h2>R$ 23,00</h2>
              </div> 
              <div className={styles.petisco}>
                <h2>BATATA FRITA</h2>
                <img src={petisco8} className={styles.petisco} alt=""  />
                <h2>R$ 18,00</h2>
              </div> 
            </div>
    </div>

  )
}
