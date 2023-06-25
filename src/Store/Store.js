import { configureStore } from "@reduxjs/toolkit";
import cart from "./Data";

const store = configureStore({
    reducer: {
        cartsadd: cart.reducer,
    }
})


export default store;
