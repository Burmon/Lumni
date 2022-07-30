import styles from "./Cadastro.module.css"
import logo from "../../imgs/logo.png"
import { Link } from 'react-router-dom'

function Cadastro(){
   return(
    <div >
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
            <body>

                <main>

                    <div className={styles.logo}>

                       <img src={logo} alt="Logo"/>
                        <h1>LUMNI</h1>

                    </div>
                    <h1 className={styles.titulo}>Você é:</h1>
                    <div className={styles.botoes}>
                        <button><Link className={styles.botao_cad} to='/cadastroaluno'>Aluno</Link></button>
                        <button><Link className={styles.botao_cad} to='/cadastroinstituto'>Instituto</Link></button>
                        <button><Link className={styles.botao_cad} to='#'>Professor</Link></button>


                    </div>

                   

                     

                 </main>
              
            </body>

        </div>


  
   )
}

export default Cadastro