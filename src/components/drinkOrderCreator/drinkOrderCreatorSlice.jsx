import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { useHttp } from "hooks/http.hook";

const initialState = {
  activeBeverage: {},
  activeBeverageLoadingStatus: "idle",
  cart: [],
  lastSubmitBeverage: {}
};

export const fetchBeverage = createAsyncThunk(
  "shoppingCart/fetchBeverage",
  (slugs) => {
    const { request } = useHttp();

    return request(`http://localhost:3001/api/catalog/${slugs.shop}/${slugs.item}`);
  }
);

const drinkOrderCreatorSlice = createSlice({
  initialState,
  name: "shoppingCart",
  reducers: {
    addToCart: {
      reducer:  (state, action) => {
        const { name, cream, modify } = action.payload;
        const itemIndex = state.cart.findIndex( item => item.name === name
        && item.cream === cream
        && item.modify === modify);

        if (itemIndex >= 0) {
          state.lastSubmitBeverage = { ...action.payload, quantity: state.cart[itemIndex].quantity + 1 };
          state.cart[itemIndex].quantity +=1;
        } else {
          state.cart.push({ ...action.payload, quantity: 1 });
          state.lastSubmitBeverage = { ...action.payload, quantity: 1 };
        }
      },
      prepare: (order) => {
        if (order.cream === "+cливки") {
          order.price = +order.price + 20;
        }
        if (order.modify === "+соевое молоко") {
          order.price = +order.price + 20;
        }
        return {
          payload: order
        };
      }
    },
    decreaseItemCount: (state, action) => {
      const { name, cream, modify } = action.payload;
      const itemIndex = state.cart.findIndex( item => item.name === name
        && item.cream === cream
        && item.modify === modify);

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity -= 1;
        state.lastSubmitBeverage.quantity -=1;
      }

      if ( itemIndex >= 0 && state.cart[itemIndex].quantity === 0) {
        const indexItemForDelete = state.cart.findIndex( item => item.name === name
          && item.cream === cream
          && item.modify === modify);

        if (indexItemForDelete !== -1) {
          state.cart.splice(indexItemForDelete, 1);
        }
      }
    },
    removeActiveBeverage: (state, action) => {
      state.activeBeverage = action.payload;
    },
    removeAllDrinksInCart: ( state, action) => {
      state.cart = [];
    }
  },
  extraReducers: {
    [fetchBeverage.pending]: (state) => {
      state.activeBeverageLoadingStatus = "loading";
    },
    [fetchBeverage.fulfilled]: (state, action) => {
      state.activeBeverageLoadingStatus = "idle";
      state.activeBeverage = action.payload.item;
    },
    [fetchBeverage.rejected]: state => {
      state.activeBeverageLoadingStatus = "error";
    }
  }
});

const { actions, reducer } = drinkOrderCreatorSlice;

export default reducer;

export const {
  removeActiveBeverage,
  removeAllDrinksInCart,
  decreaseItemCount,
  addToCart
} = actions;
