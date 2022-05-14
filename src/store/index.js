import { configureStore } from "@reduxjs/toolkit";
import coffeeShops from "components/coffeeShopsList/coffeeShopsSlice";
import shoppingCart from "components/drinkOrderCreator/drinkOrderCreatorSlice";
import drinks from "components/drinksList/drinksListSlice";

const store = configureStore({
    devTools: process.env.NODE_ENV !== "production",
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    reducer: {
        coffeeShops,
        drinks,
        shoppingCart
    }
});

export default store;
