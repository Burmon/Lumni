import React, { Component } from "react";
import axios from "./Postorder";
import styles from "./styles.modules.css";

export default function Form (){
  const [form, setForm] = useState();

  // changeHandler = (e) => {
    // setForm({
    //   [e.target.name]: e.target.value,
    // });
  // };

  // submitHandler = (e) => {
    // e.preventDefault();
    // axios
    //   .post("/posts.json", this.state)
    //   .then((res) => console.log("post success"))
    //   .catch((err) => console.log(err));

    // setForm({
    //   ...initialState,
    // });
  // };

  return (
    <form onSubmit={this.submitHandler} className={styles.card_mural}>
      <div className={styles.form_mural_titulo}>
        <input
          type="text"
          name="title"
          id={styles.titulo}
          className={styles.titulo_mural}
          placeholder="Título"
          value={title}
          onChange={this.changeHandler}
        />
      </div>
      <div className={styles.form_mural_corpo}>
        <input
          type="text"
          name="body"
          id={styles.corpo}
          className={styles.corpo_mural}
          placeholder="Seu texto"
          value={body}
          onChange={this.changeHandler}
        />
      </div>
      <button className={styles.botao_mural}>Publicar</button>
    </form>
  );
};
