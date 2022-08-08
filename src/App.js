import { Route, Switch } from "react-router-dom";
import  AuthProvider  from "./Auth/AuthContext";
import { RotaPrivada } from "./Auth/RotaPrivada";
import Logar from '../src/pages/Login/Login'
import HomeInst from '../src/pages/Home/HomeInst'
import HomeAluno from '../src/pages/Home/HomeAluno'
import NossoTime from "./pages/NossoTime/NossoTime";
import Cadastro from "../src/pages/Cadastro/Cadastro"
import CadastroInstituto from "../src/pages/Cadastro/CadastroInstituto"
import RecuperarSenha from "../src/pages/RecuperarSenha/RecuperarSenha";
import CadastroAluno from "../src/pages/Cadastro/CadastroAluno";




function App() {

  

  return (
    <div className="App">
      <AuthProvider>
      
         <Switch>
          <Route exact path="/" element={<Logar />} />
          <Route exact path="/homeinst" element={<HomeInst />} />
          <Route exact path="/homealuno" element={<HomeAluno />} />
          <Route exact path="/nossotime" element={<NossoTime />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <RotaPrivada path="/cadastroaluno" element={<CadastroAluno />} />
          <Route exact path="/cadastroinstituto" element={<CadastroInstituto />} />
          <Route exact path="/recuperarsenha" element={<RecuperarSenha />} />
          </Switch>
      
      </AuthProvider>
    </div>
  );
}



export default App;
