import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import data from "../../fakeapi/data.json";
import "./ProductsSection.css";

const ProductsSection = ({ term }) => {
    const products = data.filter(product => product.title.toLowerCase().includes(term.toLowerCase()));

    // const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));


    return (
        <div id="products-section">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsSection;
