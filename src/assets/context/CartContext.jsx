import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext("");

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("MiTienda@Cart"));

        storedCart && setCart(storedCart);
    }, []);

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
            localStorage.setItem("MiTienda@Cart", JSON.stringify(updateCart))
        } else {
            const newItem = [...cart, { ...product, quantity: 1 }];
            setCart(newItem);
            localStorage.setItem("MiTienda@Cart", JSON.stringify(newItem));
        }

        
    }

    const buy = () => {
        alert("Serás redirigido a la pasarela de pago.");
        setCart([]);
        localStorage.removeItem("MiTienda@Cart");
    }

    const emptyCart = () => {
        setCart([]);
        localStorage.removeItem("MiTienda@Cart");
    }

    const cartContextValues = {
        cart,
        addToCart,
        emptyCart,
        buy
    }

    return (
        <CartContext.Provider value={cartContextValues}>
            {children}
        </CartContext.Provider>
    );
}