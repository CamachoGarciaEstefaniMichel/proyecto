import React, { useState } from 'react';
import { FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';

const alumnos = [
    { id: 1, nombre: 'Juan Pérez', grupo: 'IDGS-81', riesgo: 'alto' },
    { id: 2, nombre: 'María López', grupo: 'IDGS-82', riesgo: 'medio' },
    { id: 3, nombre: 'Carlos Gómez', grupo: 'IDGS-83', riesgo: 'bajo' },
    { id: 4, nombre: 'Ana Torres', grupo: 'IDGS-81', riesgo: 'alto' },
];

const StudentList = ({ mostrarRecomendacion }) => {
    const [filtro, setFiltro] = useState('todos');

    // Función para mostrar el icono de riesgo
    const obtenerIconoRiesgo = (riesgo) => {
        switch (riesgo) {
            case 'alto':
                return <FaExclamationCircle color="red" />;
            case 'medio':
                return <FaExclamationCircle color="orange" />;
            case 'bajo':
                return <FaCheckCircle color="green" />;
            default:
                return null;
        }
    };

    // Filtra alumnos según el nivel de riesgo
    const alumnosFiltrados = filtro === 'todos' 
        ? alumnos 
        : alumnos.filter(alumno => alumno.riesgo === filtro);

    return (
        <div className="container mt-4">
            <h2>Lista de Alumnos</h2>

            {/* Filtro de alumnos */}
            <div className="mb-3">
                <label htmlFor="filtro" className="form-label">Filtrar por riesgo:</label>
                <select 
                    id="filtro" 
                    className="form-select"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                >
                    <option value="todos">Todos</option>
                    <option value="alto">Riesgo Alto</option>
                    <option value="medio">Riesgo Medio</option>
                    <option value="bajo">Riesgo Bajo</option>
                </select>
            </div>

            {/* Tabla de alumnos */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Grupo</th>
                        <th>Riesgo</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnosFiltrados.map((alumno) => (
                        <tr 
                            key={alumno.id}
                            onClick={() => mostrarRecomendacion(alumno)}
                            style={{ cursor: 'pointer' }}
                        >
                            <td>{alumno.nombre}</td>
                            <td>{alumno.grupo}</td>
                            <td>{obtenerIconoRiesgo(alumno.riesgo)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;