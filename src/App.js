import React, { useState, useEffect } from "react";
import { Questionario } from './components';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestions] = useState(undefined);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
        setCurrentQuestions(data.results[0]);
      })
  }, []);

  const handleAnswer = (answer) => {
    //verificar a questão
    
    //mostrar próxima questão

    //aumentar pontuação se acertar
  };

  return (questions.length > 0 ? (
    <div className="container">
      {currentQuestion && (
        <Questionario data={currentQuestion}
        handleAnswer={handleAnswer} />
      )}
    </div>
  ) : (
    <h2 className="text-2xl text-white font-bold">Carregando Questões...</h2>
  )
  );
}

export default App;
