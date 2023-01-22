import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './assets/components/Login'
import Pokedex from './assets/components/Pokedex'
import './assets/styles/App.css'

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={ <Login /> }/>
                <Route path='/pokedex' element={ <Pokedex /> }/>
            </Routes>
        </HashRouter>

    )
}

export default App
