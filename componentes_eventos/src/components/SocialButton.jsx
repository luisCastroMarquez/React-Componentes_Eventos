export default function SocialButton({ icon }) {
    return (
            <button style={{
                            height:'55px',
                            width: '55px',
                            margin: '3px',
                            display: 'inline-block',
                            fontSize: '20px',
                        border:'solid 1px #000000',borderRadius: '50px'}}>
                <i className={`fa fa-${icon}`} /> {icon}
            </button>
    );
}