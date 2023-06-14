import Formulario from './Formulario';
import SocialButton from './SocialButton';
import Alert from './Alert';


export default function Registro () {
    return (
        <div>
            <h2>Registro</h2>
            <Formulario/>
            <SocialButton icon="facebook"/>
            <SocialButton icon="twitter"/>
            <SocialButton icon="google"/>
            <Alert/>
        </div>
    );
}

