import React, { useEffect, useState } from 'react';

// Creating the QuizPage component
const QuizPage = ({ name, score, questions, setQuestions, setScore}) => {

    const [options, setOptions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0)

    useEffect(() => {
        console.log(questions);

        setOptions(questions && handleSchuffle([questions[currentQuestion]?.correct_answer, ...questions[currentQuestion]?.incorrect_answers ]));
        console.log(options)
    }, [questions])

    const handleSchuffle = (opt) => {
        return opt.sort(() => Math.random() - 0.5)
    }

    return (
        <div>QuizPage</div>
    )
};

export default QuizPage;