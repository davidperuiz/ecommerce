import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const storedUser = localStorage.getItem("user@MiTienda");
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const login = ({ name, email }) => {
        setIsLoggedIn(true);
        const userRole = email.includes("@admin") ? "admin" : "user";
        let userDataObj = {
            name,
            email,
            role: userRole
        };
        localStorage.setItem("user@MiTienda", JSON.stringify(userDataObj));
    }

    const logout = () => {
        setIsLoggedIn(false);
        setUserData({});
        localStorage.removeItem("user@MiTienda");
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