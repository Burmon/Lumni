import styles from "./RecuperarSenha.module.css"
import logo from "../../imgs/logo.png"
import { Link } from 'react-router-dom'


function RecuperarSenha(){
    return(
        <div>
             <head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet"/>
                <link rel="shortcut icon" href="../imagens/shortcut_aba.png" type="image/x-icon" />
                <link rel="shortcut icon" href="../imagens/shortcut_aba.png" type="image/x-icon" />
                <title>Lumni | Perfil</title>
             </head>
             <body>
                <main>
                <div className={styles.logo}>

                    <img src={logo} alt="Logo"/>
                    <h1>LUMNI</h1>
                    <h2>Recuperação de conta</h2>
                </div>
                

            <div className={styles.input_recuperacao}>
            <input type="email" name="email"  placeholder="Seu e-mail"></input>
            <button type="submit"><Link to='/recuperarsenha'>Enviar</Link></button>
            </div>
            
            </main>
           
            </body>
        </div>
    )
}

export default RecuperarSenha