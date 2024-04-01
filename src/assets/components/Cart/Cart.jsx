import React, { useContext, useState } from 'react';
import { DarkThemeContext } from '../Context/DarkThemeContext';
import { CartContext } from '../Context/CartContext';
import CartProductComponent from '../CartProductComponent/CartProductComponent';
import "./Cart.css";

const Cart = () => {
    const { dark, toggleTheme } = useContext(DarkThemeContext);
    const { cart, addToCart } = useContext(CartContext);

    const totalCart = () => {
        let total = 0;

        cart.forEach(product => {
            total += product.price * product.quantity;
        });

        return total;
    }

    return (
        <div className="cart">
            <div className={`cart-content${dark ? " dark" : ""}${cart.length === 0 ? " empty" : ""}`}>
                { cart.length === 0 ? 
                    (<>
                        <h2>Tu cesta de la compra está vacía</h2>
                        <p>Echa un vistazo a nuestros productos y llénala de los productos que más te guste.</p>
                    </>)
                 :
                    <>
                    { cart.map((product, index) => (
                        <CartProductComponent key={index} product={product} quantity={product.quantity} />
                    )) }
                    <div className="cart-total">
                        <p>Total a pagar: ${totalCart().toFixed(2)}</p>
                    </div>
                    </>
                }
                
            </div>
        </div>
    );
}

export default Cart;
