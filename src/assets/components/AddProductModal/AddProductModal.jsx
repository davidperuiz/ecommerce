import React from "react";
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { addProduct } from '../../redux/products/productThunks';
import { v4 as uuidv4 } from "uuid";
import "./AddProductModal.css";

const AddProductModal = ({ openModal, closeModal }) => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        clearErrors,
        setError,
        reset,
        formState: { errors },
    } = useForm();

    const closeAndClean = () => {
        clearErrors();
        reset();
        closeModal();
    }

    const handleTitleValidation = () => {
        if (errors.title)
            clearErrors("title");

        const title = watch("title");

        if (title === "") {
            return setError("title", {
                message: "Introduzca un título."
            });
        }

        if (title.length < 3) {
            return setError("title", {
                message: "El título es demasiado corto."
            });
        } else
            clearErrors("title");
    }

    const handlePriceValidation = () => {
        if (errors.price)
            clearErrors("price");

        const price = watch("price");

        if (price === "") {
            return setError("price", {
                message: "Introduzca un precio."
            });
        }

        if (price < 0.01) {
            return setError("price", {
                message: "El precio introducido no es válido."
            });
        } else
            clearErrors("price");
    }

    const handleDescriptionValidation = () => {
        if (errors.description)
            clearErrors("description");

        const description = watch("description");

        if (description === "") {
            return setError("description", {
                message: "Introduzca una descripción."
            });
        } else
            clearErrors("description");
    }

    const handleCategoryValidation = () => {
        if (errors.category)
            clearErrors("category");

        const category = watch("category");

        if (category === "") {
            return setError("category", {
                message: "Introduzca una categoría."
            });
        } else
            clearErrors("category");
    }

    const handleImageValidation = () => {
        if (errors.image)
            clearErrors("image");

        const image = watch("image");
        const pattern = /^.*\.(png|jpg|jpeg|gif|bmp|svg)$/;

        if (image === "") {
            return setError("image", {
                message: "Introduzca la URL de la imagen."
            });
        }

        if (!pattern.test(image)) {
            return setError("image", {
                message: "La URL no es válida."
            });
        } else
            clearErrors("image");
    }

    const handleCreateProduct = (data) => {
        const newId = uuidv4();
        const newProduct = {
            id: newId,
            title: data.title,
            price: Number(data.price),
            description: data.description,
            category: data.category,
            image: data.image,
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
                <button className="modal-close" onClick={closeAndClean}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <h3>Nuevo producto</h3>

                <form onSubmit={handleSubmit(handleCreateProduct)}>
                    <label htmlFor="title">
                        Título:
                        <input
                            type="text"
                            name="title"
                            id="title"
                            {...register("title", {
                                required: "Introduzca un título.",
                                minLength: {
                                    value: 3,
                                    message: "El título es demasiado corto."
                                }
                            })}
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
                            {...register("price", {
                                required: "Introduzca un precio.",
                                min: {
                                    value: 0.01,
                                    message: "El precio introducido no es válido."
                                }
                            })}
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
                            {...register("description", {
                                required: "Introduzca una descripción."
                            })}
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
                            {...register("category", {
                                required: "Introduzca una categoría."
                            })}
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
                            {...register("image", {
                                required: "Introduzca la URL de la imagen.",
                                pattern: {
                                    value: /^.*\.(png|jpg|jpeg|gif|bmp|svg)$/,
                                    message: "La URL no es válida."
                                }
                            })}
                            onBlur={() => handleImageValidation()}
                        />

                        {errors.image && <span>{errors.image.message}</span>}
                    </label>

                    <button className="add-new-product" type="submit">Añadir nuevo producto</button>
                </form>
            </div>
        </article>
    )
}

export default AddProductModal;