import React, { useState } from 'react';
import { DarkThemeProvider } from './assets/components/Context/DarkThemeContext';
import { CartContextProvider } from './assets/components/Context/CartContext';
import Header from './assets/components/Header/Header';
import Login from './assets/components/Login/Login'; 
import Banner from './assets/components/Banner/Banner';
import ProductsSection from './assets/components/ProductsSection/ProductsSection';
import Cart from './assets/components/Cart/Cart'
import Footer from './assets/components/Footer/Footer';

const App = () => {
    const [term, setTerm] = useState("");

    const [showProductsSection, setShowProuctsSection] = useState(true);
    const [showCart, setShowCart] = useState(false);

    const toggleProductsSection = () => {
        setShowProuctsSection(true);
        setShowCart(false);
    }

    const toggleCart = () => {
        setShowProuctsSection(false);
        setShowCart(true);
    }

    return (
        <>
            <DarkThemeProvider>
                <CartContextProvider>
                    <Header onFilterChange={setTerm} onProductsClick={toggleProductsSection} onCartClick={toggleCart} />
                    <Login />
                    <Banner />
                    { showProductsSection ?
                        (<ProductsSection term={term} />) :
                        "" }
                    { showCart ?
                        (<Cart />) :
                        "" }
                    <Footer />
                </CartContextProvider>
            </DarkThemeProvider>
        </>
    );
}

export default App;