import styles from "./Login.module.css"
import logo from "../../imgs/logo.png"

function Login(){
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
            <body>

                <main>

                    <div className={styles.logo}>

                       <img src={logo} alt="Logo"/>
                        <h1>LUMNI</h1>

                    </div>

                    <div className={styles.login}>
   
                        <form className={styles.formulario}>

                            <input type="email" name="email" id={styles.email} placeholder="Seu e-mail" required/>
                            <input type="password" name="senha" id={styles.senha} placeholder="Sua senha" required/>
                            <button type="submit" ><a href='#'>Entrar</a></button>

                        </form>


                        <div className={styles.checkbox}>

                            <input type="checkbox" id={styles.permacon} name="permanecer conectado" value="Permanecer conectado"/>
                            <label for="vehicle1">Permanecer conectado</label> 

                        </div>
                      </div>

                      <section className={styles.links}>

                        <a href="#" id={styles.link1}>Esqueci minha senha</a>
                        <a href="#" id={styles.link2}>Inscreva-se</a>

                      </section>

                     

                 </main>
               <div className={styles.footer}>

                 <img src={logo} alt="Logo rodapé" id={styles.img_footer}/>
                 <p>Produzido por <a>Guardiões Tech</a></p>
  
               </div>
            </body>

        </div>

       
    )
}
export default Login