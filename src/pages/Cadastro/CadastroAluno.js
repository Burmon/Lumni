import React, { useState } from "react";
import {register} from '../../components/Autenticação/auth';
import styles from './CadastroAluno.module.css';
import logo from "../../imgs/logo.png";
import Modal from '../../components/Modal/Modal';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";

function CadastroAluno(){

    const [form,setForm] = useState({
        email:'',
        password:''
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await register(form);
  
    }

    const [openModal, setOpenModal] = useState(false);
    
    return(


        <div>

          
     
            
            <body>

                <main>

                    <div className={styles.logo}>

                       <img src={logo} alt="Logo"/>
                        <h1>LUMNI</h1>
                        <h2>Cadastro</h2>
                        <h3>Estudante</h3>

                    </div>

                    <div className={styles.input_cad}>
        
                        <form className={styles.form_cad} onSubmit={handleSubmit}>
                            <input type="name" name="nome" id={styles.nome} placeholder="Seu nome"></input>

                            <input type="email" 
                            name="email" id={styles.email} 
                            placeholder="Seu e-mail" required 
                            onChange={(e) => setForm({...form, email: e.target.value})}/>

                            
                            <input type="password"
                             name="senha" id={styles.senha}
                              placeholder="Sua senha" required
                              onChange={(e) => setForm({...form, password: e.target.value})}
                              />
                            <button className={styles.botao}
                             onClick={() => {
                                setOpenModal(true);
                                }}
                                >
                                Cadastrar
                            </button>
                            {openModal && <Modal closeModal={setOpenModal} />}
                            <Link className={styles.voltar} to='/cadastro'><IoIosArrowRoundBack/></Link>
                            

                        </form>


            
                      </div>


                     

                 </main>
               
            </body>



        </div>
    )
}

export default CadastroAluno