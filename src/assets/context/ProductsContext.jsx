import React, { createContext, useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

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
        setLoading(true);
        try {
            const response = await axios.get(API_URL);
            setProducts(response.data);
        } catch (error) {
            if (error.response && error.response.status === 404)
                setError("No hay productos.");
            else
                setError("Error al recuperar los productos:", error);
        } finally {
            setLoading(false);
        }
    };

    const deleteProduct = async (id) => {
        try {
            setLoading(true);
            await axios.delete(`${API_URL}/${id}`);
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product.id != id));
        } catch (error) {
            if (error.response && error.response.status === 404)
                    setError("El producto ya fue eliminado.");
                else
                    setError("Error al eliminar producto:", error);
        } finally {
            setLoading(false);
        }
    }

    const createProduct = async (productTitle, productPrice, productDescription, productCategory, productImg) => {
        try {
            setLoading(true);
            const newId = uuidv4();
            const newProduct = {
                id: newId,
                title: productTitle,
                price: productPrice,
                description: productDescription,
                category: productCategory,
                image: productImg,
                rating: {
                    rate: 0,
                    count: 0
                }
            };
            const response = await axios.post(API_URL, newProduct);
            setProducts((prevProducts) => [...prevProducts, response.data]);
        } catch (error) {
            console.error("Error al crear producto:", error);
        } finally {
            setLoading(false);
        }
    }

    const productContextValues = {
        products,
        loading,
        createProduct,
        deleteProduct
    }

    return (
        <ProductsContext.Provider value={productContextValues}>
            {children}
        </ProductsContext.Provider>
    );
}