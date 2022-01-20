import React from 'react';
import {useNavigate} from "react-router-dom";
import '../App.css'
import { useState, useEffect } from "react";
import axios from "axios";


const Category = () => {
    useEffect(() => {
        getCategories();
    }, []);
    const navigate = useNavigate();
    const goToQuiz = (id) => {
        localStorage.setItem("id", id)
        navigate('/quiz/');
    };
    const goToHome = () => {
        navigate('/')
    };
    const [name] = useState('')
    const [id] = useState('')
    const [categories,setCategories] = useState([])

    const getCategories = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3001/api/question',
            data: {
                name: name,
                id: id
            }
        }).then((response) => {
            const data = response.data;
            setCategories(data)
            console.log('Data has been received!');
        }).catch((error) => {
            alert('Error retrieving data!');
            console.log(error);
        });
        ;
    };
    return (
        <div id="categoryBackground">
            <div id="categoryContent">
                <div>
                    <button className="homePageButton" onClick={goToHome}>Wróć do ekranu głównego</button>
                </div>
                <div id="categoriesMap">
                    {categories.map((item, index) => (
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
