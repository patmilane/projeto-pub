import React from 'react'
import styles from "./Sobre.module.css";

import fachada from "../../assets/pubfachada.jpg";



export default function Sobre() {
  return (
    <div className={styles.container1}> <h1>SOBRE O PUB </h1> 
        <div className={styles.sobres}>
              <div className={styles.sobre}>
                <h2 className={styles.h22}>As Panteras é um PUB de tecnologia de ponta que tem como objetivo atrair a diversidade, a fim de promover um ambiente agradável para todos os gêneros. Fornecendo um ambiente seguro para você e seus dados.</h2>
                <br />
                <img src={fachada} alt="" />
              </div> 
      </div>
      </div>

  )
}
