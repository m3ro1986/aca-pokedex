import '../styles/pokecard.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPokemon } from '../../store/slices/pokemon.slice';
import { getColor } from '../../store/slices/color.slice';

const PokeCard = ( {url} ) => {

    const [ pokemon, setPokemon ] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pokemonType = {
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

    const [ typeName, setTypeName ] = useState('');
    const [ color, setColor ] = useState('');

    useEffect( () => {
        axios.get( url ).then( res => { 
            setPokemon( res.data );
            setTypeName( res.data.types[0].type.name )
        })
    }, [])

    useEffect( () => {
        setColor( pokemonType[ typeName ])
    }, [typeName]);

    // console.log( pokemon );

    const goPokemon = () => {
        navigate(`/pokedex/${pokemon.id}`)
        dispatch( getPokemon( pokemon ))
        dispatch( getColor( color ))
    }

    return (
        <div 
            className='pokecard-box' 
            style={ { backgroundColor: color } }
            onClick={ goPokemon }
        >
            <figure>
                <img src={ pokemon.sprites?.other.dream_world.front_default } alt="" />
            </figure>
            <div  className='pokeinfo-box'>
                <h2> { pokemon.name } </h2>
                <ul className='types-box'>
                    {
                        pokemon.types?.map( type => (
                            <li key={ type.type.url }>
                                { type.type.name }
                            </li>
                        ))
                    }
                </ul>
                <ul className='stats-box'>
                    {
                        pokemon.stats?.map( stat => (
                            <li key={ stat.stat.url }>
                                { stat.stat.name } : { stat.base_stat }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default PokeCard;