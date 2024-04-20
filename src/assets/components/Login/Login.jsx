import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useDarkTheme } from '../../hooks/useDarkTheme';
import { useAuth } from '../../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { isLoggedIn, userData, login, logout } = useAuth();
    const { dark } = useDarkTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.nombre.value;
        const email = form.email.value;

        if (name && email){
            login({name: name, email});
            navigate(location.state.pathname);
        }
        else
            alert("Por favor, completa todos los campos.");
    }

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <div className="login-section">
            <form className={`login-panel${dark ? " dark" : ""}`} onSubmit={handleSubmit}>
            
            {!isLoggedIn ?
                <>
                    <label htmlFor="nombre">Nombre:</label> 
                    <input type="text" id="nombre" />
                    <label htmlFor="email">Email:</label> 
                    <input type="email" id="email" />
                    <button className="log-session">
                        Iniciar sesión
                    </button>
                </>
                :
                <>
                    <p className="login-welcome">Bienvenido, {userData.name}.</p>
                    <button className="log-session" onClick={handleLogout}>
                        Cerrar sesión
                    </button>
                </>
            }
            </form>
        </div>
    );
}

export default Login;
