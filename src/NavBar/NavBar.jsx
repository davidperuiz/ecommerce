import React, { useState } from 'react';
import "./NavBar.css"

const NavBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        onSearch(term);
    }

    return (
        <header id="nav-bar">
            <h1><a href="#">MiTienda</a></h1>
            <nav>
                <ul id="nav-menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Categorías</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <input
                    type="text"
                    id="search-bar"
                    placeholder="Buscar productos"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <ul id="nav-user-panel">
                    <li><a href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
                    <li><a href="#"><i className="fa-solid fa-heart"></i></a></li>
                    <li><a href="#"><i className="fa-solid fa-user"></i></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
