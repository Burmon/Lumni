import styles from "./HomeAluno.module.css"
import persona_aluno from "../../imgs/persona_aluno.png"
import logo from "../../imgs/logo.png"


function HomeAluno(){
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
             <body>
                <main>
             <div className={styles.perfil_aluno_container}>
    
                <img src={persona_aluno} alt="persona"/>
                <h1>Bem vindo!</h1>
                <h2>Estudante</h2>

             </div>

            <div className={styles.input_intitucional}>
            <input type="name" name="nome"  placeholder="Código da instituição"></input>
            <button type="submit" onClick="#">Cadastrar</button>
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

export default HomeAluno