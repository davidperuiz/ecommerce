import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllProductsApi,
    addProductApi,
    deleteProductApi,
    editProductApi
} from "./productAPI";

export const getAllProducts = createAsyncThunk(
    "products/getAllProducts",
    async () => {
        return await getAllProductsApi();
    }
);

export const addProduct = createAsyncThunk(
    "products/addProduct",
    async (newProduct) => {
        return await addProductApi(newProduct);
    }
);

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (id) => {
        return await deleteProductApi(id);
    }
);

export const editProduct = createAsyncThunk(
    "products/editProduct",
    async (editedProduct) => {
        return await editProductApi(editedProduct);
    }
);