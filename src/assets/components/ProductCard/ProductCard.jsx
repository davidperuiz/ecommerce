import React, { useState } from 'react';
import { useDarkTheme } from '../../hooks/useDarkTheme';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import "./ProductCard.css";
import EditProductModal from '../EditProductModal/EditProductModal';
import DeleteProductModal from '../DeleteProductModal/DeleteProductModal';

const ProductCard = ({ product }) => {
    const { id, title, price, image, rating } = product;
    const { dark } = useDarkTheme();
    const { addToCart } = useCart();
    const { userData, isLoggedIn } = useAuth();
    const [modalState, setModalState] = useState({editModal: false, deleteModal: false});

    const handleOpenEditModal = () => {
        setModalState({editModal: true});
    }

    const handleCloseEditModal = () => {
        setModalState({editModal: false});
    }

    const handleOpenDeleteModal = () => {
        setModalState({deleteModal: true});
    }

    const handleCloseDeleteModal = () => {
        setModalState({deleteModal: false});
    }

    const handleAddProduct = (product) => {
        addToCart(product);
    }

    return (
        <div className={`product-card${dark ? " dark" : ""}`} key={id}>
        {userData.role === "admin" &&
        <div className="admin-product-panel">
            <button className="edit-button" onClick={handleOpenEditModal}><i className="fa-solid fa-pen"></i>Editar</button>
            <button className="delete-button" onClick={handleOpenDeleteModal}><i className="fa-solid fa-trash"></i>Eliminar</button>
        </div>}
        <Link to={`product/${id}`}>
            <div className="product-panel">
                <img className={`product-image${dark ? " dark" : ""}`} src={image} alt={title} />
                <div className="product-info">
                    <h3 className={`product-title${dark ? " dark" : ""}`}>{title}</h3>
                    <p className="product-rating">
                        <Rating rate={rating.rate} />
                    </p>
                    <p className="product-price">{price.toFixed(2)}</p>
                </div>
            </div>
        </Link>
        {isLoggedIn ? 
        (<button className="addCart" onClick={() => handleAddProduct(product)}>Agregar al carrito</button>) : ""}
        <EditProductModal openModal={modalState["editModal"]} closeModal={handleCloseEditModal} product={product}/>
        <DeleteProductModal openModal={modalState["deleteModal"]} closeModal={handleCloseDeleteModal} product={product}/>
        </div>
    );
}

export default ProductCard;
