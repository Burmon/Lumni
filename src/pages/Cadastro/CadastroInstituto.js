import React, { useState } from "react";
import {register} from '../../components/Autenticação/auth'
import styles from './CadastroInstituto.module.css'
import logo from "../../imgs/logo.png"
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
function CadastroInstituto(){

    const [form,setForm] = useState({
        email:'',
        password:''
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await register(form);
  
    }
    return(
        <div>
            <title>Lumni | Cadastro</title>
           
            <body>

                <main>

                    <div className={styles.logo}>

                       <img src={logo} alt="Logo"/>
                        <h1>LUMNI</h1>
                        <h2>Cadastro</h2>
                        <h3>Instituto</h3>

                    </div>

                    <div className={styles.input_cad_inst}>
        
                        <form className={styles.form_cad_inst} onSubmit={handleSubmit}>
                            <input type="name"
                             name="nome" id={styles.nome}
                            placeholder="Nome da instituição"
                            />

                            <input type="email"
                             name="email"
                             id={styles.email}
                             placeholder="Seu e-mail"
                             onChange={(e) => setForm({...form, email: e.target.value})}
                             required/>

                            <input type="password"
                             name="senha" id={styles.senha}
                             placeholder="Sua senha" 
                             onChange={(e) => setForm({...form, password: e.target.value})}
                             required/>

                            <Link id={styles.botao_cad_inst} to='/homeinst'>Cadastrar</Link>

                            <Link className={styles.voltar} to='/cadastro'><IoIosArrowRoundBack/></Link>
                        </form>


            
                      </div>


                     

                 </main>
               
            </body>



        </div>
    )
}

export default CadastroInstituto