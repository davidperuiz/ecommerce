import React from 'react';
import HeaderNavBar from '../HeaderNavBar/HeaderNavBar';
import HeaderIcons from '../HeaderIcons/HeaderIcons';
import "./Header.css";

const Header = ({ onFilterChange }) => {
    const handleFilterChange = (newFilter) => {
        onFilterChange(newFilter);
    }

    return (
        <header>
            <HeaderNavBar onFilterChange={handleFilterChange} />
            <HeaderIcons />
        </header>
    );
}

export default Header;
