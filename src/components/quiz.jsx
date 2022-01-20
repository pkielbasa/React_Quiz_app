import React, {useEffect, useState} from 'react';
import '../App.css'
import axios from "axios";

const Quiz = () => {
    useEffect(() => {
        getQuestions();
    }, []);
    const id = localStorage.getItem("id");
    console.log(id);
    let questionNumber = 0;
    let score = 0;
    const [questionsDetails, setQuestionsDetails] = useState([{question:"co by bylo gdyby",answers:[{content:"nic",isCorrect:true},{content:"tak",isCorrect:false}]}])
    const [name,setName] = useState('')
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

    const getQuestions = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3001/api/question',
            data: {
                name: name,
                id: id
            }
        }).then((response) => {
            const data = response.data;
            setQuestionsDetails(data);
            console.log(setQuestionsDetails);
            console.log('Data has been received!');
        }).catch((error) => {
            alert('Error retrieving data!');
            console.log(error);
        });
        ;
    };
    let questionContent;
    function nextQuestion(){
        questionContent = (
            <div id="homePageBackground">
                {questionsDetails.map((item, index) => (
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
