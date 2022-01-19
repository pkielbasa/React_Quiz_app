import React from 'react';
import {useNavigate} from "react-router-dom";
import '../App.css'
const Register = () => {

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/')
    };

    return (
        <div id="homePageBackground">
            <div id="homePageContent">
                <div>
                    <button className="homePageButton" onClick={goToHome}>Zarejestruj się</button>
                </div>
            </div>
        </div>
    );
}

export default Register;
