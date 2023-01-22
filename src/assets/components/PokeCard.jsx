import '../styles/pokecard.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokeCard = ( {url} ) => {

    const [ pokemon, setPokemon ] = useState({});
    const pokemonType = {
        normal: 'rgb(56, 94, 169)',
        fighting: 'rgb(56, 94, 169)',
        // flying: rgb(56, 94, 169),
        // poison: rgb(56, 94, 169),
        // ground: rgb(56, 94, 169),
        // rock: rgb(56, 94, 169),
        // bug: rgb(56, 94, 169),
        // ghost: rgb(56, 94, 169),
        // steel: rgb(56, 94, 169),
        // fire: rgb(56, 94, 169),
        // water: rgb(56, 94, 169),
        // grass: rgb(56, 94, 169),
        // electric: rgb(56, 94, 169),
        // psychic: rgb(56, 94, 169),
        // ice: rgb(56, 94, 169),
        // dragon: rgb(56, 94, 169),
        // dark: rgb(56, 94, 169),
        // fairy: rgb(56, 94, 169),
        // unknown: rgb(56, 94, 169),
        // shadow: rgb(56, 94, 169)
    }

    const [ color, setColor ] = useState('')

    useEffect( () => {
        axios.get( url ).then( res => { 
            setPokemon( res.data );
        })
    }, [])

    // console.log( pokemon );


    return (
        <div className='pokecard-box'>
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