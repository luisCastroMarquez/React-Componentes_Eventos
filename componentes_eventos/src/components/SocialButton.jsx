export default function SocialButton({ icon }) {
    return (
            <button>
                <i className={`fa fa-${icon}`} style={{ marginRight: '5px', display: 'inline-block' }} /> {icon}
            </button>
    );
}