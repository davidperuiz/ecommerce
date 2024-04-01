import React, { createContext, useState } from "react";

export const CartContext = createContext("");

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const isInCart = cart.find(item => item.id === product.id);

        if (isInCart) {
            const updateCart = cart.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
    
            setCart(updateCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }

    }

    const cartContextValues = {
        cart,
        addToCart
    }

    return (
        <CartContext.Provider value={cartContextValues}>
            {children}
        </CartContext.Provider>
    );
}