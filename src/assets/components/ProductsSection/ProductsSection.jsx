import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { useSearch }  from '../../hooks/useSearch';
import { useAuth } from '../../hooks/useAuth';
import { getAllProducts } from '../../redux/products/productThunks';
import AddProductModal from '../AddProductModal/AddProductModal';
import "./ProductsSection.css";

const ProductsSection = () => {
    const { search } = useSearch();
    const { userData } = useAuth();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const loading = useSelector((state) => state.product.loading);
    const error = useSelector((state) => state.product.error);
    const sortProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    const [modalState, setModalState] = useState(false);

    useEffect(() => {
        dispatch(getAllProducts())
    }, []);

    const handleOpenModal = () => {
        setModalState(true);
    }

    const handleCloseModal = () => {
        setModalState(false);
    }

    if (loading)
        return <div>Cargando...</div>

    if (error !== null)
        return <div>Error: {error}</div>

    return (
        <div id="products-section">
            {sortProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            {userData.role === "admin" &&
            <button className="add-product-button" onClick={handleOpenModal}><i className="fa-solid fa-plus"></i>Nuevo producto</button>}
            <AddProductModal openModal={modalState} closeModal={handleCloseModal} />
        </div>
    );
}

export default ProductsSection;
