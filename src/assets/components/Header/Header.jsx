import React from 'react';
import HeaderNavBar from '../HeaderNavBar/HeaderNavBar';
import HeaderIcons from '../HeaderIcons/HeaderIcons';
import "./Header.css";

const Header = () => {
    // const handleFilterChange = (newFilter) => {
    //     onFilterChange(newFilter);
    // }

    // const handleProducstState = () => {
    //     onProductsClick(true);
    // }

    // const handleCartState = () => {
    //     onCartClick(true);
    // }

    return (
        <header>
            <HeaderNavBar />
            <HeaderIcons />
        </header>
    );
    
}

export default Header;
