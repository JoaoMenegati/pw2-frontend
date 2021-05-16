import './css/bootstrap.min.css';
import './css/form-validation.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

function Cadastro() {
  return (
    <div className="Cadastro">
        <div className="container">
        <a href="../index.html" className="btn btn-primary btn-lg btn-block">Inicio</a>
        </div>
        <hr className="mb-4"/>

        <div className="container">
        <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Cadastro</h4>
            <form className="needs-validation" novalidate>
            <div className="row">
                <div className="col-md-6 mb-3">
                <label for="firstName">Nome</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                    E obrigatório informar um nome válido.
                </div>
                </div>
                <div className="col-md-6 mb-3">
                <label for="lastName">Sobrenome</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                    E obrigatório informar um sobrenome válido.
                </div>
                </div>
            </div>
            <div className="mb-3">
                <label for="username">Nome de usuário</label>
                <div className="input-group">
                <input type="text" className="form-control" id="username" placeholder="Nome de usuário" required/>
                <div className="invalid-feedback" >
                    O usuário e obrigatório.
                </div>
                </div>
            </div>
            <div className="mb-3">
                <label for="password">Senha</label>
                <div className="input-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Sua Senha" required/>
                <div className="invalid-feedback" >
                    A senha é obrigatória.
                </div>
                </div>
            </div>
            <div className="mb-3">
                <label for="email">Email <span className="text-muted">(Opicional)</span></label>
                <input type="email" className="form-control" id="email" placeholder="exemplo@exemplo.com"/>
                <div className="invalid-feedback">
                Por favor entre com um Email válido.
                </div>
            </div>
            <hr className="mb-4"/>
            <button className="btn btn-primary btn-lg btn-block" type="submit">Cadastrar</button>
            </form>
        </div>
        </div>
    </div>
  );
}

export default Cadastro;
