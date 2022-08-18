import styles from "./HomeAluno.module.css"
import persona_aluno from "../../imgs/persona_aluno.png"
import logo from "../../imgs/logo.png"
import { useState } from "react";
import {Menu}  from "../../components/Menu/Menu";
import {Header} from "../../components/Header/Header"



function HomeAluno(){

    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return(
        <div>
           
             <Menu
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
            
             <Header setMenuIsVisible={setMenuIsVisible}/>
             <div className={styles.big_container}>
            
              
              
               
             <div className={styles.perfil_aluno_container}>
    
                <img src={persona_aluno} alt="persona"/>
                <h1>Bem vindo!</h1>
                <h2>Estudante</h2>

             </div>

            <div className={styles.input_intitucional}>
            <input type="name" name="nome"  placeholder="Código da instituição"></input>
            <button type="submit" onClick="#">Cadastrar</button>
            </div>
            
            
            <div className={styles.footer}>

                <img src={logo} alt="Logo rodapé" id={styles.img_footer}/>
                <p>Produzido por <a>Guardiões Tech</a></p>

            </div>
            </div>
            
        </div>
    )
}

export default HomeAluno