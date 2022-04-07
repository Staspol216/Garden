import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { useHttp } from "../../hooks/http.hook";

const initialState = {
    coffeeShops: [],
    coffeeShopsLoadingStatus: "idle"
};

export const fetchCoffeeShops = createAsyncThunk(
    "coffeeShops/fetchCoffeeShops",
    () => {
        const { request } = useHttp();
        return request("http://localhost:3001/api/catalog");
    }

);

const coffeeShopsSlice = createSlice({
    name: "coffeeShops",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoffeeShops.pending, state => {
                state.coffeeShopsLoadingStatus = "loading";
            })
            .addCase(fetchCoffeeShops.fulfilled, (state, action) => {
                state.coffeeShopsLoadingStatus = "idle";
                state.coffeeShops = action.payload;
            })
            .addCase(fetchCoffeeShops.rejected, state => {
                state.coffeeShopsLoadingStatus = "error";
            })
            .addDefaultCase(() => {});
    }
});

const { actions, reducer } = coffeeShopsSlice;

export default reducer;

export const {
    changeTestBooleanValue
} = actions;
