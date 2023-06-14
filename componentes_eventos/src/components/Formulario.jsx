import { useState } from 'react';

export default function Formulario () {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado: ', formValues);
        // crear acciones formulario
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre :</label>
                <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Correo Electronico :</label>
                <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
            <label>Contraseña :</label>
                <input
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                />
            </div>
            <div>
            <label> Confirmar Contraseña :</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
};