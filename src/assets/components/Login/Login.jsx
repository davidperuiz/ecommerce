import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDarkTheme } from '../../hooks/useDarkTheme';
import { useAuth } from '../../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        register,
        handleSubmit,
        watch,
        clearErrors,
        setError,
        formState: { errors },
    } = useForm();
    const { isLoggedIn, userData, login, logout } = useAuth();
    const { dark } = useDarkTheme();

    const handleLogin = (data) => {
        login({name: data.name, email: data.email});
        navigate(location.state?.pathname || "/");
    }

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    const handleNameValidation = () => {
        if (errors.name)
            clearErrors("name");

        const name = watch("name");

        if (name === "") {
            return setError("name", {
                message: "Introduzca un nombre."
            });
        }

        if (name.length < 3) {
            return setError("name", {
                message: "El nombre es demasiado corto."
            });
        } else
            clearErrors("name");
    }

    const handleEmailValidation = () => {
        if (errors.email)
            clearErrors("email");

        const email = watch("email");
        const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

        if (email == "") {
            return setError("email", {
                message: "Introduzca un email."
            });
        }

        if (!pattern.test(email)) {
            return setError("email", {
                message: "El email no es válido."
            });
        } else
            clearErrors("email");
    }

    const handlePasswordValidation = () => {
        if (errors.password)
            clearErrors("password");

        const password = watch("password");
        const validatePassword = watch("validatePassword");

        if (password === "") {
            return setError("password", {
                message: "Introduzca una contraseña."
            });
        }

        if (password.length < 6) {
            return setError("password", {
                message: "La contraseña debe tener al menos 6 caracteres."
            });
        }

        if (password !== validatePassword && validatePassword !== "") {
            setError("validatePassword", {
                message: "Las contraseñas no coinciden."
            });
        } else
            clearErrors(["password", "validatePassword"]);
    }

    return (
        <div className="login-section">
            <form className={`login-panel${dark ? " dark" : ""}`} onSubmit={handleSubmit(handleLogin)}>
            
            {!isLoggedIn ?
                <>
                    <label htmlFor="nombre">
                        Nombre:

                        <input
                            type="text"
                            id="nombre"
                            {...register("name", {
                                required: "Introduzca un nombre.",
                                minLength: {
                                    value: 3,
                                    message: "El nombre es demasiado corto."
                                }
                            })}
                            onBlur = {() => handleNameValidation()}
                        />
                        {errors.name && <span>{errors.name.message}</span>}
                    </label> 
                    

                    <label htmlFor="email">
                        Email:

                        <input
                            type="email"
                            id="email"
                            {...register("email", {
                                required: "Introduzca un email.",
                                pattern: {
                                    value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                                    message: "El email no es válido."
                                }
                            })}
                            onBlur = {() => handleEmailValidation()}
                        />
                        {errors.email && <span>{errors.email.message}</span>}

                    </label> 

                    <label htmlFor="password">
                        Contraseña:

                        <input
                            type="password"
                            id="password"
                            {...register("password", {
                                required: "Introduzca una contraseña.",
                                minLength: {
                                    value: 6,
                                    message: "La contraseña debe tener al menos 6 caracteres."
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9]{6,}$/,
                                    message: "La contraseña no es válida"
                                }
                            })}
                            onBlur = {() => handlePasswordValidation()}
                        />
                        {errors.password && <span>{errors.password.message}</span>}

                    </label>

                    <label htmlFor="validatePassword">
                        Repetir contraseña:

                        <input
                            type="password"
                            id="validatePassword"
                            {...register("validatePassword", {
                                required: "Introduzca de nuevo la contraseña."
                            })}
                            onBlur = {() => handlePasswordValidation()}
                        />
                        {errors.validatePassword && <span>{errors.validatePassword.message}</span>}

                    </label>
                    

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
