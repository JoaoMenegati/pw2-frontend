import React from "react";

const Button = ({ answer, className }) => (
  <button
    className={`bg-white p-4 text-blue-800 
        font-semibold rounded shadow ${className}`}
  >
    {answer}
  </button>
);

const getFeedbackSuccess = () => {
  const list = [
    "uhuull... Parabéns você acertou ;)",
    "Nossa... você está mandando bem ;)",
    "Essa estava dificil... Arrassou ;)",
    "Parabéns acertou de novo ;)",
  ];

  return list[Math.floor(Math.random() * list.length)];
};
const getFeedbackFailure = () => {
  const list = [
    "Ops... não foi desta vez, continue firme :(",
    "Poxa... essa foi por pouco :(",
    "Não desista, você está se saindo bem :(",
    "Ops, alternativa errada, foi por pouco :(",
    "A louco ERRROOU :(",
    "Quem nunca errou, continue firme :(",
  ];

  return list[Math.floor(Math.random() * list.length)];
};

const Questionario = ({
  showAnswers,
  handleAnswer,
  handleNextQuestion,
  data: { question, correctAnswer, answers },
  selectedAnswer,
}) => {
  const hasCorrect = selectedAnswer === correctAnswer;
  const textFeedback = hasCorrect ? getFeedbackSuccess() : getFeedbackFailure();

  return (
    <div className="flex flex-col">
      <div className="quiz-title">
        <span
          dangerouslySetInnerHTML={{
            __html: question,
          }}
        />
      </div>
      <div className="quiz-grid grid grid-cols-2 gap-6 mt-6">
        {answers.map((answer, idx) => {
          const textColor = showAnswers
            ? answer === correctAnswer
              ? "text-green"
              : "text-red"
            : "";

          return (
            <button
              key={idx}
              className={`${textColor}`}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{
                __html: answer,
              }}
            />
          );
        })}
      </div>

      {showAnswers && (
        <div className="quiz-footer">
          <div className="quiz-footer-info">
            <span class="material-icons quiz-icon">
              {hasCorrect ? "emoji_emotions" : "mood_bad"}
            </span>
            {textFeedback}
          </div>
          <button
            onClick={handleNextQuestion}
            className={`ml-auto bg-blue-700 p-4 text-white font-semibold rounded shadow mt-6`}
          >
            Próxima Questão
          </button>
        </div>
      )}
    </div>
  );
};

export default Questionario;
