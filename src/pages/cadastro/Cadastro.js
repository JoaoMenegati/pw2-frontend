import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import "../../css/bootstrap.min.css";
import "../../css/form-validation.css";

import api from "../../Api";

const Cadastro = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    api
      .post("/user/signup", values)
      .then((response) => {
        if (response.status === 200) {
          history.push("/");
        } else {
          alert("Falha ao cadastrar usuário!");
        }
      })
      .catch(() => {
        alert("Falha ao cadastrar usuário!");
      });
  };

  return (
    <div className="Cadastro">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Início</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Cadastro</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <hr className="mb-4" />
      <div className="container">
        <div className="col-12 order-md-1">
          <h4 className="mb-3">Cadastro</h4>

          <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Nome</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <div className="formFieldInvalid">O Nome e obrigatório.</div>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label>Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("surname", { required: true })}
                />
                {errors.surname && (
                  <div className="formFieldInvalid">
                    O Sobrenome e obrigatório.
                  </div>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label>Nome de usuário</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  {...register("login", { required: true })}
                />
              </div>
              {errors.login && (
                <div className="formFieldInvalid">O usuário e obrigatório.</div>
              )}
            </div>
            <div className="mb-3">
              <label>Senha</label>
              <div className="input-group">
                <input
                  type="password"
                  className="form-control"
                  {...register("password", { required: true })}
                />
              </div>

              {errors.password && (
                <div className="formFieldInvalid">A senha é obrigatória.</div>
              )}
            </div>

            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
