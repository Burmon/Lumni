
import { Container } from "./Header.module";
import {RiMenuLine } from 'react-icons/ri';

export function Header({ setMenuIsVisible }) {
  return (
    <Container>
     

      <section>
      
        <RiMenuLine size={35} onClick={() => setMenuIsVisible(true)} className="mobile"/>
      </section>
    </Container>
  )
}