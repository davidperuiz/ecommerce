import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div id="banner">
            <p className="promo">
                {!localStorage.getItem("user@MiTienda") ?
                "Crea una cuenta para disfrutar de nuestros descuentos" : 
                `¡${JSON.parse(localStorage.getItem("user@MiTienda")).username}, aprovéchate de tu 20% de descuento!`}
            </p>
        </div>
    );
}

export default Banner;
