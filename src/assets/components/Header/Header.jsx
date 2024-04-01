import React from 'react';
import HeaderNavBar from '../HeaderNavBar/HeaderNavBar';
import HeaderIcons from '../HeaderIcons/HeaderIcons';
import "./Header.css";

const Header = ({ onFilterChange, onProductsClick, onCartClick }) => {
    const handleFilterChange = (newFilter) => {
        onFilterChange(newFilter);
    }

    const handleProducstState = () => {
        onProductsClick(true);
    }

    const handleCartState = () => {
        onCartClick(true);
    }

    return (
        <header>
            <HeaderNavBar onProductsClick={handleProducstState} onFilterChange={handleFilterChange} />
            <HeaderIcons onCartClick={handleCartState} />
        </header>
    );
    
}

export default Header;
