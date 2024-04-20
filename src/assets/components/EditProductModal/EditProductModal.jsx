import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../../redux/products/productSlice";
import "./EditProductModal.css"

const EditProductModal = ({ openModal, closeModal, product }) => {
    const dispatch = useDispatch();
    const [editedProduct, setEditedProduct] = useState({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
        rating: {
            rate: product.rating.rate,
            count: product.rating.count
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        name === "price" ? 
        setEditedProduct((prevProduct) => ({ ...prevProduct, [name]: Number(value)})) :
        setEditedProduct((prevProduct) => ({...prevProduct, [name]: value }));
    }

    const handleEditProduct = (e) => {
        e.preventDefault();
        const form = e.target;

        if(!(form.title.value && form.price.value && form.description.value && form.category.value && form.image.value)) {
            alert("Por favor, introduzca todos los datos.")
            return;
        }
        
        dispatch(editProduct(editedProduct));
        closeModal();
    }

    return (
        <article className={`modal-overlay ${openModal ? "is-open" : ""}`}>
            <div className="modal-container">
                <button className="modal-close" onClick={closeModal}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <h3>Editar producto</h3>

                <form onSubmit={handleEditProduct}>
                    <label htmlFor="title">Título</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={editedProduct.title}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="price">Precio</label>
                    <input
                        type="number"
                        step=".01"
                        min="0.01"
                        name="price"
                        id="price"
                        value={editedProduct.price}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="description">Descripción</label>
                    <textarea
                        name="description"
                        id="description"
                        rows="3"
                        value={editedProduct.description}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="category">Categoría</label>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        value={editedProduct.category}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="image">URL de la imagen</label>
                    <input
                        type="text"
                        name="image"
                        id="image"
                        value={editedProduct.image}
                        onChange={handleInputChange}
                    />

                    <button className="edit-product" type="submit">Editar producto</button>
                </form>
            </div>
        </article>
    )
}

export default EditProductModal;