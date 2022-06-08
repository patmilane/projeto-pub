import React, { useState, useEffect } from 'react';
import styles from "./Petisco.module.css";
import { getListPetiscos } from '../../services/EndPoint';
import ListItems from '../../components/ListItems';
import petisco1 from "../../assets/petisco1.png";
import petisco2 from "../../assets/petisco2.png";
import petisco3 from "../../assets/petisco3.png";
import petisco4 from "../../assets/petisco4.png";
import petisco5 from "../../assets/petisco5.png";
import petisco6 from "../../assets/petisco6.png";
import petisco7 from "../../assets/petisco7.png";
import petisco8 from "../../assets/petisco8.png";


export default function Petiscos() {

  const [petisco, setPetisco] = useState([]);

    const snacks = [
        {
          id: 1,
          nome: "Amendoim Crocante",
          preco: "16,00",
          img: petisco5
        },
        {
          id: 2,
          nome: "Torresmo",
          preco: "23,00",
          img: petisco7
        },
        {
          id: 3,
          nome: "Batata Frita",
          preco: "18,00",
          img: petisco8
        },
        {
          id: 4,
          nome: "Calabresa Frita",
          preco: "23,00",
          img: petisco6,
        },
        {
          id: 5,
          nome: "Dadinho de MMuçarela",
          preco: "26,00",
          img: petisco2
        },
        {
          id: 6,
          nome: "Bolinha de Carne",
          preco: "25,00",
          img: petisco3
        },
        {
          id: 7,
          nome: "Enroladinho de Salsicha",
          preco: "16,00",
          img: petisco4
        },
      ];

      useEffect(() => {
        getListPetiscos().then(response => {
          setPetisco(response.data);
          })
      }, []);

  return (
    <div className={styles.container}> 
      <h1>PETISCOS</h1> 
      <div className={styles.petiscos}>
        {petisco && petisco.map((item) => (
          <ListItems
            key={item.id}
            nome={item.produto}
            imagem={petisco1}
            preco={item.preco}
          />
        ))}
        {snacks && snacks.map((item) => (
          <ListItems
            key={item.id}
            nome={item.nome}
            imagem={item.img}
            preco={item.preco}
          />
        ))}
      </div>
    </div>

  )
}
