import {Routes, Route } from "react-router-dom";
import Login from '../src/pages/Login/Login'
import HomeInst from '../src/pages/Home/HomeInst'
import HomeAluno from '../src/pages/Home/HomeAluno'
import Cadastro from "../src/pages/Cadastro/Cadastro"
import CadastroAluno from "../src/pages/Cadastro/CadastroAluno"
import CadastroInstituto from "../src/pages/Cadastro/CadastroInstituto"
import RecuperarSenha from "../src/pages/RecuperarSenha/RecuperarSenha";




function App() {

  

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Login />} />
    
          
        
          <Route path="/homeinst" element={<HomeInst />} />
          <Route path="/homealuno" element={<HomeAluno />} />
   
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroaluno" element={<CadastroAluno />} />
        <Route path="/cadastroinstituto" element={<CadastroInstituto />} />
        <Route path="/recuperarsenha" element={<RecuperarSenha />} />
      </Routes>
    </div>
  );
}



export default App;
