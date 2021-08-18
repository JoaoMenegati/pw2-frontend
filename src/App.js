import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Quiz from './Fase1';
import Inicio from './Inicio';
import InicioAdm from './InicioAdm';
import Ranking from './Ranking';
import BancoQuestoes from './pages/bancoquestoes/BancoQuestoes';
import EditarQuestoes from './pages/editarquestoes/EditarQuestoes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/quiz" exact component={Quiz}/>
        <Route path="/cadastro" exact component={Cadastro}/>
        <Route path="/inicio" exact component={Inicio}/>
        <Route path="/inicioadm" exact component={InicioAdm}/>
        <Route path="/ranking" exact component={Ranking}/>
        <Route path="/bancoquestoes" exact component={BancoQuestoes}/>
        <Route path="/editarquestoes/:id" exact component={EditarQuestoes}/>
      </Switch>
    </Router>
  );
}

export default App;