import styles from "./NossoTime.module.css";
import logo from "../../imgs/logo.png";
import { useState } from "react";
import {Menu}  from "../../components/Menu/Menu";
import {Header} from "../../components/Header/Header";
import foto_matheus from "../../imgs/foto_matheus.jpeg";
import foto_vitoria from "../../imgs/foto_vitoria.jpg"
import { GoMarkGithub } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function NossoTime(){
    const [menuIsVisible, setMenuIsVisible] = useState(false);
return(
    <div>
         <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet"/>
                <link rel="shortcut icon" href="../imagens/shortcut_aba.png" type="image/x-icon" />
            </head>
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
                      <nav className={styles.card_links}>
                    
                        <a href="https://github.com/Burmon"><GoMarkGithub className="link" size={45}/></a>
                        <a href="https://www.instagram.com/mkarlyson_/"><FaInstagram className="link" size={45}/></a>
                        <a href="https://www.linkedin.com/in/karlyson/"><FaLinkedin className="link" size={45}/></a>
                      </nav>
                       
                    </div>

                    <div className={styles.cartao_container2}>

                    <img src={foto_vitoria} alt="Logo"/>
                        <nav className={styles.card_links2}>

                            <a href="https://github.com/vitoriacsilva1"><GoMarkGithub className="link" size={45}/></a>
                            
                            <a href="http://linkedin.com/in/vitória-cristina-37247422b"><FaLinkedin className="link" size={45}/></a>
                        </nav>
                    
                    </div>
                 </div>





                </main>


            </body>
    </div>
)
}

export default NossoTime
