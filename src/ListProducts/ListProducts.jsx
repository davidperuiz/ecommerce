import React, { useState, useEffect } from 'react';
import data from "../assets/json/data.json";
import "./ListProducts.css";

const ListProducts = ({ searchTerm }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);
    }, []);

    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div id="list-products">
        {filteredProducts.map(product => (
            <a key={product.id} href="#" className="card-product">
                <header>
                    <img src={product.image} alt={product.title} />
                </header>
                <div className="card-product-info">
                    <h2>{product.title}</h2>
                    <p className="card-product-description">{product.description}</p>
                    <footer className="card-product-price">{product.price.toFixed(2)}</footer>
                </div>
            </a>
        ))}
        </div>
    );
}

export default ListProducts;
