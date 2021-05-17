import React, { useState, useEffect } from "react";
import './css/bootstrap.min.css';
import './css/signin.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import api from './Api';
import Inicio from './Inicio';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        login: props.usuario,
        password: props.senha
      }
    }
  }

  handleUsuarioChanged(event) {
    var user   = this.state.user;
    user.login = event.target.value;

    this.setState({ user: user });
  }

  handleSenhaChanged(event) {
    var user      = this.state.user;
    user.password = event.target.value;

    this.setState({ user: user });
  }

  handleButtonClicked() {
    console.log(this.state.user);

    api.post('/user/signin', this.state.user).then(response => {
      if(response.status === "200"){

      }

      console.log(response.status);
      console.log(response.message);
    })
    
  }

  render() {
    return (
      <div className="Login">
        <form className="form-signin">
          <h1 className="h3 mb-4 font-weight-normal">Login</h1>
          <label>Usuário</label>
          <input type="text" id="user" className="form-control mb-4" placeholder="Seu usuário" required value={this.state.user.login} onChange={this.handleUsuarioChanged.bind(this)}/>
          <label>Senha</label>
          <input type="password" id="password" className="form-control" placeholder="Sua senha" required value={this.state.user.password} onChange={this.handleSenhaChanged.bind(this)}/>
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
