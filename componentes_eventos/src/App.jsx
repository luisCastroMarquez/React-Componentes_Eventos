import { useState } from 'react';
import Alert from './components/Alert';
import Registro from './components/Registro';

export default function App() {
    const [message, setMessage] = useState('');
    const [alertColor, setAlertColor] = useState('');

    const handleAlertClose = () => {
        setMessage('');
        setAlertColor('');
    };

    return (
        <>
            <div className=''>
                <Registro />
                {message && <Alert message={message} onClose={handleAlertClose} color={alertColor} />}
            </div>
        </>
    );
}