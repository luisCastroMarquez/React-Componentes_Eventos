import { useState } from 'react';

export default function Formulario () {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
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

        let isValid = true;
        const errors = {};

        // crear acciones formulario
        if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            isValid = false;
            Errors.email =' Por favor , ingresa un correo electronico';
        }

        if (formValues.password !== formValues.confirmPassword) {
            isValid = false;
            Errors.confirmPassword = 'Las contraseñas no coinciden.';
        }

        setFormErrors(errors);

        if (isValid) {
            console.log('Formulario enviado correctamente:', formValues);
        }   else {
            console.log('Formulario invalido:', formValues);
        }
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
                {formErrors.email && <span>{formErrors.email}</span>}
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
                {formErrors.confirmPassword && <span>{formErrors.confirmPassword}</span>}
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
};