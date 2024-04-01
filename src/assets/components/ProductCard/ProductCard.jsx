import React, { useContext } from 'react';
import { DarkThemeContext } from '../Context/DarkThemeContext';
import { CartContext } from '../Context/CartContext';
import Rating from '../Rating/Rating';
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const { id, title, price, description, image, rating } = product;
    const { dark, toggleTheme } = useContext(DarkThemeContext);
    const { cart, addToCart } = useContext(CartContext);

    const handleAddProduct = (product) => {
        addToCart(product);
    }

    return (
        <div className={`product-card${dark ? " dark" : ""}`} key={id}>
            <img className={`product-image${dark ? " dark" : ""}`} src={image} alt={title} />
            <div className="product-info">
                <h3 className={`product-title${dark ? " dark" : ""}`}>{title}</h3>
                <p className={`product-description${dark ? " dark" : ""}`}>{description}</p>
                <p className="product-rating">
                    <Rating rate={rating.rate} />
                    <br />
                    {rating.count} reviews
                </p>
                <p className="product-price">{price.toFixed(2)}</p>
            </div>
            <button className="addCart" onClick={() => handleAddProduct(product)}>Agregar al carrito</button>
        </div>
    );
}

export default ProductCard;
