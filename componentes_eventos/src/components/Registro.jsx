import { useState } from 'react';
import Formulario from './Formulario';
import SocialButton from './SocialButton';
import Alert from './Alert';

import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';

export default function Registro() {
    const [message, setMessage] = useState('null');
    const [isFormComplete, setIsFormComplete] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (isFormComplete) {
            setMessage({ text: 'Registro aprobado. ¡Bienvenido!', type: 'success' });
        } else {
            setMessage({ text: 'Por favor, completa todos los campos del formulario.', type: 'error' });
        }
    };

    const handleInputChange = (e) => {
        if (e.target.value !== '') {
            setIsFormComplete(true);
        } else {
            setIsFormComplete(false);
        }
    };

    return (
        <div className="card d-flex flex-column "
            style={{ width: '300px', height: '470px', margin: '12px', border:'solid 1px #000000',
            borderRadius: '26px', textAlign:'center'}}>
            <h2> Crear una Cuenta </h2>
            <SocialButton icon={<FaFacebook/>} />
            <SocialButton icon={<FaTwitter/>}/>
            <SocialButton icon={<FaGoogle/>} />
            <h5>O usa tu Correo para Registrarte </h5>
            <Formulario onInputChange={handleInputChange} onSubmit={handleFormSubmit} />
            {message &&
            <Alert message={message} />}
        </div>
    );
}

