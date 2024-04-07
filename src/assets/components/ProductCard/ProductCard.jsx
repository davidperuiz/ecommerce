import React from 'react';
import useDarkTheme from '../../hooks/useDarkTheme';
import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth';
import Rating from '../Rating/Rating';
import "./ProductCard.css";
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { id, title, price, image, rating } = product;
    const { dark } = useDarkTheme();
    const { addToCart } = useCart();
    const { isLoggedIn } = useAuth();

    const handleAddProduct = (product) => {
        addToCart(product);
    }

    return (
        <div className={`product-card${dark ? " dark" : ""}`} key={id}>
        <Link to={`product/${id}`}>
            <div className="product-panel">
                <img className={`product-image${dark ? " dark" : ""}`} src={image} alt={title} />
                <div className="product-info">
                    <h3 className={`product-title${dark ? " dark" : ""}`}>{title}</h3>
                    <p className="product-rating">
                        <Rating rate={rating.rate} />
                    </p>
                    <p className="product-price">{price.toFixed(2)}</p>
                </div>
            </div>
        </Link>
        {isLoggedIn ? 
        (<button className="addCart" onClick={() => handleAddProduct(product)}>Agregar al carrito</button>) : ""}
        </div>
    );
}

export default ProductCard;
