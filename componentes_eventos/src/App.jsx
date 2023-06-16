import { useState, useEffect } from 'react';
import Alert from './components/Alert';
import Registro from './components/Registro';

export default function App() {
    const [message, setMessage] = useState('');
    const [alertColor, setAlertColor] = useState('');

    const handleAlertClose = () => {
        setMessage('');
        setAlertColor('');
    };
            // Restablece los mensajes despues del formulario
    useEffect(() => {
        if (message || alertColor) {
            const timer = setTimeout(() => {
                setMessage('');
                setAlertColor('');
            },  2000);

            return () => clearTimeout(timer);
        }
    }, [message, alertColor]);

    return (
        <>
            <div className=''>
                <Registro onSubmit={handleAlertClose}/>
                {message && <Alert message={message} onClose={handleAlertClose} color={alertColor} />}
            </div>
        </>
    );
}