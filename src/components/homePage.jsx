import React from 'react';
import {useNavigate} from "react-router-dom";
import '../App.css'
const Homepage = () => {

    const navigate = useNavigate();
    const goToCategories = () => {
        navigate('/category')
    };
    const goToResult = () => {
        navigate('/result')
    };

    return (
        <div id="homePageBackground">
            <div id="homePageContent">
                <div>
                    <button className="homePageButton" onClick={goToCategories}>Przejdź do kategorii</button>
                </div>
                <div>
                    <button className="homePageButton" onClick={goToResult}>Przejdź do tablicy wyników</button>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
