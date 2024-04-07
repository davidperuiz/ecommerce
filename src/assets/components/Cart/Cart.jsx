import React from 'react';
import { Link } from 'react-router-dom';
import useDarkTheme from '../../hooks/useDarkTheme';
import useCart from '../../hooks/useCart';
import CartProduct from '../CartProduct/CartProduct';
import "./Cart.css";

const Cart = () => {
    const { dark } = useDarkTheme();
    const { cart, emptyCart, buy } = useCart();

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
                        <Link to="/">Echa un vistazo a nuestros productos y llénala de los productos que más te guste.</Link>
                    </>)
                 :
                    <>
                    { cart.map((product, index) => (
                        <CartProduct key={index} product={product} quantity={product.quantity} />
                    )) }
                    <div className="cart-total">
                        <p>Total a pagar: ${totalCart().toFixed(2)}</p>
                    </div>
                    <div className="cart-panel">
                        <button className="buy-cart" onClick={buy}>Comprar</button>
                        <button className="empty-cart" onClick={emptyCart}>Vaciar carro</button>
                    </div>
                    </>
                }
                
            </div>
        </div>
    );
}

export default Cart;
