import React, { useState } from 'react';
import { DarkThemeProvider } from './assets/components/Context/DarkThemeContext';
import Header from './assets/components/Header/Header';
import Login from './assets/components/Login/Login'; 
import Banner from './assets/components/Banner/Banner';
import ProductsSection from './assets/components/ProductsSection/ProductsSection';
import Footer from './assets/components/Footer/Footer';

const App = () => {
    const [term, setTerm] = useState("");

    return (
        <>
            <DarkThemeProvider>
                <Header onFilterChange={setTerm} />
                <Login />
                <Banner />
                <ProductsSection term={term} />
                <Footer />
            </DarkThemeProvider>
        </>
    );
}

export default App;