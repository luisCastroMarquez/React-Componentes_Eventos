import { useState } from 'react';

export default function Formulario ({ onInputChange, onSubmit}) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmContrasena, setConfirmContrasena] = useState('');
    const [mensajeErrors, setMensajeErrors] = useState('');
    const [mensajeExito, setMensajeExito] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre === '' || email === '' || contrasena === '' || confirmContrasena === '') {
            alert('Por favor, completa todos los campos del formulario.');
            setMensajeExito('');
            return;
        }

        if (contrasena !== confirmContrasena) {
            setMensajeErrors('Las contraseñas no coinciden.');
            setMensajeExito('');
            return;
        }

        setMensajeErrors('');
        setMensajeExito('Formulario completado correctamente.');

        // Resto de la lógica de validación y procesamiento del formulario
        onSubmit(); // Llamada a la función onSubmit pasada como prop
    };

    return (
        <form onSubmit={handleSubmit}>
        {mensajeErrors && <div className="errors-message">{mensajeErrors}</div>}
        {mensajeExito && <div className="success-message">{mensajeExito}</div>}
            <div>
                <label htmlFor="nombre"></label>
                <input
                    type="text"
                    id="nombre"
                    placeholder="Nombre"
                    value={nombre} onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email"></label>
                <input
                    type="email"
                    id="email"
                    placeholder="Tumail@ejemplo.com"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                />
                {mensajeErrors.email && <span>{mensajeErrors.email}</span>}
            </div>
            <div>
                <label htmlFor="contrasena"></label>
                <input
                    type="password"
                    id="contrasena"
                    placeholder="Contraseña"
                    value={contrasena} onChange={(e) => setContrasena(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="confirmContrasena"></label>
                <input
                    type="password"
                    id="confirmContrasena"
                    placeholder="Confirmar tu Contraseña"
                    value={confirmContrasena} onChange={(e) => setConfirmContrasena(e.target.value)}
                />
                {mensajeErrors.confirmContrasena && <span>{mensajeErrors.confirmContrasena}</span>}
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
};