import React, { useState, useEffect } from "react";
import { Questionario } from './components';
import Niveis from './Niveis';
import api from './Api';
import { Redirect } from "react-router";

const API_URL = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';

function Fase1() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [dificuldade, setDificuldade] = useState(0);
  const [jogando, setJogando] = useState(false);

  
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
  }, []);

  const handleDificuldade = (nivel) =>{
    setDificuldade(nivel); 
    setJogando(true);
  }

  const handleAnswer = (answer) => {  
    if(!showAnswers){
      if(answer === questions[currentIndex].correctAnswer){
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

  return questions.length > 0 && dificuldade > 0 ? (
      <div className="container">
        {currentIndex >= questions.length ? (
          <h1 className="text-3xl text-white font-bold">Sua pontuação e: {score}.</h1>
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
        handleDificuldade={handleDificuldade}/>
      ) : (
        <h2 className="text-2xl text-white font-bold">Carregando Questões...</h2>
      )
    );
}

export default Fase1;