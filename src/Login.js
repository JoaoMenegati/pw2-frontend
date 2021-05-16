import React, { useState, useEffect } from "react";
import './css/bootstrap.min.css';
import './css/signin.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import api from './Api';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {
        usuario: props.usuario,
        senha: props.senha
      }
    }
  }

  handleUsuarioChanged(event) {
    var login     = this.state.login;
    login.usuario = event.target.value;

    this.setState({ login: login });
  }

  handleSenhaChanged(event) {
    var login   = this.state.login;
    login.senha = event.target.value;

    this.setState({ login: login });
  }

  handleButtonClicked() {
    console.log(this.state.login);

    api.post('/user/signin', this.state.login).then(response => {
      console.log(response);
    })
    
  }

  render() {
    return (
      <div className="Login">
        <form className="form-signin">
          <h1 className="h3 mb-4 font-weight-normal">Login</h1>
          <label>Usuário</label>
          <input type="text" id="usuario" className="form-control mb-4" placeholder="Seu usuário" required value={this.state.login.usuario} onChange={this.handleUsuarioChanged.bind(this)}/>
          <label>Senha</label>
          <input type="password" id="senha" className="form-control" placeholder="Sua senha" required value={this.state.login.senha} onChange={this.handleSenhaChanged.bind(this)}/>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Manter Login
            </label>
          </div>
          <Link to="/inicio">
            <button className="mr-4 btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleButtonClicked.bind(this)}>Entrar</button>
          </Link>
          <Link to="/cadastro">
            <button className="btn btn-lg btn-primary btn-block">Cadastrar-se</button>
          </Link>

          <p className="mt-5 mb-3 text-muted">&copy; 2021-2021</p>
        </form>
      </div>
    );
  }
}

export default Login;
