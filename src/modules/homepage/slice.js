import { createSlice } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";

const initialState = {
    countryDetails: {
        data: []
    },
};

const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        setCountriesDetails: (state, action) => {
            state.countryDetails.data = action.payload;
        },
    },
    extraReducers: (builder) => {
    
    }
});

export const { actions, reducer } = slice;
