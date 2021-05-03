import React from "react";

const Button = ({ answer, className }) => (
    <button
        className={`bg-white p-4 text-blue-800 
        font-semibold rounded shadow ${className}`}>
        {answer}
    </button>
)

const Questionario = ({ handleAnswer, data: { question, correct_answer, incorrect_answers } }) => {
    const embaralharQuestoes = [correct_answer, ...
        incorrect_answers].sort(
            () => Math.random() - 0.5);

    return (
        <div>
            <div className="bg-white text-blue-800 p-10 rounded shadow-md">
                <h2 className="text-2xl"
                    dangerouslySetInnerHTML={{
                        __html: question
                    }} />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
                {embaralharQuestoes.map(answer => (
                    <button
                        className={`${correct_answer === answer 
                        ? 'bg-blue-300' : 
                        'bg-white'
                        } p-4 text-blue-800 
                        font-semibold rounded shadow`}
                        onClick={() => handleAnswer
                        (answer)}>
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    )
};

export default Questionario;