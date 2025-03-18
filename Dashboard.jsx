import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import logoUTVT from "./assets/logo-utvt.png"; 
import "./styles/Dashboard.css"; 

function Dashboard() {
  const [selectedSection, setSelectedSection] = useState("inicio");
  const navigate = useNavigate(); // Hook de navegación

  const handleLogout = () => {
    localStorage.removeItem("user"); // Elimina la sesión
    navigate("/login"); // Redirige al login
  };

  const renderContent = () => {
    switch (selectedSection) {
      case "asistenteIA":
        return (
          <div className="dashboard-container">
            <h2>Asistente de IA</h2>
            <p>Utilice el asistente de IA para obtener recomendaciones personalizadas para alumnos en riesgo.</p>
            <input type="text" placeholder="Ingrese ID del alumno..." className="input-field" />
            <button className="btn-ia">Obtener Recomendación</button>
          </div>
        );
      case "inicio":
        return (
          <div className="dashboard-container">
            <h2>Bienvenido a la Plataforma Escolar UTVT</h2>
            <p>Esta plataforma está diseñada para mejorar la gestión académica y el seguimiento de alumnos.</p>
            <p>Aquí puedes acceder a información clave sobre alumnos en riesgo, encuestas, asesorías e historial académicp</p>
          </div>
        );
      case "alumnos":
        return (
          <div className="dashboard-container">
            <h2>📌 Alumnos en Riesgo</h2>
            <p>Lista de alumnos con posible riesgo académico:</p>
            <ul>
              <li>📍 <strong>Jovani Garcia - IDGS-81</strong> (Bajas calificaciones)</li>
              <li>📍 <strong>Estefani Camacho - IDGS-82</strong> (Faltas de asistencia)</li>
              <li>📍 <strong>Israel Pacheco - IDGS-83</strong> (Problemas personales)</li>
            </ul>
          </div>
        );
      case "asesorias":
        return (
          <div className="dashboard-container asesorias">
            <h2>📖 Asesorías</h2>
            <p>Aquí puedes ver las sesiones de asesorías programadas para los alumnos.</p>
            <ul>
              <li>🗓 <strong>Matemáticas</strong> - Prof. Rojas (10:00 AM - 12:00 PM)</li>
              <li>🗓 <strong>Programación</strong> - Ing. Vincio (2:00 PM - 4:00 PM)</li>
            </ul>
          </div>
        );
      case "estadisticas":
        return (
          <div className="dashboard-container estadisticas">
            <h2>📊 Historial Academico </h2>
            <p>Visualización de rendimiento académico de los alumnos.</p>
          </div>
        );
      case "chatbot":
        return <Chatbot />;
      default:
        return <p>Selecciona una sección del menú.</p>;
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src={logoUTVT} alt="Logo UTVT" className="logo-utvt" />
        <h3>Panel</h3>
        <button onClick={() => setSelectedSection("inicio")}>🏠 Inicio</button>
        <button onClick={() => setSelectedSection("alumnos")}>⚠️ Alumnos en Riesgo</button>
        <button onClick={() => setSelectedSection("asesorias")}>📖 Asesorías</button>
        <button onClick={() => setSelectedSection("estadisticas")}>📊 Historial Academico </button>
        <button onClick={() => setSelectedSection("chatbot")}>💬 Chatbot</button>
        <button className={selectedSection === "asistenteIA" ? "active" : ""} onClick={() => setSelectedSection("asistenteIA")}>
          🤖 Asistente IA
        </button>
        <button className="logout-btn" onClick={handleLogout}>🚪 Cerrar sesión</button>
      </aside>

      {/* Contenido Principal */}
      <main className="dashboard-content">{renderContent()}</main>
    </div>
  );
}

export default Dashboard;
