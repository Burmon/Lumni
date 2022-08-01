import styles from './CadastroInstituto.module.css'
import logo from "../../imgs/logo.png"
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
function CadastroInstituto(){
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
                        <h3>Instituto</h3>

                    </div>

                    <div className={styles.input_cad_inst}>
        
                        <form className={styles.form_cad_inst}>
                            <input type="name" name="nome" id={styles.nome} placeholder="Nome da instituição"></input>
                            <input type="email" name="email" id={styles.email} placeholder="Seu e-mail" required/>
                            <input type="password" name="senha" id={styles.senha} placeholder="Sua senha" required/>
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