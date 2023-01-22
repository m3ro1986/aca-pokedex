import React, { useState } from 'react';
import '../styles/login.css'
import logo from '../images/logo.png'
import Ash from '../images/Ash.png'
import pokebola from '../images/pokebola.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getName } from '../../store/slices/trainer.slice';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ name, setName ] = useState('');

    const clickButton = () => { 
        dispatch( getName(name) )
        navigate( '/pokedex' ) 
    }

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
            <input 
                type="text" 
                value={ name }
                onChange={ e => setName( e.target.value )}
            />
            <div className='button-box'>
                <img onClick={ clickButton } className='pokebutton' src={ pokebola } alt="" />
            </div>  

        </div>
    );
};

export default Login;