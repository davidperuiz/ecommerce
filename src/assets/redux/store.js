import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
    },
    devTools: true
});