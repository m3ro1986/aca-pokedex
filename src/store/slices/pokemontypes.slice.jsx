import { createSlice } from '@reduxjs/toolkit';

export const pokemonTypesSlice = createSlice({
	name: 'pokemonTypes',
    initialState: {},
    reducers: {
        getPokemonTypes: ( state, action ) => {
            const pokemonTypes = action.payload;
            return pokemonTypes
        }
    }
})

export const { getPokemonTypes } = pokemonTypesSlice.actions;

export default pokemonTypesSlice.reducer;