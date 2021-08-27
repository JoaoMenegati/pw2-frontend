import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import "../../css/bootstrap.min.css";
import "../../css/editarquestoes.css";

import api from "../../Api";

const EditarQuestoes = () => {
  const [currentQuestion, setCurrentQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    api.get("/question/findAll")
      .then(response => response.data)
      .then(data => data.results)
      .then(results => {
        setCurrentQuestions(results[id]);
        setQuestions(results);
      })
  }, []);

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    const { incorrectAnswer1, incorrectAnswer2, incorrectAnswer3, incorrectAnswer4, ...data } = values;
    const formValues = { ...data, incorrectAnswers: [incorrectAnswer1, incorrectAnswer2, incorrectAnswer3, incorrectAnswer4] };
    api
      .post("/question/updateQuestions", formValues)
      .then((response) => {
        if (response.status === 200) {
          history.go(-1);
        } else {
          alert("Falha ao atualizar questão!");
        }
      })
      .catch(() => {
        alert("Falha ao atualizar questão!");
      });
  };

  return questions.length > 0 ? (
    <div className="Cadastro">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/bancoquestoes">Voltar</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Edição de Questões</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <hr className="mb-4" />
      <div className="container-xl">
        <div className="col-12 order-md-1">
          <h4 className="mb-3">Questão</h4>

          <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
              <label>Questão</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  {...register("question", { required: true })}
                  defaultValue={currentQuestion.question}
                />
              </div>
              {errors.question && (
                <div className="formFieldInvalid">A questão é obrigatória.</div>
              )}
            </div>
            <div className="row mb-3">
              <label>Questão Correta</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  {...register("correctAnswer", { required: true })}
                  defaultValue={currentQuestion.correctAnswer}
                />
              </div>
              {errors.correctAnswer && (
                <div className="formFieldInvalid">
                  A questão correta e obrigatória.
                </div>
              )}
            </div>
            <div className="row mb-3">
              <label>Questão incorreta 1</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  {...register("incorrectAnswer1", { required: true })}
                  defaultValue={currentQuestion.incorrectAnswers[0]}
                />
              </div>
              {errors.incorrectAnswer1 && (
                <div className="formFieldInvalid">A questão incorreta e obrigatória.</div>
              )}
            </div>
            <div className="row mb-3">
              <label>Questão incorreta 2</label>
              <div className="input-group">
                <input
                  className="form-control"
                  {...register("incorrectAnswer2", { required: true })}
                  defaultValue={currentQuestion.incorrectAnswers[1]}
                />
              </div>

              {errors.incorrectAnswer2 && (
                <div className="formFieldInvalid">A questão incorreta e obrigatória.</div>
              )}
            </div>
            <div className="row mb-3">
              <label>Questão incorreta 3</label>
              <div className="input-group">
                <input
                  className="form-control"
                  {...register("incorrectAnswer3", { required: true })}
                  defaultValue={currentQuestion.incorrectAnswers[2]}
                />
              </div>

              {errors.incorrectAnswer3 && (
                <div className="formFieldInvalid">A questão incorreta e obrigatória.</div>
              )}
            </div>
            <div className="row mb-3">
              <label>Questão incorreta 4</label>
              <div className="input-group">
                <input
                  className="form-control"
                  {...register("incorrectAnswer4", { required: true })}
                  defaultValue={currentQuestion.incorrectAnswers[3]}
                  {...console.log(currentQuestion.incorrectAnswers)}
                />
              </div>

              {errors.incorrectAnswer4 && (
                <div className="formFieldInvalid">A questão incorreta e obrigatória.</div>
              )}
            </div>
            <div className="row mb-3">
              <label>Dificuldade</label>
              <div className="input-group">
                <select
                  className="form-control chosen-select"
                  data-placeholder={currentQuestion.dificulty}
                  {...register("dificulty", { required: true })}
                  defaultValue={currentQuestion.dificulty}
                >
                  <option value="1">Fácil</option>
                  <option value="2">Médio</option>
                  <option value="3">Díficil</option>
                </select>
              </div>

              {errors.dificulty && (
                <div className="formFieldInvalid">A dificuldade da questão e obrigatória.</div>
              )}
            </div>

            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Atualizar
            </button>
          </form>
        </div>
      </div>
    </div>
  ) :
    (
      <h2 className="text-2xl text-white font-bold">Carregando Questões...</h2>
    );
};

export default EditarQuestoes;
