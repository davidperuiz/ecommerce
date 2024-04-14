import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import useDarkTheme from '../../hooks/useDarkTheme';
import useCart from '../../hooks/useCart';
import Rating from '../Rating/Rating';
import useProducts from '../../hooks/useProducts';
import "./ProductDetails.css";

const ProductDetails = () => {
    const { productId } = useParams();
    const { products } = useProducts();
    const { dark } = useDarkTheme();
    const { addToCart } = useCart();
    const [product, setProduct] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const sortProduct = products.find(item => item.id === productId);
        if (sortProduct) {
            setProduct(sortProduct);
            setLoading(false);
        }
    }, [products, productId]);

    const handleAddProduct = (product) => {
        addToCart(product);
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`product-component${dark ? " dark" : ""}`}>
            <img src={product.image} alt={product.title} />
            <div className="product-info">
                <h2 className={`product-title${dark ? " dark" : ""}`}>{product.title}</h2>
                <p className="product-price">{Number(product.price).toFixed(2)}</p>
                <p className="product-rating"><Rating rate={product.rating.rate} /></p>
                <p className={`product-description${dark ? " dark" : ""}`}>{product.description}</p>
                <p className={`product-category${dark ? " dark" : ""}`}>Category: {product.category}</p>
                <button className="addCart" onClick={() => handleAddProduct(product)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ProductDetails;
