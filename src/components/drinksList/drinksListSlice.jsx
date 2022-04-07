import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { useHttp } from "../../hooks/http.hook";

const initialState = {
    drinks: [],
    drinksLoadingStatus: "idle"

};

export const fetchDrinks = createAsyncThunk(
    "drinks/fetchDrinks",
    (shop) => {
        const { request } = useHttp();
        return request(`http://localhost:3001/api/catalog/${shop}`);
    }

);

const drinksSlice = createSlice({
    name: "drinks",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchDrinks.pending]: (state) => {
            state.drinksLoadingStatus = "loading";
        },
        [fetchDrinks.fulfilled]: (state, action) => {
            state.drinksLoadingStatus = "idle";
            state.drinks = action.payload.items;
        },
        [fetchDrinks.rejected]: state => {
            state.drinksLoadingStatus = "error";
        }
    }
});

const { actions, reducer } = drinksSlice;

export default reducer;

export const {
    resetActiveBeverage
} = actions;
