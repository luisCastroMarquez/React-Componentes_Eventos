import { useState, useEffect } from 'react';
import Alert from './components/Alert';
import Registro from './components/Registro';

export default function App() {
    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleAlertClose = () => {
        setMessage('');
        setAlertType('');
    };
    // Restablece los mensajes despues del formulario
    useEffect(() => {
        if (message || alertType) {
            const timer = setTimeout(() => {
                setMessage('');
                setAlertType('');
            },  2000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [message, alertType]);


    return (
        <div className=''>
            <Registro onSubmit={() => {
                    setMessage('Formulario completado correctamente.');
                    setAlertType('success');
                }}
            />
            {message && (
                <Alert message={message} onClose={handleAlertClose} type={alertType} />
            )}
        </div>
    );
}