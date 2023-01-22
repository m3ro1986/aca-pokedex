import { createSlice } from '@reduxjs/toolkit';

export const colorSlice = createSlice({
	name: 'color',
    initialState: '',
    reducers: {
        getColor: ( state, action ) => {
            const color = action.payload;
            return color
        }
    }
})

export const { getColor } = colorSlice.actions;

export default colorSlice.reducer;