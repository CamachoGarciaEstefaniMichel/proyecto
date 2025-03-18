// Chatbot.jsx
import React from 'react';
import './Chatbot.css';

const Chatbot = () => {
    return (
        <div className="chatbot">
            <h3>¿En qué puedo ayudarte hoy?</h3>
            <textarea placeholder="Describe el caso del alumno..."></textarea>
            <button className="btn-verde">Enviar</button>
        </div>
    );
};

export default Chatbot;