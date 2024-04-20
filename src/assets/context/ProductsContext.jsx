import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/products";
export const ProductsContext = createContext("");

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get(API_URL);
            setProducts(response.data);
        } catch (error) {
            if (error && error.response.status === 404)
                setError("No hay productos.", error);
            else
                setError("Error al recuperar los productos:", error);
        } finally {
            setLoading(false);
        }
    }

    const createProduct = async (newProduct) => {
        try {
            setLoading(true);
            const response = await axios.post(API_URL, newProduct);
            const addedProduct = response.data;
            setProducts((prevProducts) => [...prevProducts, addedProduct]);
        } catch (error) {
            setError("Error al crear nuevo producto:", error);
        } finally {
            setLoading(false);
        }
    }

    const editProduct = async (editedProduct) => {
        try {
            setLoading(true);
            const response = await axios.put(`${API_URL}/${editedProduct.id}`, editedProduct);
            const addEditProduct = response.data;
            setProducts((prevProducts) => {
                return prevProducts.map(product => {
                    if (product.id === editedProduct.id) 
                        return addEditProduct;
                    
                    return product;
                });
            });
        } catch (error) {
            if (error && error.response.status === 404)
                setError("No se encuentra el producto.", error);
            else
               setError("Error al editar el productos:", error);
        } finally {
            setLoading(false);
        }
    }

    const deleteProduct = async (id) => {
        try {
            setLoading(true);
            await axios.delete(`${API_URL}/${id}`);
            setProducts((prevProducts) => prevProducts.filter((product) => product.id != id));
        } catch (error) {
            if (error.response && error.response.status === 404)
                    setError("El producto ya fue eliminado.");
                else
                    setError("Error al eliminar producto:", error);
        } finally {
            setLoading(false);
        }
    }

    const productsContextValues = {
        products,
        loading,
        error,
        getProducts,
        createProduct,
        editProduct,
        deleteProduct
    }

    return (
        <ProductsContext.Provider value={productsContextValues}>
            {children}
        </ProductsContext.Provider>
    )
}