import React from "react";
import logotipo from "../../assets/logo.png";
import Categorias from "../Categorias/Categorias";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className={styles.container}>
     <Categorias />
      <div>
        {/* <Link to="/">
          <img src={logotipo} alt="logotipo" className={styles.logo} />
        </Link> */}
      </div>
      <NavBar />
    </header>
  );
}
