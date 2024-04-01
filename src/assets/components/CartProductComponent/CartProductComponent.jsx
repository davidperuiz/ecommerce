import React, { useContext } from 'react';
import { DarkThemeContext } from '../Context/DarkThemeContext';
import "./CartProductComponent.css";

const CartProductComponent = ({ product, quantity }) => {
    const { id, title, price, description, image, rating } = product;
    const { dark, toggleTheme } = useContext(DarkThemeContext);

    return (
        <div className="cart-product" key={id}>
            <img className="cart-product-image" src={image} alt={title} />
            <div className="cart-product-info">
                <h3>{title}</h3>
                <div className="product-quantity">Cantidad: {quantity}</div>
                <p><strong>Precio por unidad:</strong> ${price.toFixed(2)}</p>
                <p><strong>Precio total:</strong> ${(price * quantity).toFixed(2)}</p>
            </div>
        </div>
    );
}

export default CartProductComponent;
