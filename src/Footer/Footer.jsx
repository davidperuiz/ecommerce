import React from 'react';
import "./Footer.css"

const Footer = () => {
    const createInfoCard = (header, infoItems) => {
        return (
            <header className="footer-contact">
                <header>{header}</header>
                <ul>
                    {infoItems.map((info, index) => (
                        <li key={index}>{info}</li>
                    ))}
                </ul>
            </header>
        )
    }
    return (
        <footer id="footer-info">
            <nav>
                {createInfoCard("Contacto", ["Email: info@mitienda.com", "Teléfono: +34 123 456 789"])}
                {createInfoCard("Redes Sociales", ["Facebook", "Twitter", "Instagram"])}
                {createInfoCard("Dirección", ["Calle Principal, 123", "Ciudad, País"])}
            </nav>
            <hr />
            <div id="footer-rights">
                © 2024 MiTienda. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;
