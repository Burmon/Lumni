import { Routes, Route } from "react-router-dom";
import Login from '../src/pages/Login/Login';
import HomeInst from '../src/pages/Home/HomeInst';
import HomeAluno from '../src/pages/Home/HomeAluno';
import NossoTime from "./pages/NossoTime/NossoTime";
import Cadastro from "../src/pages/Cadastro/Cadastro";
import CadastroAluno from "../src/pages/Cadastro/CadastroAluno";
import CadastroInstituto from "../src/pages/Cadastro/CadastroInstituto";
import RecuperarSenha from "../src/pages/RecuperarSenha/RecuperarSenha";




function App() {

  

  return (  
    <div className="App">
   
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/homeinst" element={<HomeInst />} />
          <Route path="/homealuno" element={<HomeAluno />} />
          <Route path="/nossotime" element={<NossoTime />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route exact path="/cadastroaluno" element={<CadastroAluno />} />
          <Route exact path="/cadastroinstituto" element={<CadastroInstituto />} />
          <Route path="/recuperarsenha" element={<RecuperarSenha />} />
          </Routes>
      
    </div>
  );
}



export default App;