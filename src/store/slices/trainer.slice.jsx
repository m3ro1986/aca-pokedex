import { createSlice } from '@reduxjs/toolkit';

export const trainerSlice = createSlice({
	name: 'trainer',
    initialState: '',
    reducers: {
        getName: ( state, action ) => {
            const name = action.payload;
            return name
        }
    }
})

export const { getName } = trainerSlice.actions;

export default trainerSlice.reducer;