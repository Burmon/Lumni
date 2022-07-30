import { useState } from "react";
import styles from './CadastroAluno.module.css'
import logo from "../../imgs/logo.png"
import Modal from '../../components/Modal';

function CadastroAluno(){

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

                    <div className={styles.input_cad}>
        
                        <form className={styles.form_cad}>
                            <input type="name" name="nome" id={styles.nome} placeholder="Seu nome"></input>
                            <input type="email" name="email" id={styles.email} placeholder="Seu e-mail" required/>
                            <input type="password" name="senha" id={styles.senha} placeholder="Sua senha" required/>
                            <button
                             className="openModalBtn"
                             onClick={() => {
                                setOpenModal(true);
                                }}
                                >
                                Cadastrar
                            </button>
                            {openModal && <Modal closeModal={setOpenModal} />}
                            
                            

                        </form>


            
                      </div>


                     

                 </main>
               
            </body>



        </div>
    )
}

export default CadastroAluno