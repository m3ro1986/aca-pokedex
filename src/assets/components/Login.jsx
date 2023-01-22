import React from 'react';
import '../styles/login.css'
import logo from '../images/logo.png'
import Ash from '../images/Ash.png'
import pokebola from '../images/pokebola.png'

const Login = () => {
    return (
        <div className='login-box'>
            <figure>
                <img src={ logo } alt="" /> 
            </figure>
            <figure>
                <img src={ Ash } alt="" />
            </figure>
            <h1>Hello trainer!!!</h1>
            <h2>Give your name to start.</h2>
            <input type="text" />
            <div className='button-box'>
                <img className='pokebutton' src={ pokebola } alt="" />
            </div>  

        </div>
    );
};

export default Login;