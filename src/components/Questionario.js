import React from "react";

const Button = ({ answer, className }) => (
    <button
        className={`bg-white p-4 text-blue-800 
        font-semibold rounded shadow ${className}`}>
        {answer}
    </button>
)

const Questionario = ({
    showAnswers, 
    handleAnswer, 
    handleNextQuestion,
    data: { question, correctAnswer, answers } 
}) => {

    return (
        <div className="flex flex-col">
            <div className="bg-white text-blue-800 p-10 rounded shadow-md">
                <h2 className="text-2xl"
                    dangerouslySetInnerHTML={{
                        __html: question
                    }} />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
                {answers.map((answer, idx) => {
                    const textColor = showAnswers ? 
                    answer === correctAnswer ? 
                    "text-green-500" : 
                    "text-red-500" : 
                    "text-blue-800";
                    
                    // const textColor = showAnswers ? 
                    // "text-white" : "text-blue-800"

                    return (
                    <button
                        key={idx}
                        className={`bg-white p-4 ${textColor}
                        font-semibold rounded shadow`}
                        onClick={() => handleAnswer
                        (answer)}
                        dangerouslySetInnerHTML={{
                            __html: answer
                        }}/>
                    )
                })}
            </div>
            {showAnswers && (
                <button 
                    onClick={handleNextQuestion}
                    className={`ml-auto bg-blue-700 p-4 text-white
                            font-semibold rounded shadow mt-6`}>
                        Próxima Questão
                </button>
            )}
        </div>
    )
};

export default Questionario;