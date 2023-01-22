import '../styles/pokedex.css';
import title from '../images/titulopokedex.png'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import PokeCard from './PokeCard';

const Pokedex = () => {

    const trainer = useSelector( state => state.trainer );
    const [ pokemons, setPokemons ] = useState([]);

    useEffect( () => { 
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then( res => setPokemons( res.data.results ))
    }, []);

    // console.log( pokemons )

    return (
        <div className='pokedex-box'>
            <figure>
                <img src={ title } alt="" />
            </figure>
            <h2>Welcome { trainer }, here you can find your favorite pokemon!!!</h2>

            <div className='search-box'>
                <div>
                    <input type="text" />
                    <button>Go</button> 
                </div>
            </div>

            <ul className='pokelist'>
                {
                    pokemons.map( pokemon => (
                        <PokeCard url={ pokemon.url } key={ pokemon.url } />
                    ))
                }
            </ul>
        </div>
    );
};

export default Pokedex;