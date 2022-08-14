import styles from "./NossoTime.module.css";
import logo from "../../imgs/logo.png";
import { useState } from "react";
import {Menu}  from "../../components/Menu/Menu";
import {Header} from "../../components/Header/Header";
import foto_matheus from "../../imgs/foto_matheus.png";
import foto_vitoria from "../../imgs/foto_virotix.png";
import foto_grazi from "../../imgs/foto_grazi.png";
import { GoMarkGithub } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function NossoTime(){
    const [menuIsVisible, setMenuIsVisible] = useState(false);
return(
    <div>
       <title>Lumni | Nosso time</title>
            <Menu
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
            
             <Header setMenuIsVisible={setMenuIsVisible}/>
            <body>
                <main>
                   

                                <div className={styles.logo}>

                                    <img src={logo} alt="Logo"/>
                                    <h1>LUMNI</h1>
                                    <h2>Nosso time</h2>

                                </div>


            <div className={styles.container}>
                <div className={styles.cartao_container}>

                    <img src={foto_matheus} alt="Logo"/>
                    <h3>Matheus Karlyson</h3>
                      <nav className={styles.card_links}>
                    
                        <a href="https://github.com/Burmon"><GoMarkGithub className={styles.icone} size={45}/></a>
                        <a href="https://www.instagram.com/mkarlyson_/"><FaInstagram className={styles.icone} size={45}/></a>
                        <a href="https://www.linkedin.com/in/karlyson/"><FaLinkedin className={styles.icone} size={45}/></a>
                      </nav>
                       
                    </div>

                    <div className={styles.cartao_container}>

                    <img src={foto_vitoria} alt="Logo"/>
                    <h3>Vitória Cristina</h3>
                        <nav className={styles.card_links}>

                            <a href="https://github.com/vitoriacsilva1"><GoMarkGithub className={styles.icone} size={45}/></a>
                            <a href="https://www.instagram.com/virottix/"><FaInstagram className={styles.icone} size={45}/></a>
                            <a href="http://linkedin.com/in/vitória-cristina-37247422b"><FaLinkedin className={styles.icone} size={45}/></a>
                        </nav>
                    
                    </div>

                    <div className={styles.cartao_container}>

                        <img src={foto_grazi} alt="Logo"/>
                        <h3>Grazielly Galvão</h3>
                            <nav className={styles.card_links}>

                                <a href="https://github.com/Grazielly-Araujo"><GoMarkGithub className={styles.icone} size={45}/></a>
                                <a href="https://www.instagram.com/geminiana_pan/"><FaInstagram className={styles.icone} size={45}/></a>
                                <a href="https://www.linkedin.com/in/grazielly-galv%C3%A3o-ara%C3%BAjo-b21977208/"><FaLinkedin className={styles.icone} size={45}/></a>
                            </nav>

                    </div>
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

export default NossoTime
