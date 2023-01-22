import '../styles/pokemon.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import logo from '../images/logo.png'

const Pokemon = () => {

    const {id} = useParams();
    const pokemon = useSelector( state => state.pokemon );
    const color = useSelector( state => state.color );

    console.log( pokemon );

    return (
        <div className='pokemon-card' >
            <header>
                <figure>
                    <img src={ logo } alt="" />   
                </figure>
            </header>
            <div className='main-card' >
                <div className='main-card-detail' style={ { backgroundColor: color } }>
                    <figure className='pokemon-image'>
                        <img src={ pokemon.sprites.other.dream_world.front_default } alt="" /> 
                    </figure>
                    <div>
                        <div className='measure-box'>
                            <h3> height: { pokemon.height } </h3>
                            <h3> weight: { pokemon.weight } </h3>
                        </div>
                        <h2> { pokemon.name }</h2>
                    </div>
                    <div className='infopokemon-box'> 
                        <div>
                            <h3> Types</h3>
                            <ul className='ul-types'>
                                {
                                pokemon.types.map( type => (
                                    <li>
                                        { type.type.name}
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h3> abilities </h3>
                            <ul className='ul-habilities'>
                                {
                                pokemon.abilities.map( ability => (
                                    <li>
                                        { ability.ability.name }
                                    </li>
                                ))
                                }
                            </ul>                         
                        </div>
                    </div>
                </div>
                <div className='movements-box' style={ { backgroundColor: color } }>
                    <h3>Movements</h3>
                    <ul className='movelist'>
                        {
                            pokemon.moves.map( move => (
                                <li>
                                    { move.move.name }
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <footer>
                <h5> create by mero</h5>
            </footer>
                
        </div>
    );
};

export default Pokemon;