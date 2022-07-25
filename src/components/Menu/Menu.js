import { Container } from './Menu.module';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';

export function Menu({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={50} onClick={() => setMenuIsVisible(false) } className="fechar"/>
      <nav>
        <a href="#">Home</a>
        <a href="#">Nosso time</a>
        <a href="#">Sair</a>
      </nav>
    </Container>
  )
}



