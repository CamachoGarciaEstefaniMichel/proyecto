// Dashboard.jsx
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <img src="/logo-utvt.png" alt="Logo UTVT" className="sidebar-logo" />
                <nav>
                    <a href="/inicio">Inicio</a>
                    <a href="/alumnos-riesgo">Alumnos en Riesgo</a>
                    <a href="/encuestas">Encuestas</a>
                    <a href="/asesorias">Asesorías</a>
                    <a href="/estadisticas">Estadísticas</a>
                </nav>
            </aside>

            <main className="content">
                <div className="card">
                    <h3>Alumnos en Riesgo</h3>
                    <ul>
                        <li>Juan Pérez - IDGS-81</li>
                        <li>María López - IDGS-82</li>
                        <li>Carlos Gómez - IDGS-83</li>
                    </ul>
                    <button className="btn-verde">Ver Alumnos</button>
                </div>

                <div className="card">
                    <h3>Asistente IA</h3>
                    <p>Describe el caso del alumno para obtener recomendaciones personalizadas.</p>
                    <button className="btn-verde">Acceder al Asistente IA</button>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;