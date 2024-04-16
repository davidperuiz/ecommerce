import React from 'react';
import useModal from '../../hooks/useModal';
import Modal from '../../modal/Modal';
import useProducts from '../../hooks/useProducts';
import "./AddProductModal.css";

const AddProductModal = () => {
    const { modalState, closeModal } = useModal();
    const isOpen = modalState["addProduct"];
    const { createProduct } = useProducts();

    const handleCreateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        const category = form.category.value;
        const imageURL = form.imageURL.value;
        
        if(title && price && description && category && imageURL) {
            createProduct(title, Number(price), description, category, imageURL);
            closeModal("addProduct");
        } else {
            alert("Por favor, introduzca todos los datos.")
        }
    }

    return (
        <Modal isOpen={isOpen} closeModal={() => closeModal("addProduct")}>
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

                <label htmlFor="imageURL">URL de la imagen</label>
                <input type="text" name="imageURL" id="imageURL" />

                <button className="add-new-product" type="submit">Añadir nuevo producto</button>
            </form>
        </Modal>
    );
}

export default AddProductModal;
