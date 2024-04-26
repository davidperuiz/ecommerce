import axios from "axios";

const API_URL = "http://localhost:3000/products";

export const getAllProductsApi = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const addProductApi = async (newProduct) => {
    try {
        const response = await axios.post(API_URL, newProduct);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteProductApi = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const editProductApi = async (editedProduct) => {
    try {
        const response = await axios.put(`${API_URL}/${editedProduct.id}`, editedProduct);
        return response.data;
    } catch (error) {
        throw error;
    }
}