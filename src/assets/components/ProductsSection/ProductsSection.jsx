import React from 'react';
import useSearch from '../../hooks/useSearch';
import ProductCard from '../ProductCard/ProductCard';
import data from "../../fakeapi/data.json";
import "./ProductsSection.css";

const ProductsSection = () => {
    const { search } = useSearch();
    const products = data.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div id="products-section">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsSection;
