
export default function SocialButton ({icon}) {
    return (
        <div>
            <h3>Registrate Aqui :</h3>
            <button>
                <i className={'fa fa-${icon}'}/> {icon}
            </button>
        </div>
    );
}