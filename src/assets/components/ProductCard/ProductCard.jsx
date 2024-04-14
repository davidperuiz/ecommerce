import React from 'react';
import useDarkTheme from '../../hooks/useDarkTheme';
import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth';
import useModal from '../../hooks/useModal';
import Rating from '../Rating/Rating';
import DeleteProductModal from '../DeleteProductModal/DeleteProductModal';
import { Link } from 'react-router-dom';
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const { id, title, price, image, rating } = product;
    const { dark } = useDarkTheme();
    const { addToCart } = useCart();
    const { userData, isLoggedIn } = useAuth();
    const { openModal } = useModal();

    const handleAddProduct = (product) => {
        addToCart(product);
    }

    const handleOpenModal = () => {
        openModal(["deleteProduct"]);
        console.log(product);
    }

    return (
        <div className={`product-card${dark ? " dark" : ""}`} key={id}>
        {userData.role && userData.role === "admin" &&
        <div className="admin-product-panel">
            <button className="edit-button"><i className="fa-solid fa-pen"></i>Editar</button>
            <button className="delete-button" onClick={handleOpenModal}><i className="fa-solid fa-trash"></i>Eliminar</button>
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
        {isLoggedIn && 
        (<button className="addCart" onClick={() => handleAddProduct(product)}>Agregar al carrito</button>)}
        <DeleteProductModal product={product} />
        </div>
    );
}

export default ProductCard;
