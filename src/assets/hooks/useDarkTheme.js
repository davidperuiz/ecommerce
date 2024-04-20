import { useContext } from "react";
import { DarkThemeContext } from "../context/DarkThemeContext";

export const useDarkTheme = () => {
    const context = useContext(DarkThemeContext)

    return context;
}