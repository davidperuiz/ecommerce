import React from 'react';
import "./Modal.css";

const Modal = ({children, isOpen, closeModal}) => {

    return (
        <article className={`modal ${isOpen ? "is-open" : ""}`}>
            <div className="modal-container">
                <button className="modal-close" onClick={closeModal}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                {children}
            </div>
        </article>
    );
}

export default Modal;
