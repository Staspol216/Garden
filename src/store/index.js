import { configureStore } from "@reduxjs/toolkit";
import coffeeShops from "../components/coffeeShopsList/coffeeShopsSlice.jsx";
import shoppingCart from "../components/drinkOrderCreator/drinkOrderCreatorSlice";
import drinks from "../components/drinksList/drinksListSlice";

const store = configureStore({
    reducer: {
        coffeeShops,
        drinks,
        shoppingCart
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production"
});

export default store;
