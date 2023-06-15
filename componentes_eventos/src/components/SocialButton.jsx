export default function SocialButton({ icon }) {
    return (
            <button style={{ height:'55px', margin: '3px', display: 'inline-block',
                        border:'solid 1px #000000',borderRadius: '90px'}}>
                <i className={`fa fa-${icon}`} /> {icon}
            </button>
    );
}