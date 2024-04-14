import React, { createContext, useEffect, useState } from "react";
import useCart from "../hooks/useCart";

export const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});
    const { emptyCart } = useCart();

    useEffect(() => {
        const storedUser = localStorage.getItem("user@MiTienda");
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const login = ({ name, email }) => {
        setIsLoggedIn(true);
        let userDataObj = {};
        email.includes("@admin") ?  userDataObj = { name, email, role: "admin" } : userDataObj = { name, email };
        setUserData(userDataObj);
        localStorage.setItem("user@MiTienda", JSON.stringify(userDataObj));
    }

    const logout = () => {
        setIsLoggedIn(false);
        setUserData({});
        localStorage.removeItem("user@MiTienda");
        emptyCart();
    }

    const authContextValues = {
        isLoggedIn,
        userData,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={authContextValues}>
            {children}
        </AuthContext.Provider>
    );
}