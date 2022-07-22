import { Routes, Route, Link } from "react-router-dom";
import Login from '../src/pages/Login/Login'
import Home from '../src/pages/Home/Home'
// import Menu from "../src/components/Menu"
import Cadastro from "../src/pages/Cadastro/Cadastro"
import CadastroAluno from "../src/pages/Cadastro/CadastroAluno"
import CadastroInstituto from "../src/pages/Cadastro/CadastroInstituto"


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroaluno" element={<CadastroAluno />} />
        <Route path="/cadastroinstituto" element={<CadastroInstituto />} />
      </Routes>
    </div>
  );
}



export default App;
