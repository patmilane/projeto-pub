import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className={styles.container}>
     {/* <a href="/cadastro">Login</a> */}
      <a href="../pages/Contato/Contato"></a>
      <a href=""></a>
    </div>
  );
}
