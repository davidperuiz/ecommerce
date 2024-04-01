import React, { useState } from 'react';
import "./HeaderNavBar.css"

const HeaderNavBar = ({ onFilterChange, onProductsClick }) => {
    const menuOptions = ["Inicio", "Categoría", "Ofertas", "Contacto"];
    const [textFilter, setTextFilter] = useState("");

    const handleProducstState = () => {
        onProductsClick(true);
    }

    const handleInputChange = (event) => {
        const newText = event.target.value;
        setTextFilter(newText);
        onFilterChange(newText);
    }

    return (
        <nav className="nav-bar">
            <h1 onClick={handleProducstState}>MiTienda</h1>
            <ul className="nav-menu">
                {menuOptions.map((option) => (
                    <li key={option}><a href="#">{option}</a></li>
                ))}
            </ul>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Buscar productos"
                    value={textFilter}
                    onChange={handleInputChange}
                />
            </div>
        </nav>
    );
}

export default HeaderNavBar;
