import styles from "./Cadastro.module.css";
import logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
function Cadastro() {
  return (
    <div className={styles.big_container}>
      <title>Lumni | Cadastro</title>
     <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
            <h1>LUMNI</h1>
          </div>
          <h1 className={styles.titulo}>Seu perfil</h1>
          <div className={styles.botoes}>
            <Link className={styles.botao_cad} to="/cadastroaluno">
              Aluno
            </Link>
            <Link className={styles.botao_cad} to="/cadastroinstituto">
              Instituto
            </Link>
            <Link className={styles.botao_cad} to="#">
              Professor
            </Link>
            <Link className={styles.voltar} to="/">
              <IoIosArrowRoundBack />
            </Link>
          </div>
          </div>
    </div>
  );
}

export default Cadastro;
