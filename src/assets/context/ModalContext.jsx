import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalState, setModalState] = useState({});

    const openModal = (modalName) => {
        setModalState(prevState => ({
            ...prevState,
            [modalName]: true
        }));
    }

    const closeModal = (modalName) => {
        setModalState(prevState => ({
            ...prevState,
            [modalName]: false
        }));
    }

    const modalContextValues = {
        modalState,
        openModal,
        closeModal
    }

    return (
        <ModalContext.Provider value={modalContextValues}>
            {children}
        </ModalContext.Provider>
    );
}