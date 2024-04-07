import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './assets/components/Layout/Layout';
import Header from './assets/components/Header/Header';
import Login from './assets/components/Login/Login'; 
import Banner from './assets/components/Banner/Banner';
import ProductsSection from './assets/components/ProductsSection/ProductsSection';
import Cart from './assets/components/Cart/Cart'
import Footer from './assets/components/Footer/Footer';
import useDarkTheme from './assets/hooks/useDarkTheme';

const App = () => {
    // const [term, setTerm] = useState("");

    // const [showProductsSection, setShowProuctsSection] = useState(true);
    // const [showCart, setShowCart] = useState(false);

    // const toggleProductsSection = () => {
    //     setShowProuctsSection(true);
    //     setShowCart(false);
    // }

    // const toggleCart = () => {
    //     setShowProuctsSection(false);
    //     setShowCart(true);
    // }

    // const { dark } = useDarkTheme();

    // return (
    //     <div className={`app${dark ? " dark" : ""}`}>
    //         <Header onFilterChange={setTerm} onProductsClick={toggleProductsSection} onCartClick={toggleCart} />
    //         <Login />
    //         <Banner />
    //         { showProductsSection ?
    //             (<ProductsSection term={term} />) :
    //             "" }
    //         { showCart ?
    //             (<Cart />) :
    //             "" }
    //         <Footer />
    //     </div>
    // );
}

export default App;