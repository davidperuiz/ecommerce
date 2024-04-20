import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks
const API_URL = "http://localhost:3000/products";

export const getAllProducts = createAsyncThunk(
    "products/getAllProducts",
    async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
);

export const addProduct = createAsyncThunk(
    "products/addProduct",
    async (newProduct) => {
        try {
            const response = await axios.post(API_URL, newProduct);
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
);

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
)

export const editProduct = createAsyncThunk(
    "products/editProduct",
    async (editedProduct) => {
        try {
            const response = await axios.put(`${API_URL}/${editedProduct.id}`, editedProduct);
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
)

// Slice
const initialState = {
    products: [],
    loading: false,
    error: null
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products.push(action.payload);
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products.filter((product) => product.id !== action.payload);
            })
            .addCase(editProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.map((product) =>
                    product.id === action.payload.id ? action.payload : product);
            })
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                }
            )
    }
});

export default productSlice.reducer;