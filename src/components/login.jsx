import React from 'react';
import {useNavigate} from "react-router-dom";
import '../App.css'
const Login = () => {

    const navigate = useNavigate();
    const loginUser = () => {
        navigate('/')
    };
    const registerUser = () => {
        navigate('/register')
    };

    return (
        <div id="homePageBackground">
            <div id="homePageContent">
                <div>
                    <button className="homePageButton" onClick={loginUser}>Zaloguj się</button>
                </div>
                <div>
                    <button className="homePageButton" onClick={registerUser}>Zarejestruj się</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
