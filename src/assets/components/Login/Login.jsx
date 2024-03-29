import React, { useContext } from 'react';
import { DarkThemeContext } from '../Context/DarkThemeContext';
import "./Login.css"

const Login = () => {
    const { dark, toggleTheme } = useContext(DarkThemeContext);

    const handleLoginLogout = () => {
        if (!localStorage.getItem("user@MiTienda")) {
            const userData = {
                username: document.getElementById("nombre").value,
                email: document.getElementById("email").value
            }
            localStorage.setItem("user@MiTienda", JSON.stringify(userData));
        }
        else
            localStorage.removeItem("user@MiTienda");
    }

    return (
        <div className="login-section">
            <form className={`login-panel${dark ? " dark" : ""}`}>
            
            {!localStorage.getItem("user@MiTienda") ?
                <>
                    <label htmlFor="nombre">Nombre:</label> 
                    <input type="text" id="nombre" />
                    <label htmlFor="email">Email:</label> 
                    <input type="email" id="email" />
                </> :

                <>
                    <p className="login-welcome">Bienvenido, {JSON.parse(localStorage.getItem("user@MiTienda")).username}.</p>
                </>
            }
            
            <button className="log-session" onClick={handleLoginLogout}>
                {localStorage.getItem("user@MiTienda") ? "Cerrar sesión" : "Iniciar sesión"}
            </button>
            </form>
        </div>
    );
}

export default Login;
