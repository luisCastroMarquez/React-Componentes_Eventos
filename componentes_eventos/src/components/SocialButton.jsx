export default function SocialButton({ icon }) {
    return (
            <button style={{
                            height:'55px',
                            width: '55px',
                            margin: '3px',
                            display: 'inline-block',
                            fontSize: '20px',
                            borderRadius: '50px'}}>
                <i className={`fa fa-${icon}`} /> {icon}
            </button>
    );
}