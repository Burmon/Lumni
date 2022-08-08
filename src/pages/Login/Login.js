import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect, Link } from "react-router-dom";
import  AuthConfig  from '../../Auth/Config';
import { AuthContext } from '../../Auth/AuthContext';
import styles from "./Login.module.css"
import logo from "../../imgs/logo.png"


const Logar = withRouter(({history}) => {
    
    const loginFunc = useCallback(
        async (event) => {
            event.preventDefault();

            const {email, senha} = event.target.elements;

            try{
                await AuthConfig
                .auth()
                .signInWithEmailAndPassword(email.value, senha.value);
                history.push('/homealuno');
                }catch(error){
                    console.log(error);
                }
            },
            [history],
    );

    const { usuario } = useContext(AuthContext);

    if(usuario){
        return <Redirect to='/homealuno'/>
    }

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
   
                        <form className={styles.formulario} onSubmit={loginFunc}>

                            <input type="email" name="email" id={styles.email} placeholder="Seu e-mail" required/>
                            <input type="password" name="senha" id={styles.senha} placeholder="Sua senha" required/>
                           

                        </form>
                        <div className={styles.checkbox}>

                            <input type="checkbox" id={styles.permacon} name="permanecer conectado" value="Permanecer conectado"/>
                            <label for="vehicle1">Permanecer conectado</label> 

                        </div>
                        <nav >
                        <Link  className={styles.botao} to='/homeinst'>Entrar</Link>
                        </nav>
                        
                      </div>

                      <section className={styles.links}>

                        <Link to='/recuperarsenha' id={styles.link}>Esqueci minha senha</Link>
                        <Link to='/cadastro' id={styles.link}>Inscreva-se</Link>

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
)
export default Logar