import React, { createContext, useState } from "react";

export const DarkThemeContext = createContext("");

export const DarkThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);

    const toggleTheme = () => {
        setDark(prevTheme => (prevTheme ? false : true));
    }

    const darkThemeContextValues = {
        dark,
        toggleTheme
    }

    return (
        <DarkThemeContext.Provider value={darkThemeContextValues}>
            {children}
        </DarkThemeContext.Provider>
    );
}