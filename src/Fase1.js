import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { Questionario } from './components';
import Niveis from './Niveis';
import api from './Api';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const API_URL = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';

function Fase1() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [dificuldade, setDificuldade] = useState(0);
  const [nivel, setNivel] = useState(0);
  const [jogando, setJogando] = useState(false);
  const login = cookies.get('login');


  useEffect(() => {
    api.get("/question/find")
      .then(response => response.data)
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correctAnswer,
            ...question.incorrectAnswers.slice(0, dificuldade)
          ].sort(() => Math.random() - 0.5)
        }))

        setQuestions(questions);
        // setJogando(false);
      })
  }, [dificuldade]);

  const handleDificuldade = (nivelEscolhido) => {
    setDificuldade(nivelEscolhido);
    setJogando(true);
    setNivel(nivelEscolhido - 1)
  }

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correctAnswer) {
        //Aumenta a pontuação
        setScore(score + 1);
      }
    }

    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
  }

  const postPoints = () => {
    api.post("/point/update", { login: login, points: score * nivel }).then(response => {
      console.log(response.status);
    })
  }

  return questions.length > 0 && dificuldade > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
        <div className="container">
          <h1 className="text-3xl text-white font-bold mt-4">Sua pontuação e: {score * nivel}.</h1>
          <Link to="/Inicio">
            <button className="mr-4 btn btn-lg btn-primary btn-block">Inicio</button>
          </Link>
          <Link to="/ranking">
            <button className="btn btn-lg btn-primary btn-block">Ranking</button>
          </Link>
          {postPoints()}
        </div>
      ) : (
        <Questionario data={questions[currentIndex]}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
          handleAnswer={handleAnswer} />
      )}
    </div>
  ) : (
    !jogando ? (
      <Niveis
        handleDificuldade={handleDificuldade} />
    ) : (
      <h2 className="text-2xl text-white font-bold">Carregando Questões...</h2>
    )
  );
}

export default Fase1;