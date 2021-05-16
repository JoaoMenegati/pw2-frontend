// import logo from './img/virus.png'
import './css/bootstrap.min.css';
import './css/signin.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      <form className="form-signin">
        <h1 className="h3 mb-4 font-weight-normal">Login</h1>
        <label for="inputEmail">Email</label>
        <input type="text" id="inputEmail" className="form-control mb-4" placeholder="exemplo@email.com" required autofocus />
        <label for="inputPassword">Senha</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Sua Senha" required />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Manter Login
          </label>
        </div>
        <Link to="/quiz">
          <button className="mr-4 btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
        </Link>
        <Link to="/cadastro">
          <button className="btn btn-lg btn-primary btn-block">Cadastrar-se</button>
        </Link>

        <p className="mt-5 mb-3 text-muted">&copy; 2021-2021</p>
      </form>
    </div>
  );
}

export default Login;
