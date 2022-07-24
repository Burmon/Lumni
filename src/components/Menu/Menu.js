import {Container} from "./Menu.module"
import {IoClose} from 'react-icons/io5'
import { Link } from "react-router-dom"


 function Menu({menuIsVisible,setMenuIsVisible}){
    return(
        <Container>
            <IoClose size={45}/>
            <nav>
                <Link ><p>Home</p></Link>
                <Link ><p>Nosso time</p></Link>
                <Link  to={'/'}><p>Sair</p></Link>

            </nav>


        </Container>
    )
}

export default Menu



