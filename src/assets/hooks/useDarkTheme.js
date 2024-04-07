import { useContext } from "react";
import { DarkThemeContext } from "../context/DarkThemeContext";

const useDarkTheme = () => {
    const context = useContext(DarkThemeContext)

    return context;
}

export default useDarkTheme;