import styles from "./RecuperarSenha.module.css"
import logo from "../../imgs/logo.png"
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";

function RecuperarSenha(){
    return(
        <div>
            <title>Lumni | Recuperação</title>
             <body>
                <main>
                <div className={styles.logo}>

                    <img src={logo} alt="Logo"/>
                    <h1>LUMNI</h1>
                    <h2>Recuperação de conta</h2>
                </div>
                

            <div className={styles.input_recuperacao}>
            <input type="email" name="email"  placeholder="Seu e-mail"></input>
            <Link className={styles.botao} to='/recuperarsenha'>Enviar</Link>
            <Link className={styles.voltar} to='/'><IoIosArrowRoundBack/></Link>
            </div>
            
            </main>
           
            </body>
        </div>
    )
}

export default RecuperarSenha