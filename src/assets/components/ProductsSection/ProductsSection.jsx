import React, { useState } from 'react';
import useSearch from '../../hooks/useSearch';
import ProductCard from '../ProductCard/ProductCard';
import useAuth from '../../hooks/useAuth';
import useModal from '../../hooks/useModal';
import useProducts from '../../hooks/useProducts';
import AddProductModal from '../AddProductModal/AddProductModal'
import "./ProductsSection.css";

const ProductsSection = () => {
    const { search } = useSearch();
    const { products } = useProducts();
    const sortProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    const { userData } = useAuth();
    const { openModal } = useModal();

    return (
        <div id="products-section">
            {sortProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            {userData.role && userData.role === "admin" &&
            <button className="add-product-button" onClick={() => openModal("addProduct")}><i className="fa-solid fa-plus"></i>Nuevo producto</button>}
            <AddProductModal />
        </div>
    );
}

export default ProductsSection;
