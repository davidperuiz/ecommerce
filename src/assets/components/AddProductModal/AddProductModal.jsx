import React from "react";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/products/productThunks';
import { v4 as uuidv4 } from "uuid";
import "./AddProductModal.css";

const AddProductModal = ({ openModal, closeModal }) => {
    const dispatch = useDispatch();

    const handleCreateProduct = (e) => {
        e.preventDefault();
        const form = e.target;

        if(!(form.title.value && form.price.value && form.description.value && form.category.value && form.image.value)) {
            alert("Por favor, introduzca todos los datos.")
            return;
        }

        const newId = uuidv4();
        const newProduct = {
            id: newId,
            title: form.title.value,
            price: Number(form.price.value),
            description: form.description.value,
            category: form.category.value,
            image: form.image.value,
            rating: {
                rate: 0,
                count: 0
            }
        };

        dispatch(addProduct(newProduct));
        closeModal();
    }

    return (
        <article className={`modal-overlay ${openModal ? "is-open" : ""}`}>
            <div className="modal-container">
                <button className="modal-close" onClick={closeModal}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <h3>Nuevo producto</h3>

                <form onSubmit={handleCreateProduct}>
                    <label htmlFor="title">Título</label>
                    <input type="text" name="title" id="title" />

                    <label htmlFor="price">Precio</label>
                    <input type="number" step=".01" min="0.01" name="price" id="price" />

                    <label htmlFor="description">Descripción</label>
                    <textarea name="description" id="description" rows="3"></textarea>

                    <label htmlFor="category">Categoría</label>
                    <input type="text" name="category" id="category" />

                    <label htmlFor="image">URL de la imagen</label>
                    <input type="text" name="image" id="image" />

                    <button className="add-new-product" type="submit">Añadir nuevo producto</button>
                </form>
            </div>
        </article>
    )
}

export default AddProductModal;