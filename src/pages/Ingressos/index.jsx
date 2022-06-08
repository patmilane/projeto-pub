import React, { useState, useEffect } from 'react';
import styles from "./Ingressos.module.css";
import { getListIngresso } from '../../services/EndPoint';
import ingresso1 from "../../assets/ingresso1.png";
import ingresso2 from "../../assets/ingresso2.png";
import ingresso3 from "../../assets/ingresso3.png";


export default function Ingressos() {

  const [ingresso, setIngresso] = useState([]);
  const tickets = [
    {
      id: 1,
      nome: "MEIA ENTRADA",
      preco: "16,00",
      img: ingresso1
    },
    {
      id: 2,
      nome: "TRADICIONAL",
      preco: "23,00",
      img: ingresso3
    },
  ];

  useEffect(() => {
    getListIngresso().then(response => {
      setIngresso(response.data);
      })
  }, []);

  console.log(ingresso);

  return (
    <div className={styles.container}> <h1>INGRESSOS</h1> <br />
      <div className={styles.linha}>
        <div className={styles.petiscos}>
          {ingresso && ingresso.map((item) => (
            <div className={styles.petisco}>
              <h2>{item.categoria}</h2><br />
              <img src={ingresso2} alt="" />
              <br /><br />
              <h2>R${item.preco}</h2>
          </div>
          ))}
        </div>
        <div className={styles.petiscos}>
          {tickets && tickets.map((item) => (
            <div className={styles.petisco}>
              <h2>{item.nome}</h2><br />
              <img src={item.img} alt="" />
              <br /><br />
              <h2>R${item.preco}</h2>
        </div>
          ))}
      </div>
    </div>
  </div>

    //           <div className={styles.petisco}>
    //             <h2>MEIA ENTRADA</h2> <br />
    //             <img src={ingresso1}  alt=""  /><br />
    //             <br /><h2>R$ 10,00</h2>
    //           </div> 
    //           <div className={styles.petisco}>
    //             <h2>TRADICIONAL</h2><br />
    //             <img src={ingresso3}  alt=""  /><br />
    //             <br /><h2>R$ 20,00</h2>
    //           </div> 
    //           <div className={styles.petisco}>
    //             <h2>VIP</h2><br />
    //             <img src={ingresso2}  alt=""  /><br />
    //             <br /><h2>R$ 40,00</h2>
    //           </div> 
    //       </div>
    // </div>

  )
}
