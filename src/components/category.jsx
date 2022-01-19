import React from 'react';
import {useNavigate} from "react-router-dom";
import {quizDB} from "./quizDB";
import '../App.css'
import { useState, useEffect } from "react";
const Category = () => {
    const navigate = useNavigate();
    const goToQuiz = (id) => {
        localStorage.setItem("id", id)
        navigate('/quiz');
    };
    const goToHome = () => {
        navigate('/')
    };
    return (
        <div id="categoryBackground">
            <div id="categoryContent">
                <div>
                    <button className="homePageButton" onClick={goToHome}>Wróć do ekranu głównego</button>
                </div>
                <div id="categoriesMap">
                    {quizDB.map((item, index) => (
                        <div id="categoryButton">
                        <button className="homePageButton" onClick={() => goToQuiz(item.id)} >{item.name}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Category;
