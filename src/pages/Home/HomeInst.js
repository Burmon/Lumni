import styles from "./HomeInst.module.css";
import persona from "../../imgs/persona.jpg";
import logo from "../../imgs/logo.png";
import { useState, useEffect } from "react";
import { Menu } from "../../components/Menu/Menu";
import { Header } from "../../components/Header/Header";
import { db } from "../../components/Autenticação/firebase";
import { IoIosAdd } from "react-icons/io";
import { IoClose } from 'react-icons/io5';

function HomeInst() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const [titulo, setTitulo] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [mural, setMural] = useState([]);
  const [nome, setNome] = useState("")

  async function submitHandler() {
    setLoading(true);
    const date = new Date();
    const mural = await db.collection("mural").doc();
    mural.set({ titulo, body });
    setTitulo("");
    setBody("");
    setLoading(false);
  }

  async function fetchMural() {
    const list = [];
    const muralFirebase = await db.collection("mural").get();
    const muralData = muralFirebase.docs;
    muralData.map((mural) => {
      const data = mural.data();
      list.push(data);
    });
   setMural(list);
  }


  

  useEffect(() => {
    fetchMural();
  }, []);



  console.log(mural)

  

  return (
    <div >
   
      <title>Lumni | Perfil</title>
      <Header setMenuIsVisible={setMenuIsVisible} />
      <Menu menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />

      <div className={styles.big_container}>
    
      <div className={styles.container}>
    
          <div className={styles.perfil_container}>
            <img src={persona} alt="persona" />
            <h1>Bem vindo!</h1>
            <h2>Instituto</h2>
          </div>
        </div>
        <div>
            
          <div className={styles.form_mural}>
          <h3>Mural</h3>
            <input
              type="text"
              value={titulo}
              placeholder="Título"
              onChange={(e) => setTitulo(e.target.value)}
            />
            
            <textarea
              rows="3" 
              cols="33"
              value={body}
              placeholder="Sua informação"
              onChange={(e) => setBody(e.target.value)}
            />
            <IoIosAdd className={styles.botao_add} onClick={() => {
              submitHandler()
              fetchMural()

            }} disabled={loading}/>
             

            
            {mural.map((m, i) => <div className={styles.lista_mural} key={i}>
               
                <div className={styles.titulo}><span>{m.titulo}</span></div>
                <div className={styles.corpo}><span >{m.body}</span></div>
                <IoClose size={30} onClick={() => setMenuIsVisible(false) } className={styles.fechar_mural}/>
            </div>)}
        
          </div>

         
        </div>

     
      </div>
      <div className={styles.footer}>
          <img src={logo} alt="Logo rodapé" id={styles.img_footer} />
          <p>
            Produzido por <a>Guardiões Tech</a>
          </p>
        </div>
    </div>
    
  );
}

export default HomeInst;
