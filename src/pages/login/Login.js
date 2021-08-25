import React from "react";
import { useHistory } from "react-router";
import Cookies from "universal-cookie";
import { useForm } from "react-hook-form";
import { Button } from 'reactstrap';


import "../../css/bootstrap.min.css";
import "../../css/signin.css";

import api from "../../Api";
import { Link } from 'react-router-dom';


const cookies = new Cookies();

const Login = () => {
  const history = useHistory()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = values => {
    cookies.set("login", values.login, { path: "/" });

    api.post("/user/signin", values).then((response) => {
      if (response.status === 200) {
        if (values.login === "admin") {
          history.push("/inicioadm");
        } else {
          history.push("/inicio");
        }
      } else {
        alert("Usuário não cadastrado ou senha incorreta!");
      }
    }).catch(() => {
      alert("Usuário não cadastrado ou senha incorreta!");
    })
  };
  return (
    <div className="Login">
      <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="h3 mb-4 font-weight-normal">Login</h1>

        <input
          type="text"
          className="form-control mb-1"
          placeholder="Usuário"
          {...register("login", { required: true })}
        />
        {errors.login && <div className="formFieldInvalid">Campo obrigatório</div>}

        <div className="mb-4" />

        <input
          type="password"
          className="form-control"
          placeholder="Senha"
          {...register("password", { required: true })}
        />
        {errors.password && <div className="formFieldInvalid">Campo obrigatório</div>}

        <div className="mb-4" />

        <Button color="primary" size="lg" type="submit" block>Entrar</Button>

        <div className="mb-4" />
        <Link to="/cadastro">Não possui conta? cadastrar!</Link>
      </form>
    </div>
  );
};

export default Login;
