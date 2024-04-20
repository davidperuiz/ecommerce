import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';
import "./HeaderNavBar.css"

const HeaderNavBar = () => {
    const menuOptions = ["Inicio", "Categoría", "Ofertas", "Contacto"];
    const { searchTerm } = useSearch();

    const handleInputChange = (event) => {
        const { value } = event.target;
        searchTerm(value);
    }

    return (
        <nav className="nav-bar">
            <h1><Link to="/">MiTienda</Link></h1>
            <ul className="nav-menu">
                {menuOptions.map((option) => (
                    <li key={option}><Link to="#">{option}</Link></li>
                ))}
            </ul>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Buscar productos"
                    onChange={handleInputChange}
                />
            </div>
        </nav>
    );
}

export default HeaderNavBar;
