import React, { useState, useEffect } from "react";
import './css/bootstrap.min.css';
import './css/form-validation.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import api from './Api';

class Cadastro extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          user: {
            login: props.usuario,
            password: props.senha,
            name: props.name,
            surname: props.surname
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

    handleNomeChanged(event) {
        var user  = this.state.user;
        user.name = event.target.value;

        this.setState({ user: user });
    }

    handleSobreNomeChanged(event) {
        var user     = this.state.user;
        user.surname = event.target.value;

        this.setState({ user: user });
    }

    handleButtonClicked() {
        console.log(this.state.user);

        api.post('/user/signup', this.state.user).then(response => {
            console.log(response.status);
            console.log(response.message);
        })
    
    }

    render(){
    return (
    <div className="Cadastro">
        <div className="container">
            <Link to="/">
                <button className="btn btn-lg btn-primary btn-block">Home</button>
            </Link>
        </div>

        <hr className="mb-4"/>
        <div className="container">
        <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Cadastro</h4>
            <form className="needs-validation" novalidate>
            <div className="row">
                <div className="col-md-6 mb-3">
                <label>Nome</label>
                <input type="text" className="form-control" id="name" placeholder="" value="" required value={this.state.user.name} onChange={this.handleNomeChanged.bind(this)}/>
                <div className="invalid-feedback">
                    E obrigatório informar um nome válido.
                </div>
                </div>
                <div className="col-md-6 mb-3">
                <label>Sobrenome</label>
                <input type="text" className="form-control" id="surname" placeholder="" value="" required value={this.state.user.surname} onChange={this.handleSobreNomeChanged.bind(this)}/>
                <div className="invalid-feedback">
                    E obrigatório informar um sobrenome válido.
                </div>
                </div>
            </div>
            <div className="mb-3">
                <label>Nome de usuário</label>
                <div className="input-group">
                <input type="text" className="form-control" id="user" placeholder="Nome de usuário" required value={this.state.user.login} onChange={this.handleUsuarioChanged.bind(this)}/>
                <div className="invalid-feedback" >
                    O usuário e obrigatório.
                </div>
                </div>
            </div>
            <div className="mb-3">
                <label>Senha</label>
                <div className="input-group">
                <input type="password" id="password" className="form-control" placeholder="Sua Senha" required value={this.state.user.password} onChange={this.handleSenhaChanged.bind(this)}/>
                <div className="invalid-feedback" >
                    A senha é obrigatória.
                </div>
                </div>
            </div>
            <hr className="mb-4"/>
            <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.handleButtonClicked.bind(this)}>Cadastrar</button>
            </form>
        </div>
        </div>
    </div>
  );
}}

export default Cadastro;
