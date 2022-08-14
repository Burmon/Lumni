
import styles from "./HomeInst.module.css"
import persona from "../../imgs/persona.jpg"
import logo from "../../imgs/logo.png"
import { useState } from "react";
import {Menu}  from "../../components/Menu/Menu";
import {Header} from "../../components/Header/Header"
import { IoIosAdd } from "react-icons/io";

function HomeInst(){
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return(
        <div>
                <title>Lumni | Perfil</title>
            
             <Menu
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
            
             <Header setMenuIsVisible={setMenuIsVisible}/>

             <body>
                <main>
             <div className={styles.perfil_container}>
    
                <img src={persona} alt="persona"/>
                <h1>Bem vindo!</h1>
                <h2>Instituto</h2>

             </div>

             <h1 id={styles.mural_titulo}>Mural</h1>
            <div className={styles.mural_container}>
                
               
                    <h4>11/07/2022</h4>
                    <h2>Aviso</h2>
                    <h3>Devido às fortes chuvas, a escola irá suspender as atividades presenciais no dia de hoje.</h3>
                    <IoIosAdd className={styles.botao_add}/>


              </div>
           
            </main>
            <div className={styles.footer}>

                <img src={logo} alt="Logo rodapé" id={styles.img_footer}/>
                <p>Produzido por <a>Guardiões Tech</a></p>

            </div>
            </body>
        </div>
    )
}

export default HomeInst