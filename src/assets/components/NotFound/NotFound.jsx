import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="page-not-found">
            <h1>Página no encontrada</h1>
            <p>Lo sentimos, la dirección web que has especificado no existe.</p>
            <Link to="/"><i className="fa-solid fa-caret-right" /> Volver a la página de inicio de MiTienda.</Link>
        </div>
    );
}

export default NotFound;
