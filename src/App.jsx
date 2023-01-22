import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './assets/components/Login'
import Pokedex from './assets/components/Pokedex'
import Pokemon from './assets/components/Pokemon'
import ProtectedRoutes from './assets/components/ProtectedRoutes'
import './assets/styles/App.css'

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={ <Login /> }/>
                
                <Route element={ <ProtectedRoutes />}>
                    <Route path='/pokedex' element={ <Pokedex /> }/> 
                    <Route path='/pokedex/:id' element={ <Pokemon /> }/> 
                </Route>

            </Routes>
        </HashRouter>

    )
}

export default App
