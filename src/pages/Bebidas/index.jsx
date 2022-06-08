import React, { useState, useEffect } from 'react'
import styles from "./Bebidas.module.css";
import { getListBebida } from '../../services/EndPoint';
import ListItems from '../../components/ListItems';
import bebida1 from "../../assets/bebida1.png";
import bebida2 from "../../assets/bebida2.png";
import bebida3 from "../../assets/bebida3.png";
import bebida4 from "../../assets/bebida4.png";
import bebida5 from "../../assets/bebida5.png";
import bebida6 from "../../assets/bebida6.png";
import bebida7 from "../../assets/bebida7.png";
import bebida8 from "../../assets/bebida8.png";

export default function Bebidas() {

    const [bebidas, setBebidas] = useState([]);

    const drink = [
        {
          id: 2,
          nome: "Vodka e Melancia",
          preco: "16,00",
          img: bebida7
        },
        {
          id: 3,
          nome: "Caipirinha",
          preco: "8,00",
          img: bebida4
        },
        {
          id: 4,
          nome: "Frutas Vermelhas",
          preco: "16,00",
          img: bebida5
        },
        {
          id: 5,
          nome: "Suco Natural",
          preco: "8,00",
          img: bebida8
        },
        {
          id: 6,
          nome: "Stella Long Neck",
          preco: "9,00",
          img: bebida3
        },
        {
          id: 7,
          nome: "Drink Paradise",
          preco: "10,00",
          img: bebida6
        },
        {
          id: 8,
          nome: "Long Neck Cacabaré",
          preco: "6,00",
          img: bebida1
        },
    ];

    useEffect(() => {
      getListBebida().then(response => {
            setBebidas(response.data);
        })
    }, []);
  
  return (
    
    <div className={styles.container}> 
      <h1>BEBIDAS</h1> 
      <div className={styles.petiscos}>
        {bebidas && bebidas.map((bebida) => (
          <ListItems
            key={bebida.id}
            nome={bebida.produto}
            imagem={bebida2}
            preco={bebida.preco}
          />
        ))}
        {drink && drink.map((drink) => (
          <ListItems
            key={drink.id}
            nome={drink.nome}
            imagem={drink.img}
            preco={drink.preco}
          />
        ))}
      </div>
    </div>
    
  )
}
