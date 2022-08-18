import React, { useState } from "react";
import {register} from '../../components/Autenticação/auth'
import styles from './CadastroInstituto.module.css'
import logo from "../../imgs/logo.png"
import ModalInst from "../../components/Modal/ModalInst";
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import InputCnpj from "../../components/Mascara/MaskCnpj"
import {db} from "../../components/Autenticação/firebase"

function CadastroInstituto(){

    const [form,setForm] = useState({
        email:'',
        password:'',
        cnpj:'',
        name:''
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await register(form);
  
    }
    
    const [openModal, setOpenModal] = useState(false);

    function cnpjHandler() {}
  
    
    async function BancoUsuarioInst() {
      const { email, password, name, cnpj } = form
      const dbUsuarioInst = await db.collection("usuarios").doc();
      dbUsuarioInst.set({ email, password, name, cnpj });
     
    }




    
    return(
        <div className={styles.cad_inst_container}>
            <title>Lumni | Cadastro</title>
           
              <div className={styles.container}>
                    <div className={styles.logo}>

                       <img src={logo} alt="Logo"/>
                        <h1>LUMNI</h1>
                        <h2>Cadastro</h2>
                        <h3>Instituto</h3>

                    </div>

                    <div className={styles.input_cad_inst}>
        
                        <form className={styles.form_cad_inst} onSubmit={handleSubmit}>

                            <InputCnpj id={styles.nome}
                            onChange={(e)=>{
                                cnpjHandler()
                                setForm({ ...form, cnpj: e.target.value })
                              }} 
                            />

                            <input type="name"
                             name="nome" id={styles.nome}
                            placeholder="Nome da instituição"
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                              }
                            />

                            <input type="email"
                             name="email"
                             id={styles.email}
                             placeholder="E-mail"
                             onChange={(e) => setForm({...form, email: e.target.value})}
                             required/>

                            <input type="password"
                             name="senha" id={styles.senha}
                             placeholder="Senha" 
                             onChange={(e) => setForm({...form, password: e.target.value})}
                             required/>

                            <button 
                              to='/homeinst'
                              onClick={() => {
                                setOpenModal(true);
                                BancoUsuarioInst();
                                }}
                              >Cadastrar
                             
                              </button>
                              {openModal && <ModalInst closeModal={setOpenModal} />}
                            <Link className={styles.voltar} to='/cadastro'><IoIosArrowRoundBack/></Link>
                        </form>


            
                      </div>


                     
                      </div>


        </div>
    )
}

export default CadastroInstituto