import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { editProduct } from "../../redux/products/productThunks";
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
    const [originalProduct, setOriginalProduct] = useState({});

    useEffect(() => {
        if (openModal) {
            setOriginalProduct({...product});
            setEditedProduct({...product});
        }
    }, [openModal, product]);

    const {
        register,
        handleSubmit,
        clearErrors,
        setError,
        formState: { errors },
    } = useForm();

    const closeAndClean = () => {
        clearErrors();
        setEditedProduct({...originalProduct});
        closeModal();
    }

    const handleTitleValidation = () => {
        if (errors.title)
            clearErrors("title");

        if (editedProduct.title === "") {
            return setError("title", {
                message: "Introduzca un título."
            });
        }

        if (editedProduct.title.length < 3) {
            return setError("title", {
                message: "El título es demasiado corto."
            });
        } else
            clearErrors("title");
    }

    const handlePriceValidation = () => {
        if (errors.price)
            clearErrors("price");

        if (editedProduct.price === "") {
            return setError("price", {
                message: "Introduzca un precio."
            });
        }

        if (editedProduct.price < 0.01) {
            return setError("price", {
                message: "El precio introducido no es válido."
            });
        } else
            clearErrors("price");
    }

    const handleDescriptionValidation = () => {
        if (errors.description)
            clearErrors("description");

        if (editedProduct.description === "") {
            return setError("description", {
                message: "Introduzca una descripción."
            });
        } else
            clearErrors("description");
    }

    const handleCategoryValidation = () => {
        if (errors.category)
            clearErrors("category");

        if (editedProduct.category === "") {
            return setError("category", {
                message: "Introduzca una categoría."
            });
        } else
            clearErrors("category");
    }

    const handleImageValidation = () => {
        if (errors.image)
            clearErrors("image");
        const pattern = /^.*\.(png|jpg|jpeg|gif|bmp|svg)$/;

        if (editedProduct.image === "") {
            return setError("image", {
                message: "Introduzca la URL de la imagen."
            });
        }

        if (!pattern.test(editedProduct.image)) {
            return setError("image", {
                message: "La URL no es válida."
            });
        } else
            clearErrors("image");
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        name === "price" ? 
        setEditedProduct((prevProduct) => ({ ...prevProduct, [name]: Number(value)})) :
        setEditedProduct((prevProduct) => ({...prevProduct, [name]: value }));
    }

    const handleEditProduct = () => {
        dispatch(editProduct(editedProduct));
        closeModal();
    }

    return (
        <article className={`modal-overlay ${openModal ? "is-open" : ""}`}>
            <div className="modal-container">
                <button className="modal-close" onClick={closeAndClean}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <h3>Editar producto</h3>

                <form onSubmit={handleSubmit(handleEditProduct)}>
                    <label htmlFor="title">
                        Título:

                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={editedProduct.title}
                            {...register("title", {
                                required: "Introduzca un título.",
                                minLength: {
                                    value: 3,
                                    message: "El título es demasiado corto.",
                                }
                            })}
                            onChange={handleInputChange}
                            onBlur={() => handleTitleValidation()}
                        />

                        {errors.title && <span>{errors.title.message}</span>}
                    </label>
                    

                    <label htmlFor="price">
                        Precio:

                        <input
                            type="number"
                            name="price"
                            id="price"
                            step=".01"
                            value={editedProduct.price}
                            {...register("price", {
                                required: "Introduzca un precio.",
                                min: {
                                    value: 0.01,
                                    message: "El precio introducido no es válido."
                                }
                            })}
                            onChange={handleInputChange}
                            onBlur={() => handlePriceValidation()}
                        />

                        {errors.price && <span>{errors.price.message}</span>}
                    </label>
                    

                    <label htmlFor="description">
                        Descripción:

                        <textarea
                            name="description"
                            id="description"
                            rows="3"
                            value={editedProduct.description}
                            {...register("description", {
                                required: "Introduzca una descripción."
                            })}
                            onChange={handleInputChange}
                            onBlur={() => handleDescriptionValidation()}
                        />

                        {errors.description && <span>{errors.description.message}</span>}
                    </label>

                    <label htmlFor="category">
                        Categoría:

                        <input
                            type="text"
                            name="category"
                            id="category"
                            value={editedProduct.category}
                            {...register("category", {
                                required: "Introduzca una categoría."
                            })}
                            onChange={handleInputChange}
                            onBlur={() => handleCategoryValidation()}
                        />

                        {errors.category && <span>{errors.category.message}</span>}
                    </label>

                    <label htmlFor="image">
                        URL de la imagen:

                        <input
                            type="text"
                            name="image"
                            id="image"
                            value={editedProduct.image}
                            {...register("image", {
                                required: "Introduzca la URL de la imagen.",
                                pattern: {
                                    value: /^.*\.(png|jpg|jpeg|gif|bmp|svg)$/,
                                    message: "La URL no es válida."
                                }
                            })}
                            onChange={handleInputChange}
                            onBlur={() => handleImageValidation()}
                        />

                        {errors.image && <span>{errors.image.message}</span>}
                    </label>

                    <button className="edit-product" type="submit">Editar producto</button>
                </form>
            </div>
        </article>
    )
}

export default EditProductModal;