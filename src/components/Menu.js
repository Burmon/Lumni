import styles from "./Menu.module.css"

function Menu(){
    return(
        <div className="container">
            <div className={styles.menu}>
                <button onClick={() =>{}}>
                    <span>Menu</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="Menu"></img>
                </button>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Calendário</a></li>
                        <li><a href="#">Mural</a></li>
                        <li><a href="#">Conheça a equipe</a></li>
                        <li><a href="#">Sair</a></li>
                     
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Menu