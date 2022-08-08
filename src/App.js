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
    <div>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Logar} />
          <Route path="/homeinst" component={HomeInst} />
          <Route path="/homealuno" component={HomeAluno} />
          <Route path="/nossotime" component={NossoTime} />
          <Route path="/cadastro" component={Cadastro} />
          <RotaPrivada path="/cadastroaluno" component={CadastroAluno} />
          <Route path="/cadastroinstituto" component={CadastroInstituto} />
          <Route path="/recuperarsenha" component={RecuperarSenha} />
        </Switch>
      </AuthProvider>
    </div>
  );
}



export default App;
