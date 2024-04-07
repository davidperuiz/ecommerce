import React, { useContext } from 'react';
import "./Banner.css";
import { AuthContext } from '../../context/AuthContext';

const Banner = () => {
    const { isLoggedIn, userData } = useContext(AuthContext);

    return (
        <div id="banner">
            <p className="promo">
                {!isLoggedIn ?
                "Crea una cuenta para disfrutar de nuestros descuentos" : 
                `¡${userData.name}, aprovéchate de tu 20% de descuento!`}
            </p>
        </div>
    );
}

export default Banner;
