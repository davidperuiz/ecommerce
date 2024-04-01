import React, { useContext } from 'react';
import { DarkThemeContext } from '../Context/DarkThemeContext';
import { CartContext } from '../Context/CartContext';
import "./HeaderIcons.css";

const HeaderIcons = ({ onCartClick }) => {
    const { dark, toggleTheme } = useContext(DarkThemeContext);
    const { cart, addToCart } = useContext(CartContext);

    const handleCartState = () => {
        onCartClick(true);
    }

    const amountProductsCart = () => {
        return cart.reduce((total, product) => {
            return total + product.quantity;
        }, 0)
    }

    return (
        <ul className="user-icons">
            <li><i className="fa-solid fa-user"></i></li>
            <li><i className="fa-solid fa-heart"></i></li>
            <li>
                <i
                    className="fa-solid fa-circle-half-stroke"
                    onClick={toggleTheme}
                    >
                </i>
            </li>
            <li><i
                    className="fa-solid fa-cart-shopping"
                    onClick={handleCartState}
                    >
                </i>
                { cart.length === 0 ? "" :
                    <div className="cart-quantity-products">
                        {amountProductsCart()}
                    </div>
                 }
            </li>
        </ul>
    );
}

export default HeaderIcons;
