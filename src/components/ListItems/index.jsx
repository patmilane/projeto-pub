import react from 'react';
import styles from "./ListItems.module.css";

export default function ListItems( props ) {

  return (
    <div className={styles.petisco}>
      <h2>{props.nome}</h2> <br />
      <img src={props.imagem} /><br />
      <h2>R${props.preco}</h2>
    </div>
  );
}
