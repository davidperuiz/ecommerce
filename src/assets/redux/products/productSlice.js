import { createSlice } from "@reduxjs/toolkit";
import {
    getAllProducts,
    addProduct,
    deleteProduct,
    editProduct
} from "./productThunks";

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
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                if (action.error.response && action.error.response.status === 404)
                    state.error = "No hay ningún producto.";
                else
                    state.error = "Error al recuperar los productos.";
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products.push(action.payload);
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = "Error al crear el producto.";
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                const deletedProductId = action.meta.arg;
                state.loading = false;
                state.products.filter((product) => product.id !== deletedProductId);
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                const deletedProductId = action.meta.arg;
                state.loading = false;
                if (action.error.response && action.error.response.status === 404)
                    state.error = `El producto con ID ${deletedProductId} ya no existe.`;
                else
                    state.error = `Error al eliminar el producto con ID ${deletedProductId}.`;
            })
            .addCase(editProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.map((product) =>
                    product.id === action.payload.id ? action.payload : product);
            })
            .addCase(editProduct.rejected, (state, action) => {
                const id = action.meta.arg;
                state.loading = false;
                if (action.error.response && action.error.response.status === 404)
                    state.error = `El producto con ID ${id} ya no existe.`;
                else
                    state.error = `Error al modificar el producto con ID ${id}.`;
            })
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )
    }
});

export default productSlice.reducer;