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
            setMensajeErrors('Por favor, completa todos los campos del formulario.');
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
        onSubmit(e); // Llamada a la función onSubmit pasada como prop

        setNombre('');
        setEmail('');
        setContrasena('');
        setConfirmContrasena('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ Width:'360px', height:'200px' }}>
            <div>
                <label htmlFor="nombre"></label>
                <input style={{ width: '230px', height: '28px', borderRadius: '7px', margin: '5px'}}
                    type="text"
                    id="nombre"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => { setNombre(e.target.value)
                    onInputChange(e);}}
                />
            </div>
            <div >
                <label htmlFor="email" style={{width: '200px'}}></label>
                <input style={{ width: '230px', height: '28px', borderRadius: '7px', margin: '5px'}}
                    type="email"
                    id="email"
                    placeholder="tuemail@ejemplo.com"
                    value={email}
                    onChange={(e) => {
                    setEmail(e.target.value);
                    onInputChange(e);
                }}
                />
                {mensajeErrors.email && <span>{mensajeErrors.email}</span>}
            </div>
            <div>
                <label htmlFor="contrasena"></label>
                <input style={{ width: '230px', height: '28px', borderRadius: '7px', margin: '5px'}}
                    type="password"
                    id="contrasena"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => {
                        setContrasena(e.target.value);
                        onInputChange(e);
                    }}
                />
            </div>
            <div>
                <label htmlFor="confirmContrasena"></label>
                <input style={{ width: '230px', height: '28px', borderRadius: '7px', margin: '5px'}}
                    type="password"
                    id="confirmContrasena"
                    placeholder="Confirmar tu Contraseña"
                    value={confirmContrasena}
                    onChange={(e) => {
                        setConfirmContrasena(e.target.value);
                        onInputChange(e);
                    }}
                />
                {mensajeErrors.confirmContrasena && <span>{mensajeErrors.confirmContrasena}</span>}
            </div>
            <button style={{
                            width: '236px',
                            height: '28px',
                            borderRadius: '7px',
                            border:'solid 1px #000000',
                            backgroundColor: '#126327',
                            color: '#ffffff',
                            }}
                            type="submit">Registrarse</button>
            <div className=''>
                {mensajeErrors && <div className="errors-message">{mensajeErrors}</div>}
                {mensajeExito && <div className="success-message">{mensajeExito}</div>}
            </div>
        </form>
    );
};