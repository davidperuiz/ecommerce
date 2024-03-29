import React, { useState, useContext } from 'react';
import { DarkThemeContext } from '../Context/DarkThemeContext';
import "./HeaderIcons.css";

const HeaderIcons = () => {
    const { dark, toggleTheme } = useContext(DarkThemeContext);

    return (
        <ul className="user-icons">
            <li><i className="fa-solid fa-user"></i></li>
            <li><i className="fa-solid fa-heart"></i></li>
            <li>
                <i
                    className="fa-solid fa-circle-half-stroke"
                    onClick={toggleTheme}
                    >
                </i>
            </li>
            <li><i className="fa-solid fa-cart-shopping"></i></li>
        </ul>
    );
}

export default HeaderIcons;
