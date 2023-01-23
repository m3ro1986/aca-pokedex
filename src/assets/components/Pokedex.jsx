import '../styles/pokedex.css';
import title from '../images/titulopokedex.png'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import PokeCard from './PokeCard';
import { useNavigate } from 'react-router-dom';
import { getPokemonTypes } from '../../store/slices/pokemontypes.slice';

const Pokedex = () => {

    const trainer = useSelector( state => state.trainer );
    const [ pokemons, setPokemons ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ pokeKeys, setPokeKeys ] = useState([]);
    const pokemonTypes = {
        'normal': 'rgba(148, 126, 66, .55)',
        'fighting': 'rgba(255, 219, 15, .55)',
        'flying': 'rgba(255, 200, 255, .55)',
        'poison': 'rgba(204, 78, 187, .55)',
        'ground': 'rgba(148, 126, 66, .55)',
        'rock': 'rgba(150, 150, 150, .55)',
        'bug': 'rgba(88, 204, 78, .55)',
        'ghost': 'rgba(204, 78, 187, .55)',
        'steel': 'rgba(150, 150, 150, .55)',
        'fire': 'rgba(255, 94, 0, 0.55)',
        'water': 'rgba(78, 204, 204, .55)',
        'grass': 'rgba(88, 204, 78, .55)',
        'electric': 'rgba(238, 255, 0, .55)',
        'psychic': 'rgba(255, 0, 191, .55)',
        'ice': 'rgba(231, 231, 231, .55)',
        'dragon': 'rgba(255, 94, 0, .55)',
        'dark': 'rgba(136, 136, 136, .55)',
        'fairy': 'rgba(255, 0, 191, .55)',
        'unknown': 'rgba(148, 126, 66, .55)',
        'shadow': 'rgba(134, 4, 102), .55)'
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    useEffect( () => { 
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then( res => {
                setPokemons( res.data.results )
                dispatch( getPokemonTypes( pokemonTypes ) )
            })
    }, [search]);

    useEffect( () => {
        setPokeKeys( Object.keys( pokemonTypes ) )
    },[])

    // console.log( pokemons )
    // const clickSearch = () => {
    //     navigate(`/pokedex/${search.toLowerCase()}`)
    // }
    
    
    console.log( pokeKeys )
    return (
        <div className='pokedex-box'>
            <select name="" id="">
                {
                    pokeKeys.map( e => (
                        <option value="" key={e}>
                            {e}
                        </option>
                    ))
                }
            </select>
            <figure>
                <img src={ title } alt="" />
            </figure>
            <h2>Welcome { trainer }, here you can find your favorite pokemon!!!</h2>

            <div className='search-box'>
                <div>
                    <input 
                        type="text" 
                        placeholder='search pokemon'
                        value={search}
                        onChange={ e => setSearch( e.target.value )}
                    />
                    <button>Go</button> 
                </div>
            </div>

            <ul className='pokelist'>
                {
                    pokemons.map( pokemon => (
                        <PokeCard url={ pokemon.url } key={ pokemon.url } pokemonTypes={ pokemonTypes }/>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pokedex;