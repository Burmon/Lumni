import React, {useState} from 'react'
import {login} from '../../components/Autenticação/auth'
import {  Link } from "react-router-dom";
import styles from "./Login.module.css"
import logo from "../../imgs/logo.png"


function Login(){
    const [form,setForm] = useState({
        email:'',
        password:''
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await login(form);
  
    }
   

    return(
        <div className={styles.login_container}>
            <title>Lumni | Login</title>
           

                    <div className={styles.logo}>

                       <img src={logo} alt="Logo"/>
                        <h1>LUMNI</h1>

                    </div>

                    <div className={styles.login}>
   
                        <form className={styles.formulario} onSubmit={handleSubmit}>

                            <input type="email"
                             name="email" id={styles.email}
                              placeholder="Seu e-mail"
                              onChange={(e) => 
                              setForm({...form, email: e.target.value})}
                              required/>

                            <input type="password"
                             name="senha"
                              id={styles.senha}
                              placeholder="Sua senha"
                              onChange={(e) => 
                              setForm({...form, password: e.target.value})}
                              required/>
                           

                        </form>
                       
                        <nav >
                        <Link  className={styles.botao} to='/homeinst'>Entrar</Link>
                        </nav>
                        
                      </div>

                      <section className={styles.links}>

                        <Link to='/recuperarsenha' id={styles.link}>Esqueci minha senha</Link>
                        <Link to='/cadastro' id={styles.link}>Inscreva-se</Link>

                      </section>

                     

            
            
         

        </div>

       
    )
}
export default Login