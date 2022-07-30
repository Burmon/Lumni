import React from 'react'
import { Link } from 'react-router-dom'

function Modal ({ closeModal }) {
return (
    <div className="modalBackground">
        <div className="modalContainer">
            <button onClick={() => closeModal(false)}> X </button>
            <div className="title">
                <h1>Você tem certeza que quer se cadastrar?</h1>
            </div>
            <div className="body">
                <p>Na próxima página você irá acessar seu portal</p>
            </div>
            <div className="footer">
                <button onClick={() => closeModal(false)}>Cancelar</button>
                <button><Link to="/homealuno" >Continuar</Link></button>
            </div>
    </div>
</div>
) 

}

export default Modal;
