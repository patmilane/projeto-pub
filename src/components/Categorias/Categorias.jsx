import React from "react";
import styles from "./Categorias.module.css";
import BotaoCategoria from "../BotaoCategoria/BotaoCategoria";
export default function Categorias() {
  return (
    <div className={styles.container}>
      <BotaoCategoria categoria="Inicio" to="/"/>
      <BotaoCategoria categoria="Petiscos" to="/petiscos" />
      <BotaoCategoria categoria="Bebidas" to="/bebidas" />
      <BotaoCategoria categoria="Ingressos" to="/ingressos" />
      <BotaoCategoria categoria="Sobre" to="/sobre" />


    </div>
  );
}
