import logo from './img/virus.png'
import './css/bootstrap.min.css';
import './css/signin.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import Cadastro from './Cadastro';

function App() {
  return (
    <div className="App">
      <form className="form-signin">
        <img className="mb-4" src={logo} alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
        <label for="inputEmail" className="sr-only">Email</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="exemplo@email.com" required autofocus />
        <label for="inputPassword" className="sr-only">Senha</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Sua Senha" required />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Manter Login
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
        <Router>
          <Link to="/Cadastro/">Cadastre-se</Link>
          <Switch>
            <Redirect from='/App/' to="/Cadastro/"/>
          </Switch>
        </Router>
        <p className="mt-5 mb-3 text-muted">&copy; 2021-2021</p>
      </form>
    </div>
  );
}

export default App;
