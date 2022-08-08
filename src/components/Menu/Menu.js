import { Container } from './MenuStyle';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';
import {  Link } from "react-router-dom";
import  authConfig  from '../../Auth/Config';

export function Menu({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={50} onClick={() => setMenuIsVisible(false) } className="fechar"/>
      <nav>


        <Link to='/homealuno' className="linkmenu">Home</Link>

        <Link to='/Nossotime' className="linkmenu">NossoTime</Link>
        
        <Link onClick={() => authConfig.auth().signOut()} className="linkmenu">Sair</Link>


      </nav>
    </Container>
  )
}



