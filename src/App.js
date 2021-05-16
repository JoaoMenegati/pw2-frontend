import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import Login from './Login';
import Quiz from './Fase1';
import Cadastro from './Cadastro';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login}/>
      <Route path="/quiz" exact component={Quiz}/>
      <Route path="/cadastro" exact component={Cadastro}/>
    </Router>
  );
}

export default App;