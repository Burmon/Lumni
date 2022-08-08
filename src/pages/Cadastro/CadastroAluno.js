import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import  AuthConfig  from '../../Auth/Config';
import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './CadastroAluno.module.css'
import logo from "../../imgs/logo.png"
import Modal from '../../components/Modal/Modal';
import { IoIosArrowRoundBack } from "react-icons/io";

 const CadastroAluno = withRouter((props)=>{

   

    const { history } = props;
    const cadastroFunc = useCallback(
        async (event) => {
            event.preventDefault();

            const { nome, email, senha } = event.target.elements;
            try{
                await AuthConfig
                    .auth()
                    .createUserWithNameEmailAndPassword(email.value, senha.value, nome.value);

                    history.push('/homealuno');
            } catch(error) {
                console.log(error);
            }
        
            
        },
        [history],
    );

     const [openModal, setOpenModal] = useState(false);

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
                        <h2>Cadastro</h2>
                        <h3>Estudante</h3>

                    </div>

                    <div className={styles.input_cad} onSubmit={cadastroFunc}>
        
                        <form className={styles.form_cad} onSubmit={cadastroFunc}>
                            <input type="name" name="nome" id={styles.nome} placeholder="Seu nome"></input>
                            <input type="email" name="email" id={styles.email} placeholder="Seu e-mail" required/>
                            <input type="password" name="senha" id={styles.senha} placeholder="Sua senha" required/>
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
);

export default CadastroAluno