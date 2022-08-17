import React, { useState } from "react";
import { register } from "../../components/Autenticação/auth";
import styles from "./CadastroAluno.module.css";
import logo from "../../imgs/logo.png";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import InputCpf from "../../components/Mascara/MaskCpf";

function CadastroAluno() {
  const [formreg, setFormreg] = useState({
    name: "",
    cpf: "",
    email: "",
    password: "",
  });
  const handleSub = async (e) => {
    e.preventDefault();
    await register(formreg);
  };

  const [openModal, setOpenModal] = useState(false);

  function cpfHandler() {}

  return (
    <div className={styles.cad_container}>
      <title>Lumni | Cadastro</title>

      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
        <h1>LUMNI</h1>
        <h2>Cadastro</h2>
        <h3>Estudante</h3>
      </div>

      <div className={styles.input_cad}>
        <form className={styles.form_cad} onSubmit={handleSub}>
          <input
            type="name"
            name="nome"
            id={styles.nome}
            placeholder="Seu nome"
          ></input>
          <InputCpf id={styles.nome} onChange={cpfHandler} />

          <input
            type="email"
            name="email"
            id={styles.email}
            placeholder="Seu e-mail"
            required
            onChange={(e) => setFormreg({ ...formreg, email: e.target.value })}
          />

          <input
            type="password"
            name="senha"
            id={styles.senha}
            placeholder="Sua senha"
            required
            onChange={(e) =>
              setFormreg({ ...formreg, password: e.target.value })
            }
          />
          <button
            className={styles.botao}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Cadastrar
          </button>
          {openModal && <Modal closeModal={setOpenModal} />}
          <Link className={styles.voltar} to="/cadastro">
            <IoIosArrowRoundBack />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CadastroAluno;
