import { configureStore } from '@reduxjs/toolkit'
import colorSlice from './slices/color.slice'
import pokemonSlice from './slices/pokemon.slice'
import trainerSlice from './slices/trainer.slice'

export default configureStore({
    reducer: {
        trainer: trainerSlice,
        pokemon: pokemonSlice,
        color: colorSlice
	}
})