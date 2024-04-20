import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import { useDarkTheme } from '../../hooks/useDarkTheme';
import "./Layout.css"

const Layout = ({ children }) => {
    const { dark } = useDarkTheme();

    return (
        <div className={`layout${dark ? " dark" : ""}`}>
            <Header />
            <Banner />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
