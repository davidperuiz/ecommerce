import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/products/productSlice";
import "./DeleteProductModal.css";

const DeleteProductModal = ({ openModal, closeModal, product }) => {
    const dispatch = useDispatch();

    const handleDeleteProduct = () => {
        dispatch(deleteProduct(product.id));
        closeModal();
    }

    return (
        <article className={`modal-overlay ${openModal ? "is-open" : ""}`}>
            <div className="modal-container">
                <button className="modal-close" onClick={closeModal}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <h3>Eliminar producto</h3>
                <p>¿Desea eliminar permanentemente el siguiente producto?</p>
                <strong>{product.title}</strong>
                <div className="delete-panel-button">
                    <button className="confirm-delete" onClick={handleDeleteProduct}>Sí</button>
                    <button className="cancel-delete" onClick={closeModal}>No</button>
                </div>
            </div>
        </article>
    )
}

export default DeleteProductModal;