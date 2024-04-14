import React from 'react';
import useModal from '../../hooks/useModal';
import Modal from '../../modal/Modal';
import useProducts from '../../hooks/useProducts';

const DeleteProductModal = ({ product }) => {
    const { modalState, closeModal } = useModal();
    const isOpen = modalState["deleteProduct"];
    const { deleteProduct } = useProducts();

    return (
        <Modal isOpen={isOpen} closeModal={() => closeModal("deleteProduct")}>
            <h3>Eliminar producto</h3>
            <p>¿Desea eliminar permanentemente el siguiente producto?</p>
            <p>{product.id}</p>
            <div className="delete-panel-button">
                <button onClick={() => deleteProduct(product.id)}>Sí</button>
                <button>No</button>
            </div>
        </Modal>
    );
}

export default DeleteProductModal;
