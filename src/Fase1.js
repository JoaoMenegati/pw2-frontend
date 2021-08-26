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
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [dificuldade, setDificuldade] = useState(0);
  const [nivel, setNivel] = useState(0);
  const [jogando, setJogando] = useState(false);
  const login = cookies.get('login');
  useEffect(() => {
    api.get("/question/find", {params: {dificulty: (dificuldade - 1)}})
      .then(response => response.data)
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correctAnswer,
            ...question.incorrectAnswers.slice(0, dificuldade),
            question.dificulty
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

      setSelectedAnswer(answer);
    }
    
    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
    setSelectedAnswer(null);
  }

  const handleNewGame = () => {
    setJogando(false);
    setCurrentIndex(0);
    setShowAnswers(false);
    setSelectedAnswer(null);
    setQuestions([]);
    setScore(0);
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
          <div className="mt-10" />
          <div className="card-grid col3">

            <div className="card-container" onClick={handleNewGame}>
              <span className="card-icon material-icons">play_arrow</span>
              <span className="card-title">Jogar</span>
            </div>

            <Link to="/inicio">
              <div className="card-container">
                <span className="card-icon material-icons">weekend</span>
                <span className="card-title">Inicio</span>
              </div>
            </Link>

            <Link to="/ranking">
              <div className="card-container">
                <span className="card-icon material-icons">timeline</span>
                <span className="card-title">Ranking</span>
              </div>
            </Link>
          </div>

          {postPoints()}
        </div>
      ) : (
        <Questionario data={questions[currentIndex]}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
          handleAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
          />
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