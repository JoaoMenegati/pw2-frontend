import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
import Quiz from "../pages/jogo/Jogo";
import Inicio from "../pages/inicio/Inicio";
import InicioAdm from "../pages/inicioadm/InicioAdm";
import Ranking from "../pages/ranking/Ranking";
import BancoQuestoes from "../pages/bancoquestoes/BancoQuestoes";
import EditarQuestoes from "../pages/editarquestoes/EditarQuestoes";

import '../css/index.css';

function App() {
  return (
    <div className="bg-overlay game-content">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/quiz" exact component={Quiz} />
          <Route path="/cadastro" exact component={Cadastro} />
          <Route path="/inicio" exact component={Inicio} />
          <Route path="/inicioadm" exact component={InicioAdm} />
          <Route path="/ranking" exact component={Ranking} />
          <Route path="/bancoquestoes" exact component={BancoQuestoes} />
          <Route path="/editarquestoes/:id" exact component={EditarQuestoes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
