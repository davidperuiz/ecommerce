import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API_URL = "http://localhost:3000/products";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get(API_URL);
                setProducts(response.data);
            } catch (error) {
                if (error.response && error.response.status === 404)
                    setError("No products.");
                else
                    setError("Error fetching products.");
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    const deleteProduct = async (id) => {
        try {
            setLoading(true);
            await axios.delete(`${API_URL}/${id}`);
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product.id != id));
        } catch (error) {
            if (error.response && error.response.status === 404)
                    setError("No products.");
                else
                    setError("Error fetching products.");
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
            console.error("Error adding product:", error);
        } finally {
            setLoading(false);
        }
    }

    return {
        products,
        loading,
        createProduct,
        deleteProduct
    }
}

export default useProducts;