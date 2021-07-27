import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './pages/login/Login';
import Quiz from './Fase1';
import Cadastro from './Cadastro';
import Inicio from './Inicio';
import InicioAdm from './InicioAdm';
import Ranking from './Ranking';

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
      </Switch>
    </Router>
  );
}

export default App;