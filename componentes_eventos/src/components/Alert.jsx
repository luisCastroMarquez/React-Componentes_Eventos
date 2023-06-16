export default function Alert({ message, type }) {

    const getBackgroundColor = () => {
        if (type === 'success') {
            return '#C3E6CB'; // Color verde para logrado
        } else if (type === 'danger') {
            return  '#F8D7DA'; // Color rojo para error
        } else {
            return '';
        }
    };

    return (
        <div className="alert"
            style={{
                backgroundColor: getBackgroundColor(),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height:'54px',
                width: '240px',
                margin: '3px',
                textAlign: 'center',
                borderRadius: '5px'
            }}
        >
            <p style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                }}>{message}</p>
        </div>
    );
}