import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Modal.module.css'
import { IoClose } from 'react-icons/io5';

function ModalInst ({ closeModal }) {
return (
    <div className={styles.modal_background}>
        <div className={styles.modal_container}>
            <div className={styles.modal_titulo}>
                <h1>Você tem certeza que quer se cadastrar?</h1>
            </div>
            <div className={styles.modal_corpo}>
                <p>Na próxima página você irá acessar seu portal</p>
            </div>
            <div className={styles.modal_rodape}>
                <Link className={styles.botao} to="/homeinst" >Continuar</Link>
                < IoClose className={styles.fechar}  onClick={() => closeModal(false)}/>
            </div>
    </div>
</div>
) 

}

export default ModalInst;