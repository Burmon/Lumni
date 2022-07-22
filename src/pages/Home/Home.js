import styles from "./Home.module.css"
import persona from "../../imgs/persona.jpg"


function Home(){
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
                <link rel="shortcut icon" href="../imagens/shortcut_aba.png" type="image/x-icon" />
                <title>Lumni | Perfil</title>
             </head>
            
             <div className={styles.perfil_container}>
    
                <img src={persona} alt="persona"/>
                <h1>Bem vindo!</h1>
                <h2>Instituto</h2>

             </div>

          
            <div className={styles.mural_container}>
                <h1 id={styles.mural_titulo}>Mural</h1>
                <section id={styles.mural}>
                    <h4>11/07/2022</h4>
                    <h2>Aviso</h2>
                    <h3>Devido às fortes chuvas, a escola irá suspender as atividades presenciais no dia de hoje.</h3>
                </section>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" fill="#1162AD" id={styles.mural_botao} className="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>
             
        </div>
    )
}

export default Home