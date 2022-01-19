import React, {useState} from 'react';
import {quizDB} from "./quizDB";
import '../App.css'

const Quiz = () => {
    const id = localStorage.getItem("id");
    console.log(id);
    let questionNumber = 0;
    let score = 0;
    const [currentQuestion, setQuestion] = useState();
    const checkAnswer = (answer) => {
        if (answer === true) {
            score = score + 1;
            questionNumber++;
            console.log(questionNumber);
            nextQuestion()
        } else {
            questionNumber++;
            console.log(questionNumber);
            nextQuestion()
        }
    };
    let questionContent;
    function nextQuestion(){
        questionContent = (
            <div id="homePageBackground">
                {quizDB[id].questionsDetails.map((item, index) => (
                    index === questionNumber ? (
                        <div id="quizContent">
                            <div id="quizQuestion">
                                {item.question}
                            </div>
                            {item.answers.map((item) => (
                                <div id="quizAnswers">
                                    <button className="homePageButton"
                                            onClick={() => checkAnswer(item.isCorrect)}>{item.content}</button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        false
                    )
                ))}
            </div>
        )
        return questionContent;
    }
    return (
        <div>
            {nextQuestion()}
        </div>
    );
}

export default Quiz;
