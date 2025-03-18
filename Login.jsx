import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Usamos useNavigate en lugar de useHistory
import './Login.css';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Usamos useNavigate aquí

    const handleSubmit = (e) => {
        e.preventDefault();

        if (usuario === 'tutor' && contraseña === 'tutor82') {
            navigate('/dashboard'); // Redirige al dashboard
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <img src="/logo-utvt.png" alt="Logo UTVT" className="login-logo" />
                <h2>Iniciar sesión</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                    />
                    <button type="submit" className="login-btn">Entrar</button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
