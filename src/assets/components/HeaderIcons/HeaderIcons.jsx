import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useDarkTheme from '../../hooks/useDarkTheme';
import { CartContext } from '../../context/CartContext';
import "./HeaderIcons.css";

const HeaderIcons = ({ onCartClick }) => {
    const { toggleTheme } = useDarkTheme();
    const { cart } = useContext(CartContext);

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
            <li><Link to="/login"><i 
                className="fa-solid fa-user"></i>
            </Link></li>
            <li><i className="fa-solid fa-heart"></i></li>
            <li>
                <i
                    className="fa-solid fa-circle-half-stroke"
                    onClick={toggleTheme}
                    >
                </i>
            </li>
            <li><Link to="/cart"><i
                    className="fa-solid fa-cart-shopping"
                    >
                </i></Link>
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
