import '../styles/pokecard.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../store/slices/pokemon.slice';
import { getColor } from '../../store/slices/color.slice';

const PokeCard = ( {url, pokemonTypes} ) => {

    const [ pokemon, setPokemon ] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ typeName, setTypeName ] = useState('');
    const [ color, setColor ] = useState('');

    useEffect( () => {
        axios.get( url ).then( res => { 
            setPokemon( res.data );
            setTypeName( res.data.types[0].type.name )
        })
    }, [])

    useEffect( () => {
        setColor( pokemonTypes[ typeName ])
    }, [typeName]);

    // console.log( pokemonTypes );

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